# OLS Launcher 0.4.0

[简体中文](README.md) | [English](README.en.md)

**Origin Launch System · Qiyuan**. The release edition renamed from the former Qinglan Launcher.

A preview desktop launcher for Minecraft Java on Windows x64, featuring the light “Qinglan” and dark “Twilight” themes, with original block-style mountains, rivers, forests, and starry-sky backgrounds.

## New in 0.4.0

- Game data location is selectable: choose a directory in Settings; after copying and verification, migrate while keeping a backup of the old directory; the new location remains in use after restart. You can choose another drive before the first download.
- Local mods no longer prevent opening a world to friends. Friends select a prepared instance and join after verification against the actual JAR hashes. Both clients and the friend server must be 0.4.0.
- The home page uses pre-rendered scenery, reduces repeated background drawing and background refreshes, and samples scrolling; the stutter reported on user machines was not reproduced on the development machine.
- See [STORAGE_AND_LOCAL_MULTIPLAYER.md](docs/STORAGE_AND_LOCAL_MULTIPLAYER.md) for detailed steps, backup cleanup, and limitations.

## Retained UI features

- “About Qiyuan”: product version, licensed components, data, and service information.
- Page/dialog fade-ins, button and card feedback; animations can be reduced and system preferences are respected.
- “Launcher Settings → Background & Reading Experience”: choose a local background, overlay, and font size from 100%–150%. The background saves immediately; other settings are previewed and then saved. Default body and secondary text are larger to improve contrast in both themes.
- “My Games → Version Resource Management”: quickly select a version; mods/shaders/resource packs are in separate sections, each with its own search, filter, enable/disable, and open-folder actions.
- A friend-service disconnect does not block normal launches; stale online worlds are hidden while disconnected. See [UI_GUIDE.md](docs/UI_GUIDE.md).

## Launching the software

Fully extract `OLS-Launcher-0.4.0-Windows-x64.zip` and double-click **OLSLauncher.exe** in the folder. Do not move the EXE by itself: the adjacent runtime libraries and the `resources` folder are required. The desktop app bundles the Electron runtime, so Node.js is not required.

This build is not code-signed. All new games, resources, and settings are stored in the launcher's own data directory; the path can be viewed and changed in “Launcher Settings → Local Storage Location”. Existing Minecraft instances are not modified automatically.

## Installing and launching Minecraft

1. Click “Install Minecraft” on the home page, or go to “My Games → Install New Version”.
2. Choose an official game version and Vanilla/Fabric. **Fabric 1.21.1** is recommended because it supports automatically opening a save and multiplayer.
3. The installer downloads the official client, dependencies, and assets, verifies files, and looks for a matching Java. If none is found and automatic download is enabled, Adoptium Java is used.
4. In Launcher Settings, enter this launcher's **Microsoft public client ID**. Operators of an official release must register their own app and obtain Minecraft API permissions; this package does not borrow another launcher's app identity.
5. Click “Log in to Minecraft” in the upper-right corner, obtain a device code, and complete login on Microsoft's official website. The account must own Minecraft Java Edition. This preview does not provide offline identity bypasses.
6. Select an instance and launch. Before playing multiplayer for the first time, create a world in-game and exit normally, or use “Import World” in the multiplayer window.

The default loader supports Vanilla and Fabric; Forge, NeoForge, Quilt, and modpack installers are not integrated. The modern launch-argument flow supports versions from 1.13 onward, but the auto-multiplayer bridge built specifically for this release supports only 1.21.1.

## Detecting existing local games

In “My Games → Detect Local Games → Select Folder”, choose .minecraft, a common PCL version directory, or a modpack instance. The launcher automatically displays the version/loader, mod names and versions, world names and last-played times, as well as shaders and resource packs. Scanning is read-only and requires no network. After confirmation, you can copy-import a standalone Vanilla/Fabric instance, reusing verified local game files and filling in missing dependencies. Forge/NeoForge/Quilt are currently supported for detection and viewing only. See [LOCAL_IMPORT.md](docs/LOCAL_IMPORT.md) for detailed steps and limitations.

## Mods, shaders, and resource packs

In “Discover Resources”, switch between mods/shaders/resource packs, select a target instance, then search and install. Resources come from Modrinth, are filtered by version and loader, and required dependencies are resolved; installing a shader also prepares Iris. In “My Games → Version Resource Management”, you can enable/disable resources by version and resource section. Resources added manually to folders but not imported/registered are not refreshed into the list automatically; use local detection copy-import or platform installation.

After downloading resource packs and shaders, you must still enable them in the in-game Resource Packs/Iris settings; the launcher does not override the player's visual preferences. Do not modify the instance's resource files while the game is running.

## Launching without the friend server

Normal “Launch Game” does not check the Qiyuan account, friend server, or SakuraFrp. If the instance is fully installed, has a matching Java, and has valid cached Minecraft credentials, it can launch directly. First login or expired credentials require a Microsoft connection; missing dependencies still need to be downloaded. The friend service being offline only affects friend status, world publishing, and one-click join; it does not terminate an already running local game.

## Friend multiplayer

Multiplayer follows “friends → online status → world list → click to join”; players do not need to copy invite codes.

1. Run the bundled friend server. Local testing requires Node.js 24; double-click `Start-Server.cmd` in the server package. For cross-network deployment, see `DEPLOYMENT.md`.
2. You and your friend enter the same service address in “Launcher Settings → Friend Service”. The local test default is `http://127.0.0.1:4589`; cross-computer use requires an HTTPS address.
3. Create/log in to a Qiyuan account in the lower-left corner of the launcher. The Qiyuan account manages friends and is separate from the Microsoft game account.
4. Enter your friend's Qiyuan account and send a request; they become a friend after accepting.
5. The host binds a SakuraFrp access key in “SakuraFrp” and goes to “Friend Multiplayer → Open My World”.
6. Auto mode: select **Fabric 1.21.1**, an existing save, and an available node. The launcher installs the bridge component, launches the game, opens the save, opens it to LAN, configures a TCP tunnel, and starts the official frpc.
7. After your friend sees the world, they click “Join World”. The launcher prepares a separate matching instance and the mods installed via Qiyuan, then connects automatically.

Other versions can use the “Connect to an Open LAN” mode: first open the world to LAN in-game, then enter the port shown by the game. After exiting the world or game, or stopping multiplayer, stop the tunnel and remove the friend world.

Friend status syncs every 15 seconds; an abnormal disconnect longer than 45 seconds changes the status to offline and hides the world. The friend service only controls the visibility of world information; it is not a Minecraft network-layer whitelist. Use it only for private multiplayer among trusted friends. Local mods are not uploaded or distributed automatically, but the host may open the world; friends can select a local instance with the same mods and join after verification. Private configuration is each side's responsibility.

## SakuraFrp account and check-in

- View account level, bandwidth, remaining traffic, today's usage, traffic packages, and tunnels in the app.
- Bind/unbind an account, view tunnel status, and confirm deletion of a specified tunnel.
- “Official Account Management” opens in a separate official web window inside the app and supports account operations offered by the official site.
- “Check In for Traffic” opens the official check-in page inside the app with one click. The official public API does not currently expose a check-in submission endpoint, so this is not automatic background check-in: if web login or a CAPTCHA is required, complete it yourself. After closing the window, the launcher re-queries the actual check-in status and traffic.
- The first release does not automatically handle nodes that require additional access authentication; such nodes cannot be selected in the list.

## Documentation

- [STORAGE_AND_LOCAL_MULTIPLAYER.md](docs/STORAGE_AND_LOCAL_MULTIPLAYER.md): changing drives, migration backups, scrolling, and multiplayer with local mods.
- [UI_GUIDE.md](docs/UI_GUIDE.md): the new UI, backgrounds, font sizes, sections, and disconnect behavior.
- [TECHNICAL.md](docs/TECHNICAL.md): architecture, modules, interfaces, data, security boundaries, and development builds.
- [VERIFICATION.md](docs/VERIFICATION.md): actual test results from this round and items not yet accepted.
- Friend server `DEPLOYMENT.md`: local, Docker, HTTPS, backup, and maintenance.

This delivery is a runnable first preview. It does not claim that Microsoft accounts, Sakura accounts, or real cross-network multiplayer have been accepted. See the verification record for details.
