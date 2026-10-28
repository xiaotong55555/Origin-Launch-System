# OLS 启动器技术文档

英文全称：**Origin Launch System**；中文品牌名：**启源**。

0.1.1 为品牌更名发行。为延续已有实例、登录与好友关系，内部包名 `qinglan-launcher`、数据目录、IPC、桥接模组 ID 和好友服务协议标识继续兼容 0.1.0。用户界面、窗口标题、软件文件名及发行文档统一使用 OLS / 启源。

版本：0.4.0；日期：2026-10-28；目标平台：Windows x64。

## 1. 产品范围与结构

启动器包含官方游戏安装、隔离实例、Fabric 加载器、Modrinth 资源、Microsoft 登录、好友联机、SakuraFrp 账户与穿透、双主题界面。信息分区参考传统启动器的使用习惯；界面代码、品牌和方块场景独立制作，未复用 PCL 源码或素材。

```text
React 界面
   ↓ 白名单 IPC，参数校验
Electron 主进程
   ├─ Minecraft：官方清单 / 客户端 / 依赖 / Java / 游戏进程
   ├─ Modrinth：搜索 / 兼容过滤 / 依赖 / 校验 / 安装
   ├─ Auth：Microsoft 设备码 → Xbox → XSTS → Minecraft
   ├─ Social：好友服务登录 / 心跳 / 好友 / 世界发现
   ├─ Sakura：官方 API / 账户 / 隧道 / frpc 子进程
   └─ Rooms：世界开放、好友加入与生命周期协调

好友服务：Node.js 24 + SQLite，供双方启动器共同访问
游戏通道：朋友 Minecraft → SakuraFrp 节点 → 房主 frpc → LAN 世界
```

好友服务只交换好友关系、在线状态和世界连接元数据；不代理游戏流量，也不接收 Microsoft 或 SakuraFrp 凭证。

## 2. 源码目录

| 路径 | 职责 |
| --- | --- |
| `src/App.tsx` | 首页、游戏库、资源、好友、樱花账户、任务、设置及弹窗 |
| `src/styles.css` | 响应式布局、晴岚/暮色颜色变量、可减少动画偏好 |
| `shared/types.ts` | IPC 输入输出与界面状态类型 |
| `electron/main.ts` | 窗口、主进程服务、IPC 校验、系统文件选择 |
| `electron/preload.ts` | 最小 API 桥接，禁止页面直接访问 Node |
| `electron/core/store.ts` | 原子配置写入、系统加密凭证 |
| `electron/core/jobs.ts` | 可取消、可重试的串行操作队列 |
| `electron/core/network.ts` | HTTPS 下载、重定向校验、并行、重试、哈希 |
| `electron/core/minecraft.ts` | 版本清单、Fabric、运行库、Java 与启动参数 |
| `electron/core/modrinth.ts` | 资源解析、必要依赖与安装事务 |
| `electron/core/auth.ts` | 设备码登录、刷新与 Minecraft 档案 |
| `electron/core/social.ts` | 好友服务客户端、在线同步与世界发布 |
| `electron/core/sakura.ts` | SakuraFrp API v4 与官方 frpc |
| `electron/core/rooms.ts` | 自动开世界与好友加入流程 |
| `server/` | SQLite 好友服务及部署配置 |
| `bridge/` | Fabric 1.21.1 自动 LAN 桥接模组 |
| `scripts/artwork.mjs` | 原创方块地形/森林/星空 SVG 生成器 |
| `tests/` | 安装基础、安全边界、好友 HTTP 流程测试 |
| `verification/` | 本轮测试报告和桌面截图 |

## 3. 游戏与资源安装

从 Mojang `version_manifest_v2.json` 获取目录，校验版本 JSON SHA-1，再解析客户端、库、原生运行库、资源索引及日志配置。按系统规则筛选库；Fabric 使用官方 Meta API 获取加载器配置，合并入口、库和参数。程序只用参数数组调用 Java，不通过 shell 拼接启动命令。

实例数据独立；客户端、资源对象和运行库在启动器根目录共享缓存。安装及修复会校验已存在文件；不合格文件下载到随机 `.part` 路径，验证大小及哈希后替换。失败和取消清理临时文件。此版本支持完整重试与已完成文件缓存复用，**不提供 HTTP Range 断点续传**。

Java 优先查找用户指定路径、启动器运行时、JAVA_HOME、常见 Windows 安装目录和 PATH；按所需主版本匹配。自动下载使用 Adoptium API 及 SHA-256。

Modrinth 搜索按 `project_type`、游戏版本和 Fabric 分类过滤。下载时再次验证版本与加载器，解析必要依赖、检测冲突并校验 SHA-512。先完整下载，再将旧文件备份并应用新文件；安装异常回滚。光影使用 Iris；材质包与光影的游戏内启用由玩家决定。

## 4. 登录与凭证

Microsoft：设备码授权 → Xbox 用户认证 → XSTS → Minecraft token → Minecraft profile。启动器不收集 Microsoft 密码。刷新凭证和游戏 token 用 Electron `safeStorage` 在 Windows 加密保存，不放入普通状态 JSON。

公开发行需要运营者注册自己的 Microsoft 公共客户端并取得 Minecraft API 使用权限，本发行包没有附带可供冒用的第三方应用 ID。缺少配置或游戏所有权时会给出错误，不生成虚假正版会话。

启源：独立用户名/密码账号。服务端用随机盐和 scrypt 保存密码派生值，保存会话 token 的 SHA-256 摘要；客户端会话由系统加密保存。游戏账号与启源账号不混用。

SakuraFrp：访问密钥只供官方 API 和 frpc 使用；主进程从上游账户响应显式筛选字段，避免将响应中的 token 传入界面。frpc 的密钥使用 `NATFRP_TOKEN` 环境变量传入，不写到命令行或邀请码。

## 5. 好友与世界发现

好友关系由请求方发起、接收方确认。只有双向确认关系可以读取世界连接元数据。客户端每 15 秒发送在线心跳，服务端以 45 秒作为在线有效期。在线状态和世界信息存于内存；服务重启或连接失效后自动重新同步。

房间描述包含：协议版本、世界名、地址与端口、Minecraft 版本、加载器版本、到期时间、Modrinth 模组项目/版本列表。不包含账户密码、Microsoft token 或 Sakura token。加入使用单独的 `friend-*` 实例，避免覆盖用户自己的模组组合。

好友服务的可见性权限不是游戏层白名单。已获得地址的连接者仍受 Minecraft 自身网络规则约束，不能把好友关系检查描述为完整的游戏端访问控制。

### HTTP API

除健康检查、注册与登录外，均要求 `Authorization: Bearer <session>`。

| 方法与路径 | 用途 |
| --- | --- |
| `GET /health` | 服务健康与协议版本 |
| `POST /v1/register` | 注册账号 |
| `POST /v1/login` | 登录并获取会话 |
| `POST /v1/presence` | 心跳，返回当前用户及好友快照 |
| `POST /v1/disconnect` | 清除在线状态及本会话的世界，保留登录 |
| `POST /v1/logout` | 撤销会话 |
| `POST /v1/friends` | 按用户名申请好友 |
| `PATCH /v1/friends/{id}` | 接收方同意/拒绝 |
| `DELETE /v1/friends/{id}` | 移除关系或撤回申请 |
| `PUT /v1/room` | 发布或更新当前世界 |
| `DELETE /v1/room` | 撤下当前会话的世界 |
| `GET /v1/rooms/{id}` | 双向好友读取世界连接配置 |

当前协议采用定时 HTTP 同步，不是 WebSocket 推送。服务端使用 SQLite WAL，适用于单实例小规模部署；未实现账号找回、邮件验证、管理后台、跨节点数据库复制或大规模运营监控。

## 6. 自动联机流程

1. 检查启源已连接、实例已安装、Sakura 绑定及节点可用。
2. 自动模式仅支持 Fabric 1.21.1；安装 Fabric API 和随包桥接模组。
3. 启动 Minecraft，传入官方 Quick Play 单人存档参数，以及本次有效的 LAN 端口和随机会话标识。
4. 桥接模组在世界和玩家已加载后调用集成服务器的 `openToLan`，不自动开启作弊。
5. 桥接输出携带本次随机标识的就绪消息；启动器确认消息与端口响应后配置隧道。
6. 从 Sakura API v4 创建/复用专用 TCP 隧道，下载并校验官方 Windows x64 frpc，启动进程。
7. 以官方 API 返回的隧道在线状态确认连接，然后发布世界到好友服务。
8. 朋友点击加入后获取配置、准备隔离实例和资源，用 Quick Play 多人参数连接。
9. 游戏退出、离开世界、端口不再响应或 frpc 断开时撤下好友世界并停止穿透。

桥接默认无行为，只有本次被启动器明确作为房主启动才开放世界；本次打开的世界关闭后，不自动暴露随后打开的其他存档。停止启动器联机关闭公网穿透，游戏的 LAN 状态由游戏会话自身控制。

## 7. 樱花账户管理与签到边界

使用官方 API v4 的 `/user/info`、`/user/data_plans`、`/nodes`、`/tunnels`、`/tunnel/edit`、`/tunnel/delete`、`/system/clients`。节点离线、容量不可用或需要额外访问认证时禁止直接选用。首版面向私人好友联机，不自动开通付费服务。

官方账户 API 提供签到状态、累计天数、累计流量，但公开规范没有签到提交路由。因此「签到领流量」打开应用内的官方网页窗口，不模拟接口、不绕过验证码、不虚构已领取流量。网页关闭后重新查询官方数据。完整账号资料、实名或密码相关操作在官方页面内完成。

远程官网窗口使用独立持久化浏览会话、沙箱、无 Node 集成、无启动器 preload，不可调用本机文件和进程接口。

## 8. 数据与安全边界

```text
<启动器数据根>/
  state.json            # 设置、实例列表、公开游戏档案
  secrets/*.bin         # 系统加密的凭证
  instances/<id>/       # 游戏目录 / 存档 / 资源
  versions/             # 官方与合并后的启动配置 / 客户端
  libraries/            # Java 依赖库
  assets/               # 官方资源索引与对象
  natives/              # 原生库
  runtimes/             # 可选自动下载的 Java
  cache/                # 下载缓存
  backups/              # 资源替换前的旧文件
  tools/                # 校验后的 frpc
```

Electron 开启 `contextIsolation`、sandbox，禁用 renderer Node；IPC 检查来源和参数。下载使用限定 HTTPS 主机、重定向复核、大小/摘要校验。文件路径限制在数据目录，ZIP 拒绝路径穿越和符号链接。日志不输出启动凭证；不将登录密码写入普通配置。好友服务远程地址要求 HTTPS，只允许本机调试使用 HTTP。

## 9. 开发和构建

需要 Node.js 24、npm、Java 21；桥接使用 Gradle 8.10.2 和 Fabric Loom。实际锁定版本见 `package-lock.json`。

```powershell
npm ci
npm run dev
npm run typecheck
npm test
npm run build
npm run build:server
```

桥接独立构建（在解压后的启动器源码目录运行，已附 Gradle Wrapper）：

```powershell
.\bridge\gradlew.bat -p bridge bundleBridge
```

运行时 `resources/qinglan-world-bridge-1.21.1.jar` 为映射后的正式 JAR。桌面便携目录构建：

```powershell
node scripts/package-portable.mjs
```

`npm run dist` 提供 electron-builder 的单文件 portable 构建入口；当前交付采用完整便携目录 ZIP，减少额外安装依赖。软件已附运行时及所用前端库的许可证；正式发行仍应增加产品签名、升级渠道和受维护的服务端运营方案。

## 10. 参考接口

- [Mojang 官方版本清单](https://piston-meta.mojang.com/mc/game/version_manifest_v2.json)
- [Fabric Meta API](https://meta.fabricmc.net/)
- [Modrinth API 文档](https://docs.modrinth.com/api/)
- [Microsoft 设备码授权](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-device-code)
- [SakuraFrp 官方 API](https://github.com/natfrp/api)
- [SakuraFrp frpc 用户手册](https://doc.natfrp.com/frpc/manual.html)

## 11. 已知边界

此版本为首版预览，详细验证结果见 `VERIFICATION.md`。未完成真实账号的 Minecraft 启动、SakuraFrp 隧道和跨网络多人验收；自动签到需要官方页面交互；好友服务未部署公网；自动开存档桥接只适配 Fabric 1.21.1。没有自动更新、整合包导入、Forge/NeoForge 安装、云存档、模组配置同步或生产账号恢复服务。

## 12. 本地游戏识别与导入（0.2.0新增，0.3.0保留）

新增只读的本地目录发现、JAR/TOML 元数据和有界 NBT 世界摘要。使用主进程扫描 ID 接入，支持共享/隔离目录和常见 PCL、MultiMC/Prism 布局。复制导入原版/Fabric 到独立目录，按官方哈希复用缓存，保留未完成状态和重试边界。本地模组不会伪装为可联网同步资源。详见 `LOCAL_IMPORT.md`。

## 13. 0.3.0 外观、资源分区与断线隔离

新增 src/Appearance.tsx、ResourceManager.tsx 及「关于启源」页面。资源管理依赖当前实例 ID，只显示所选 kind，并保持模组/光影/材质包的真实文件目录隔离；搜索/启用状态筛选不修改文件。启停继续调用原主进程 rename+持久化回滚。运行游戏或文件任务时暂停 UI 启停。手工放入未登记文件不会自动出现在列表。

Settings 在 schema1 中向后兼容增加可选 textScale(1–1.5)、reduceMotion、backgroundDim(.35–.9)、backgroundRevision(UUID)，旧配置按默认值读取。字号调整基础文字，不整体缩放窗口；默认辅助文字至少13 CSS px，多数正文15–16px，较大标题保持原尺寸。双主题提高弱文本对比度，窄窗可滚动、工具栏换行。设置草稿不会被常规心跳重新渲染重置。

新增白名单 IPC chooseBackground/getBackground/resetBackground。原生选择器限制常见静态位图，主进程再次校验文件大小≤24MB和解码尺寸≤16384，nativeImage 解码后按最长边2560重新编码 PNG。原子写入固定数据目录 appearance/background.png，源路径不进入状态。背景以独立受限IPC按需读取 data URI，不随每次状态通知广播；CSP 保持本地/data:图片白名单，不开放 file:、脚本或任意网络地址。reset 删除本地副本，backgroundRevision 由主进程维护，saveSettings 不能伪造路径。

背景遮罩在主内容区生效，侧栏、标题栏及面板保留高可读底色。动画仅 transform/opacity 等轻量反馈，无持续 WebGL 场景或全屏动画；prefers-reduced-motion 和用户开关均可关闭。

Minecraft.launch 只依赖本地已安装实例、Auth.session 和 Java，未调用 Social/Sakura。好友心跳在独立计时器执行，失败时保留好友关系及账号，清除过期 online/world，后续成功心跳恢复。不会注销 Minecraft 或终止本地游戏。网络全断时，只有有效正版缓存会话和齐全依赖的本地启动路径可用；不新增离线身份或跳过正版认证。

实测使用全网络拒绝、合成缓存会话和独立 Java LaunchProbe，经过实际 IPC→任务→Java 探测→spawn→测试程序写入标记；此验证只证明启动链路与好友服务隔离，不代表真实游戏或账号验收。服务配置与本机性能采样见 server/DEPLOYMENT.md / verification/server-benchmark.json。

## 14. 0.4.0 位置迁移与本地模组房间

启动从系统userData/storage.json读取schema1绝对数据根目录索引，默认兼容userData/data。不存在的外部磁盘明确报错，不创建空库。chooseStorage只接受原生选择器结果并生成10分钟有效的主进程预览ID，目标固定为所选目录下OLSData；migrateStorage只接受该ID。迁移需无运行游戏/房间/文件任务，暂停好友心跳并取消账号登录，等待状态/凭证写入队列。存储扫描/复制拒绝链接、互相嵌套与非空目标，statfs检查容量，逐文件SHA-256验证并复核源目录变化；保留空目录和源备份。失败留不完整标记，成功后原子提交位置索引并切换Store.root，所有后续文件访问及加密凭证使用新根目录。旧目录不自动清理。指向旧根目录内的指定Java路径同步重映射，任意私人配置文本不做搜索替换。

新增local-multiplayer.ts直接读取mods中的启用JAR，512文件上限、大小/内容摘要/源稳定性检查。平台资源与真实文件不一致时使用房间schema2 + localMods清单；schema1保留平台ID自动准备流程。schema2清单仅给已接受好友，公开好友摘要只带requiresLocal标记及数量。旧服务端能力由/health的roomSchemas检测，新服务保持账号/好友SQLite结构和健康version1兼容；仅房间写入请求体上限提升到256KiB，其余请求保持64KiB。

friendRoom/checkFriendMods/joinFriend新增明确本地实例选择。版本与Fabric loaderVersion必须一致，JAR按SHA-512和大小多重集合比较，允许改名、拒绝缺失/额外/改动，精确豁免随包LAN桥接摘要。UI预检后加入时再次校验；schema2不安装/上传私人JAR、不替换本人资源，schema1仍用独立friend-*实例准备。

首页用预渲染PNG代替SVG运行绘制，移除重复全窗景观、限定滚动绘制范围，缓存首页React片段，将背景状态设为低优先级、主进程状态通知最小间隔250ms。原SVG保留便于编辑，可运行scripts/rasterize-art.mjs重新导出。滚动短样本未在开发机复现长帧，不提供用户设备性能保证。详见新增使用文档与VERIFICATION.md。
