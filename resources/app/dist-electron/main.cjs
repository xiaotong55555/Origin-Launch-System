"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/adm-zip/util/constants.js
var require_constants = __commonJS({
  "node_modules/adm-zip/util/constants.js"(exports2, module2) {
    module2.exports = {
      /* The local file header */
      LOCHDR: 30,
      // LOC header size
      LOCSIG: 67324752,
      // "PK\003\004"
      LOCVER: 4,
      // version needed to extract
      LOCFLG: 6,
      // general purpose bit flag
      LOCHOW: 8,
      // compression method
      LOCTIM: 10,
      // modification time (2 bytes time, 2 bytes date)
      LOCCRC: 14,
      // uncompressed file crc-32 value
      LOCSIZ: 18,
      // compressed size
      LOCLEN: 22,
      // uncompressed size
      LOCNAM: 26,
      // filename length
      LOCEXT: 28,
      // extra field length
      /* The Data descriptor */
      EXTSIG: 134695760,
      // "PK\007\008"
      EXTHDR: 16,
      // EXT header size
      EXTCRC: 4,
      // uncompressed file crc-32 value
      EXTSIZ: 8,
      // compressed size
      EXTLEN: 12,
      // uncompressed size
      /* The central directory file header */
      CENHDR: 46,
      // CEN header size
      CENSIG: 33639248,
      // "PK\001\002"
      CENVEM: 4,
      // version made by
      CENVER: 6,
      // version needed to extract
      CENFLG: 8,
      // encrypt, decrypt flags
      CENHOW: 10,
      // compression method
      CENTIM: 12,
      // modification time (2 bytes time, 2 bytes date)
      CENCRC: 16,
      // uncompressed file crc-32 value
      CENSIZ: 20,
      // compressed size
      CENLEN: 24,
      // uncompressed size
      CENNAM: 28,
      // filename length
      CENEXT: 30,
      // extra field length
      CENCOM: 32,
      // file comment length
      CENDSK: 34,
      // volume number start
      CENATT: 36,
      // internal file attributes
      CENATX: 38,
      // external file attributes (host system dependent)
      CENOFF: 42,
      // LOC header offset
      /* The entries in the end of central directory */
      ENDHDR: 22,
      // END header size
      ENDSIG: 101010256,
      // "PK\005\006"
      ENDSUB: 8,
      // number of entries on this disk
      ENDTOT: 10,
      // total number of entries
      ENDSIZ: 12,
      // central directory size in bytes
      ENDOFF: 16,
      // offset of first CEN header
      ENDCOM: 20,
      // zip file comment length
      END64HDR: 20,
      // zip64 END header size
      END64SIG: 117853008,
      // zip64 Locator signature, "PK\006\007"
      END64START: 4,
      // number of the disk with the start of the zip64
      END64OFF: 8,
      // relative offset of the zip64 end of central directory
      END64NUMDISKS: 16,
      // total number of disks
      ZIP64SIG: 101075792,
      // zip64 signature, "PK\006\006"
      ZIP64HDR: 56,
      // zip64 record minimum size
      ZIP64LEAD: 12,
      // leading bytes at the start of the record, not counted by the value stored in ZIP64SIZE
      ZIP64SIZE: 4,
      // zip64 size of the central directory record
      ZIP64VEM: 12,
      // zip64 version made by
      ZIP64VER: 14,
      // zip64 version needed to extract
      ZIP64DSK: 16,
      // zip64 number of this disk
      ZIP64DSKDIR: 20,
      // number of the disk with the start of the record directory
      ZIP64SUB: 24,
      // number of entries on this disk
      ZIP64TOT: 32,
      // total number of entries
      ZIP64SIZB: 40,
      // zip64 central directory size in bytes
      ZIP64OFF: 48,
      // offset of start of central directory with respect to the starting disk number
      ZIP64EXTRA: 56,
      // extensible data sector
      /* Compression methods */
      STORED: 0,
      // no compression
      SHRUNK: 1,
      // shrunk
      REDUCED1: 2,
      // reduced with compression factor 1
      REDUCED2: 3,
      // reduced with compression factor 2
      REDUCED3: 4,
      // reduced with compression factor 3
      REDUCED4: 5,
      // reduced with compression factor 4
      IMPLODED: 6,
      // imploded
      // 7 reserved for Tokenizing compression algorithm
      DEFLATED: 8,
      // deflated
      ENHANCED_DEFLATED: 9,
      // enhanced deflated
      PKWARE: 10,
      // PKWare DCL imploded
      // 11 reserved by PKWARE
      BZIP2: 12,
      //  compressed using BZIP2
      // 13 reserved by PKWARE
      LZMA: 14,
      // LZMA
      // 15-17 reserved by PKWARE
      IBM_TERSE: 18,
      // compressed using IBM TERSE
      IBM_LZ77: 19,
      // IBM LZ77 z
      AES_ENCRYPT: 99,
      // WinZIP AES encryption method
      /* General purpose bit flag */
      // values can obtained with expression 2**bitnr
      FLG_ENC: 1,
      // Bit 0: encrypted file
      FLG_COMP1: 2,
      // Bit 1, compression option
      FLG_COMP2: 4,
      // Bit 2, compression option
      FLG_DESC: 8,
      // Bit 3, data descriptor
      FLG_ENH: 16,
      // Bit 4, enhanced deflating
      FLG_PATCH: 32,
      // Bit 5, indicates that the file is compressed patched data.
      FLG_STR: 64,
      // Bit 6, strong encryption (patented)
      // Bits 7-10: Currently unused.
      FLG_EFS: 2048,
      // Bit 11: Language encoding flag (EFS)
      // Bit 12: Reserved by PKWARE for enhanced compression.
      // Bit 13: encrypted the Central Directory (patented).
      // Bits 14-15: Reserved by PKWARE.
      FLG_MSK: 4096,
      // mask header values
      /* Load type */
      FILE: 2,
      BUFFER: 1,
      NONE: 0,
      /* 4.5 Extensible data fields */
      EF_ID: 0,
      EF_SIZE: 2,
      /* Header IDs */
      ID_ZIP64: 1,
      ID_AVINFO: 7,
      ID_PFS: 8,
      ID_OS2: 9,
      ID_NTFS: 10,
      ID_OPENVMS: 12,
      ID_UNIX: 13,
      ID_FORK: 14,
      ID_PATCH: 15,
      ID_X509_PKCS7: 20,
      ID_X509_CERTID_F: 21,
      ID_X509_CERTID_C: 22,
      ID_STRONGENC: 23,
      ID_RECORD_MGT: 24,
      ID_X509_PKCS7_RL: 25,
      ID_IBM1: 101,
      ID_IBM2: 102,
      ID_POSZIP: 18064,
      EF_ZIP64_OR_32: 4294967295,
      EF_ZIP64_OR_16: 65535,
      EF_ZIP64_SUNCOMP: 0,
      EF_ZIP64_SCOMP: 8,
      EF_ZIP64_RHO: 16,
      EF_ZIP64_DSN: 24
    };
  }
});

// node_modules/adm-zip/util/errors.js
var require_errors = __commonJS({
  "node_modules/adm-zip/util/errors.js"(exports2) {
    var errors = {
      /* Header error messages */
      INVALID_LOC: "Invalid LOC header (bad signature)",
      INVALID_CEN: "Invalid CEN header (bad signature)",
      INVALID_END: "Invalid END header (bad signature)",
      /* Descriptor */
      DESCRIPTOR_NOT_EXIST: "No descriptor present",
      DESCRIPTOR_UNKNOWN: "Unknown descriptor format",
      DESCRIPTOR_FAULTY: "Descriptor data is malformed",
      /* ZipEntry error messages*/
      NO_DATA: "Nothing to decompress",
      BAD_CRC: "CRC32 checksum failed {0}",
      FILE_IN_THE_WAY: "There is a file in the way: {0}",
      UNKNOWN_METHOD: "Invalid/unsupported compression method",
      /* Inflater error messages */
      AVAIL_DATA: "inflate::Available inflate data did not terminate",
      INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
      TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
      INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
      INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
      INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
      INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
      INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
      INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
      INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
      /* ADM-ZIP error messages */
      CANT_EXTRACT_FILE: "Could not extract the file",
      CANT_OVERRIDE: "Target file already exists",
      DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
      NO_ZIP: "No zip file was loaded",
      NO_ENTRY: "Entry doesn't exist",
      DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
      FILE_NOT_FOUND: 'File not found: "{0}"',
      NOT_IMPLEMENTED: "Not implemented",
      INVALID_FILENAME: "Invalid filename",
      INVALID_FORMAT: "Invalid or unsupported zip format. No END header found",
      INVALID_PASS_PARAM: "Incompatible password parameter",
      WRONG_PASSWORD: "Wrong Password",
      /* ADM-ZIP */
      COMMENT_TOO_LONG: "Comment is too long",
      // Comment can be max 65535 bytes long (NOTE: some non-US characters may take more space)
      EXTRA_FIELD_PARSE_ERROR: "Extra field parsing error"
    };
    function E(message) {
      return function(...args) {
        if (args.length) {
          message = message.replace(/\{(\d)\}/g, (_, n) => args[n] || "");
        }
        return new Error("ADM-ZIP: " + message);
      };
    }
    for (const msg of Object.keys(errors)) {
      exports2[msg] = E(errors[msg]);
    }
  }
});

// node_modules/adm-zip/util/utils.js
var require_utils = __commonJS({
  "node_modules/adm-zip/util/utils.js"(exports2, module2) {
    var fsystem = require("fs");
    var pth = require("path");
    var Constants = require_constants();
    var Errors = require_errors();
    var isWin = typeof process === "object" && "win32" === process.platform;
    var is_Obj = (obj) => typeof obj === "object" && obj !== null;
    var crcTable = new Uint32Array(256).map((t, c) => {
      for (let k = 0; k < 8; k++) {
        if ((c & 1) !== 0) {
          c = 3988292384 ^ c >>> 1;
        } else {
          c >>>= 1;
        }
      }
      return c >>> 0;
    });
    function Utils(opts) {
      this.sep = pth.sep;
      this.fs = fsystem;
      if (is_Obj(opts)) {
        if (is_Obj(opts.fs) && typeof opts.fs.statSync === "function") {
          this.fs = opts.fs;
        }
      }
    }
    module2.exports = Utils;
    Utils.prototype.makeDir = function(folder) {
      const self = this;
      function mkdirSync(fpath) {
        let resolvedPath = fpath.split(self.sep)[0];
        fpath.split(self.sep).forEach(function(name) {
          if (!name || name.substr(-1, 1) === ":") return;
          resolvedPath += self.sep + name;
          var stat;
          try {
            stat = self.fs.statSync(resolvedPath);
          } catch (e) {
            if (e.message && e.message.startsWith("ENOENT")) {
              self.fs.mkdirSync(resolvedPath);
            } else {
              throw e;
            }
          }
          if (stat && stat.isFile()) throw Errors.FILE_IN_THE_WAY(`"${resolvedPath}"`);
        });
      }
      mkdirSync(folder);
    };
    Utils.prototype.writeFileTo = function(path11, content, overwrite, attr) {
      const self = this;
      if (self.fs.existsSync(path11)) {
        if (!overwrite) return false;
        var stat = self.fs.statSync(path11);
        if (stat.isDirectory()) {
          return false;
        }
      }
      var folder = pth.dirname(path11);
      if (!self.fs.existsSync(folder)) {
        self.makeDir(folder);
      }
      var fd;
      try {
        fd = self.fs.openSync(path11, "w", 438);
      } catch (e) {
        self.fs.chmodSync(path11, 438);
        fd = self.fs.openSync(path11, "w", 438);
      }
      if (fd) {
        try {
          self.fs.writeSync(fd, content, 0, content.length, 0);
        } finally {
          self.fs.closeSync(fd);
        }
      }
      self.fs.chmodSync(path11, attr || 438);
      return true;
    };
    Utils.prototype.writeFileToAsync = function(path11, content, overwrite, attr, callback) {
      if (typeof attr === "function") {
        callback = attr;
        attr = void 0;
      }
      const self = this;
      self.fs.exists(path11, function(exist) {
        if (exist && !overwrite) return callback(false);
        self.fs.stat(path11, function(err, stat) {
          if (exist && stat.isDirectory()) {
            return callback(false);
          }
          var folder = pth.dirname(path11);
          self.fs.exists(folder, function(exists2) {
            if (!exists2) self.makeDir(folder);
            self.fs.open(path11, "w", 438, function(err2, fd) {
              if (err2) {
                self.fs.chmod(path11, 438, function() {
                  self.fs.open(path11, "w", 438, function(err3, fd2) {
                    self.fs.write(fd2, content, 0, content.length, 0, function() {
                      self.fs.close(fd2, function() {
                        self.fs.chmod(path11, attr || 438, function() {
                          callback(true);
                        });
                      });
                    });
                  });
                });
              } else if (fd) {
                self.fs.write(fd, content, 0, content.length, 0, function() {
                  self.fs.close(fd, function() {
                    self.fs.chmod(path11, attr || 438, function() {
                      callback(true);
                    });
                  });
                });
              } else {
                self.fs.chmod(path11, attr || 438, function() {
                  callback(true);
                });
              }
            });
          });
        });
      });
    };
    Utils.prototype.findFiles = function(path11) {
      const self = this;
      function findSync(dir, pattern, recursive) {
        if (typeof pattern === "boolean") {
          recursive = pattern;
          pattern = void 0;
        }
        let files = [];
        self.fs.readdirSync(dir).forEach(function(file) {
          const path12 = pth.join(dir, file);
          const stat = self.fs.statSync(path12);
          if (!pattern || pattern.test(path12)) {
            files.push(pth.normalize(path12) + (stat.isDirectory() ? self.sep : ""));
          }
          if (stat.isDirectory() && recursive) files = files.concat(findSync(path12, pattern, recursive));
        });
        return files;
      }
      return findSync(path11, void 0, true);
    };
    Utils.prototype.findFilesAsync = function(dir, cb) {
      const self = this;
      let results = [];
      self.fs.readdir(dir, function(err, list) {
        if (err) return cb(err);
        let list_length = list.length;
        if (!list_length) return cb(null, results);
        list.forEach(function(file) {
          file = pth.join(dir, file);
          self.fs.stat(file, function(err2, stat) {
            if (err2) return cb(err2);
            if (stat) {
              results.push(pth.normalize(file) + (stat.isDirectory() ? self.sep : ""));
              if (stat.isDirectory()) {
                self.findFilesAsync(file, function(err3, res) {
                  if (err3) return cb(err3);
                  results = results.concat(res);
                  if (!--list_length) cb(null, results);
                });
              } else {
                if (!--list_length) cb(null, results);
              }
            }
          });
        });
      });
    };
    Utils.prototype.getAttributes = function() {
    };
    Utils.prototype.setAttributes = function() {
    };
    Utils.crc32update = function(crc, byte) {
      return crcTable[(crc ^ byte) & 255] ^ crc >>> 8;
    };
    Utils.crc32 = function(buf) {
      if (typeof buf === "string") {
        buf = Buffer.from(buf, "utf8");
      }
      let len = buf.length;
      let crc = ~0;
      for (let off = 0; off < len; ) crc = Utils.crc32update(crc, buf[off++]);
      return ~crc >>> 0;
    };
    Utils.methodToString = function(method) {
      switch (method) {
        case Constants.STORED:
          return "STORED (" + method + ")";
        case Constants.DEFLATED:
          return "DEFLATED (" + method + ")";
        default:
          return "UNSUPPORTED (" + method + ")";
      }
    };
    Utils.canonical = function(path11) {
      if (!path11) return "";
      const safeSuffix = pth.posix.normalize("/" + path11.split("\\").join("/"));
      return pth.join(".", safeSuffix);
    };
    Utils.zipnamefix = function(path11) {
      if (!path11) return "";
      const safeSuffix = pth.posix.normalize("/" + path11.split("\\").join("/"));
      return pth.posix.join(".", safeSuffix);
    };
    Utils.findLast = function(arr, callback) {
      if (!Array.isArray(arr)) throw new TypeError("arr is not array");
      const len = arr.length >>> 0;
      for (let i = len - 1; i >= 0; i--) {
        if (callback(arr[i], i, arr)) {
          return arr[i];
        }
      }
      return void 0;
    };
    Utils.sanitize = function(prefix, name) {
      prefix = pth.resolve(pth.normalize(prefix));
      var parts = name.split("/");
      for (var i = 0, l = parts.length; i < l; i++) {
        var path11 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
        if (path11 === prefix || path11.startsWith(prefix + pth.sep)) {
          return path11;
        }
      }
      return pth.normalize(pth.join(prefix, pth.basename(name)));
    };
    Utils.toBuffer = function toBuffer(input, encoder) {
      if (Buffer.isBuffer(input)) {
        return input;
      } else if (input instanceof Uint8Array) {
        return Buffer.from(input);
      } else {
        return typeof input === "string" ? encoder(input) : Buffer.alloc(0);
      }
    };
    Utils.readBigUInt64LE = function(buffer, index) {
      const lo = buffer.readUInt32LE(index);
      const hi = buffer.readUInt32LE(index + 4);
      return hi * 4294967296 + lo;
    };
    Utils.writeBigUInt64LE = function(buffer, value, index) {
      const lo = value >>> 0;
      const hi = Math.floor(value / 4294967296) >>> 0;
      buffer.writeUInt32LE(lo, index);
      buffer.writeUInt32LE(hi, index + 4);
    };
    Utils.fromDOS2Date = function(val) {
      return new Date((val >> 25 & 127) + 1980, Math.max((val >> 21 & 15) - 1, 0), Math.max(val >> 16 & 31, 1), val >> 11 & 31, val >> 5 & 63, (val & 31) << 1);
    };
    Utils.fromDate2DOS = function(val) {
      let date = 0;
      let time = 0;
      if (val.getFullYear() > 1979) {
        date = (val.getFullYear() - 1980 & 127) << 9 | val.getMonth() + 1 << 5 | val.getDate();
        time = val.getHours() << 11 | val.getMinutes() << 5 | val.getSeconds() >> 1;
      }
      return date << 16 | time;
    };
    Utils.isWin = isWin;
    Utils.crcTable = crcTable;
  }
});

// node_modules/adm-zip/util/fattr.js
var require_fattr = __commonJS({
  "node_modules/adm-zip/util/fattr.js"(exports2, module2) {
    var pth = require("path");
    module2.exports = function(path11, { fs: fs14 }) {
      var _path = path11 || "", _obj = newAttr(), _stat = null;
      function newAttr() {
        return {
          directory: false,
          readonly: false,
          hidden: false,
          executable: false,
          mtime: 0,
          atime: 0
        };
      }
      if (_path && fs14.existsSync(_path)) {
        _stat = fs14.statSync(_path);
        _obj.directory = _stat.isDirectory();
        _obj.mtime = _stat.mtime;
        _obj.atime = _stat.atime;
        _obj.executable = (73 & _stat.mode) !== 0;
        _obj.readonly = (128 & _stat.mode) === 0;
        _obj.hidden = pth.basename(_path)[0] === ".";
      } else {
        console.warn("Invalid path: " + _path);
      }
      return {
        get directory() {
          return _obj.directory;
        },
        get readOnly() {
          return _obj.readonly;
        },
        get hidden() {
          return _obj.hidden;
        },
        get mtime() {
          return _obj.mtime;
        },
        get atime() {
          return _obj.atime;
        },
        get executable() {
          return _obj.executable;
        },
        decodeAttributes: function() {
        },
        encodeAttributes: function() {
        },
        toJSON: function() {
          return {
            path: _path,
            isDirectory: _obj.directory,
            isReadOnly: _obj.readonly,
            isHidden: _obj.hidden,
            isExecutable: _obj.executable,
            mTime: _obj.mtime,
            aTime: _obj.atime
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/util/decoder.js
var require_decoder = __commonJS({
  "node_modules/adm-zip/util/decoder.js"(exports2, module2) {
    module2.exports = {
      efs: true,
      encode: (data) => Buffer.from(data, "utf8"),
      decode: (data) => data.toString("utf8")
    };
  }
});

// node_modules/adm-zip/util/index.js
var require_util = __commonJS({
  "node_modules/adm-zip/util/index.js"(exports2, module2) {
    module2.exports = require_utils();
    module2.exports.Constants = require_constants();
    module2.exports.Errors = require_errors();
    module2.exports.FileAttr = require_fattr();
    module2.exports.decoder = require_decoder();
  }
});

// node_modules/adm-zip/headers/entryHeader.js
var require_entryHeader = __commonJS({
  "node_modules/adm-zip/headers/entryHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
      _verMade |= Utils.isWin ? 2560 : 768;
      _flags |= Constants.FLG_EFS;
      const _localHeader = {
        extraLen: 0
      };
      const uint32 = (val) => Math.max(0, val) >>> 0;
      const uint16 = (val) => Math.max(0, val) & 65535;
      const uint8 = (val) => Math.max(0, val) & 255;
      _time = Utils.fromDate2DOS(/* @__PURE__ */ new Date());
      return {
        get made() {
          return _verMade;
        },
        set made(val) {
          _verMade = val;
        },
        get version() {
          return _version;
        },
        set version(val) {
          _version = val;
        },
        get flags() {
          return _flags;
        },
        set flags(val) {
          _flags = val;
        },
        get flags_efs() {
          return (_flags & Constants.FLG_EFS) > 0;
        },
        set flags_efs(val) {
          if (val) {
            _flags |= Constants.FLG_EFS;
          } else {
            _flags &= ~Constants.FLG_EFS;
          }
        },
        get flags_desc() {
          return (_flags & Constants.FLG_DESC) > 0;
        },
        set flags_desc(val) {
          if (val) {
            _flags |= Constants.FLG_DESC;
          } else {
            _flags &= ~Constants.FLG_DESC;
          }
        },
        get method() {
          return _method;
        },
        set method(val) {
          switch (val) {
            case Constants.STORED:
              this.version = 10;
              break;
            case Constants.DEFLATED:
            default:
              this.version = 20;
          }
          _method = val;
        },
        get time() {
          return Utils.fromDOS2Date(this.timeval);
        },
        set time(val) {
          val = new Date(val);
          this.timeval = Utils.fromDate2DOS(val);
        },
        get timeval() {
          return _time;
        },
        set timeval(val) {
          _time = uint32(val);
        },
        get timeHighByte() {
          return uint8(_time >>> 8);
        },
        get crc() {
          return _crc;
        },
        set crc(val) {
          _crc = uint32(val);
        },
        get compressedSize() {
          return _compressedSize;
        },
        set compressedSize(val) {
          _compressedSize = uint32(val);
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = uint32(val);
        },
        get fileNameLength() {
          return _fnameLen;
        },
        set fileNameLength(val) {
          _fnameLen = val;
        },
        get extraLength() {
          return _extraLen;
        },
        set extraLength(val) {
          _extraLen = val;
        },
        get extraLocalLength() {
          return _localHeader.extraLen;
        },
        set extraLocalLength(val) {
          _localHeader.extraLen = val;
        },
        get commentLength() {
          return _comLen;
        },
        set commentLength(val) {
          _comLen = val;
        },
        get diskNumStart() {
          return _diskStart;
        },
        set diskNumStart(val) {
          _diskStart = uint32(val);
        },
        get inAttr() {
          return _inattr;
        },
        set inAttr(val) {
          _inattr = uint32(val);
        },
        get attr() {
          return _attr;
        },
        set attr(val) {
          _attr = uint32(val);
        },
        // get Unix file permissions
        get fileAttr() {
          return (_attr || 0) >> 16 & 4095;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = uint32(val);
        },
        get encrypted() {
          return (_flags & Constants.FLG_ENC) === Constants.FLG_ENC;
        },
        get centralHeaderSize() {
          return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
        },
        get realDataOffset() {
          return _offset + Constants.LOCHDR + _localHeader.fnameLen + _localHeader.extraLen;
        },
        get localHeader() {
          return _localHeader;
        },
        loadLocalHeaderFromBinary: function(input) {
          var data = input.slice(_offset, _offset + Constants.LOCHDR);
          if (data.readUInt32LE(0) !== Constants.LOCSIG) {
            throw Utils.Errors.INVALID_LOC();
          }
          _localHeader.version = data.readUInt16LE(Constants.LOCVER);
          _localHeader.flags = data.readUInt16LE(Constants.LOCFLG);
          _localHeader.flags_desc = (_localHeader.flags & Constants.FLG_DESC) > 0;
          _localHeader.method = data.readUInt16LE(Constants.LOCHOW);
          _localHeader.time = data.readUInt32LE(Constants.LOCTIM);
          _localHeader.crc = data.readUInt32LE(Constants.LOCCRC);
          _localHeader.compressedSize = data.readUInt32LE(Constants.LOCSIZ);
          _localHeader.size = data.readUInt32LE(Constants.LOCLEN);
          _localHeader.fnameLen = data.readUInt16LE(Constants.LOCNAM);
          _localHeader.extraLen = data.readUInt16LE(Constants.LOCEXT);
          const extraStart = _offset + Constants.LOCHDR + _localHeader.fnameLen;
          const extraEnd = extraStart + _localHeader.extraLen;
          return input.slice(extraStart, extraEnd);
        },
        loadFromBinary: function(data) {
          if (data.length !== Constants.CENHDR || data.readUInt32LE(0) !== Constants.CENSIG) {
            throw Utils.Errors.INVALID_CEN();
          }
          _verMade = data.readUInt16LE(Constants.CENVEM);
          _version = data.readUInt16LE(Constants.CENVER);
          _flags = data.readUInt16LE(Constants.CENFLG);
          _method = data.readUInt16LE(Constants.CENHOW);
          _time = data.readUInt32LE(Constants.CENTIM);
          _crc = data.readUInt32LE(Constants.CENCRC);
          _compressedSize = data.readUInt32LE(Constants.CENSIZ);
          _size = data.readUInt32LE(Constants.CENLEN);
          _fnameLen = data.readUInt16LE(Constants.CENNAM);
          _extraLen = data.readUInt16LE(Constants.CENEXT);
          _comLen = data.readUInt16LE(Constants.CENCOM);
          _diskStart = data.readUInt16LE(Constants.CENDSK);
          _inattr = data.readUInt16LE(Constants.CENATT);
          _attr = data.readUInt32LE(Constants.CENATX);
          _offset = data.readUInt32LE(Constants.CENOFF);
        },
        localHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.LOCHDR);
          data.writeUInt32LE(Constants.LOCSIG, 0);
          data.writeUInt16LE(_version, Constants.LOCVER);
          data.writeUInt16LE(_flags & ~Constants.FLG_DESC, Constants.LOCFLG);
          data.writeUInt16LE(_method, Constants.LOCHOW);
          data.writeUInt32LE(_time, Constants.LOCTIM);
          data.writeUInt32LE(_crc, Constants.LOCCRC);
          data.writeUInt32LE(_compressedSize, Constants.LOCSIZ);
          data.writeUInt32LE(_size, Constants.LOCLEN);
          data.writeUInt16LE(_fnameLen, Constants.LOCNAM);
          data.writeUInt16LE(_localHeader.extraLen, Constants.LOCEXT);
          return data;
        },
        centralHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.CENHDR + _fnameLen + _extraLen + _comLen);
          data.writeUInt32LE(Constants.CENSIG, 0);
          data.writeUInt16LE(_verMade, Constants.CENVEM);
          data.writeUInt16LE(_version, Constants.CENVER);
          data.writeUInt16LE(_flags & ~Constants.FLG_DESC, Constants.CENFLG);
          data.writeUInt16LE(_method, Constants.CENHOW);
          data.writeUInt32LE(_time, Constants.CENTIM);
          data.writeUInt32LE(_crc, Constants.CENCRC);
          data.writeUInt32LE(_compressedSize, Constants.CENSIZ);
          data.writeUInt32LE(_size, Constants.CENLEN);
          data.writeUInt16LE(_fnameLen, Constants.CENNAM);
          data.writeUInt16LE(_extraLen, Constants.CENEXT);
          data.writeUInt16LE(_comLen, Constants.CENCOM);
          data.writeUInt16LE(_diskStart, Constants.CENDSK);
          data.writeUInt16LE(_inattr, Constants.CENATT);
          data.writeUInt32LE(_attr, Constants.CENATX);
          data.writeUInt32LE(_offset, Constants.CENOFF);
          return data;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return nr + " bytes";
          };
          return {
            made: _verMade,
            version: _version,
            flags: _flags,
            method: Utils.methodToString(_method),
            time: this.time,
            crc: "0x" + _crc.toString(16).toUpperCase(),
            compressedSize: bytes(_compressedSize),
            size: bytes(_size),
            fileNameLength: bytes(_fnameLen),
            extraLength: bytes(_extraLen),
            commentLength: bytes(_comLen),
            diskNumStart: _diskStart,
            inAttr: _inattr,
            attr: _attr,
            offset: _offset,
            centralHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/mainHeader.js
var require_mainHeader = __commonJS({
  "node_modules/adm-zip/headers/mainHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _volumeEntries = 0, _totalEntries = 0, _size = 0, _offset = 0, _commentLength = 0;
      const needsZip64 = () => _volumeEntries > Constants.EF_ZIP64_OR_16 || _totalEntries > Constants.EF_ZIP64_OR_16 || _size > Constants.EF_ZIP64_OR_32 || _offset > Constants.EF_ZIP64_OR_32;
      return {
        get diskEntries() {
          return _volumeEntries;
        },
        set diskEntries(val) {
          _volumeEntries = _totalEntries = val;
        },
        get totalEntries() {
          return _totalEntries;
        },
        set totalEntries(val) {
          _totalEntries = _volumeEntries = val;
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = val;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = val;
        },
        get commentLength() {
          return _commentLength;
        },
        set commentLength(val) {
          _commentLength = val;
        },
        get mainHeaderSize() {
          return (needsZip64() ? Constants.ZIP64HDR + Constants.END64HDR : 0) + Constants.ENDHDR + _commentLength;
        },
        loadFromBinary: function(data) {
          if ((data.length !== Constants.ENDHDR || data.readUInt32LE(0) !== Constants.ENDSIG) && (data.length < Constants.ZIP64HDR || data.readUInt32LE(0) !== Constants.ZIP64SIG)) {
            throw Utils.Errors.INVALID_END();
          }
          if (data.readUInt32LE(0) === Constants.ENDSIG) {
            _volumeEntries = data.readUInt16LE(Constants.ENDSUB);
            _totalEntries = data.readUInt16LE(Constants.ENDTOT);
            _size = data.readUInt32LE(Constants.ENDSIZ);
            _offset = data.readUInt32LE(Constants.ENDOFF);
            _commentLength = data.readUInt16LE(Constants.ENDCOM);
          } else {
            _volumeEntries = Utils.readBigUInt64LE(data, Constants.ZIP64SUB);
            _totalEntries = Utils.readBigUInt64LE(data, Constants.ZIP64TOT);
            _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZB);
            _offset = Utils.readBigUInt64LE(data, Constants.ZIP64OFF);
            _commentLength = 0;
          }
        },
        toBinary: function() {
          if (!needsZip64()) {
            var b = Buffer.alloc(Constants.ENDHDR + _commentLength);
            b.writeUInt32LE(Constants.ENDSIG, 0);
            b.writeUInt32LE(0, 4);
            b.writeUInt16LE(_volumeEntries, Constants.ENDSUB);
            b.writeUInt16LE(_totalEntries, Constants.ENDTOT);
            b.writeUInt32LE(_size, Constants.ENDSIZ);
            b.writeUInt32LE(_offset, Constants.ENDOFF);
            b.writeUInt16LE(_commentLength, Constants.ENDCOM);
            b.fill(" ", Constants.ENDHDR);
            return b;
          }
          var b = Buffer.alloc(this.mainHeaderSize);
          let offset = 0;
          b.writeUInt32LE(Constants.ZIP64SIG, offset);
          Utils.writeBigUInt64LE(b, Constants.ZIP64HDR - Constants.ZIP64LEAD, offset + Constants.ZIP64SIZE);
          b.writeUInt16LE(45, offset + Constants.ZIP64VEM);
          b.writeUInt16LE(45, offset + Constants.ZIP64VER);
          b.writeUInt32LE(0, offset + Constants.ZIP64DSK);
          b.writeUInt32LE(0, offset + Constants.ZIP64DSKDIR);
          Utils.writeBigUInt64LE(b, _volumeEntries, offset + Constants.ZIP64SUB);
          Utils.writeBigUInt64LE(b, _totalEntries, offset + Constants.ZIP64TOT);
          Utils.writeBigUInt64LE(b, _size, offset + Constants.ZIP64SIZB);
          Utils.writeBigUInt64LE(b, _offset, offset + Constants.ZIP64OFF);
          const zip64EndOffset = _offset + _size;
          offset += Constants.ZIP64HDR;
          b.writeUInt32LE(Constants.END64SIG, offset);
          b.writeUInt32LE(0, offset + Constants.END64START);
          Utils.writeBigUInt64LE(b, zip64EndOffset, offset + Constants.END64OFF);
          b.writeUInt32LE(1, offset + Constants.END64NUMDISKS);
          offset += Constants.END64HDR;
          b.writeUInt32LE(Constants.ENDSIG, offset);
          b.writeUInt32LE(0, offset + 4);
          b.writeUInt16LE(Math.min(_volumeEntries, Constants.EF_ZIP64_OR_16), offset + Constants.ENDSUB);
          b.writeUInt16LE(Math.min(_totalEntries, Constants.EF_ZIP64_OR_16), offset + Constants.ENDTOT);
          b.writeUInt32LE(Math.min(_size, Constants.EF_ZIP64_OR_32), offset + Constants.ENDSIZ);
          b.writeUInt32LE(Math.min(_offset, Constants.EF_ZIP64_OR_32), offset + Constants.ENDOFF);
          b.writeUInt16LE(_commentLength, offset + Constants.ENDCOM);
          b.fill(" ", offset + Constants.ENDHDR);
          return b;
        },
        toJSON: function() {
          const offset = function(nr, len) {
            let offs = nr.toString(16).toUpperCase();
            while (offs.length < len) offs = "0" + offs;
            return "0x" + offs;
          };
          return {
            diskEntries: _volumeEntries,
            totalEntries: _totalEntries,
            size: _size + " bytes",
            offset: offset(_offset, 4),
            commentLength: _commentLength
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/index.js
var require_headers = __commonJS({
  "node_modules/adm-zip/headers/index.js"(exports2) {
    exports2.EntryHeader = require_entryHeader();
    exports2.MainHeader = require_mainHeader();
  }
});

// node_modules/adm-zip/methods/deflater.js
var require_deflater = __commonJS({
  "node_modules/adm-zip/methods/deflater.js"(exports2, module2) {
    module2.exports = function(inbuf) {
      var zlib = require("zlib");
      var opts = { chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024 };
      return {
        deflate: function() {
          return zlib.deflateRawSync(inbuf, opts);
        },
        deflateAsync: function(callback) {
          var tmp = zlib.createDeflateRaw(opts), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/inflater.js
var require_inflater = __commonJS({
  "node_modules/adm-zip/methods/inflater.js"(exports2, module2) {
    var version = +(process?.versions?.node ?? "").split(".")[0] || 0;
    module2.exports = function(inbuf, expectedLength) {
      var zlib = require("zlib");
      const option = version >= 15 && expectedLength > 0 ? { maxOutputLength: expectedLength } : {};
      return {
        inflate: function() {
          return zlib.inflateRawSync(inbuf, option);
        },
        inflateAsync: function(callback) {
          var tmp = zlib.createInflateRaw(option), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/zipcrypto.js
var require_zipcrypto = __commonJS({
  "node_modules/adm-zip/methods/zipcrypto.js"(exports2, module2) {
    "use strict";
    var { randomFillSync } = require("crypto");
    var Errors = require_errors();
    var crctable = new Uint32Array(256).map((t, crc) => {
      for (let j = 0; j < 8; j++) {
        if (0 !== (crc & 1)) {
          crc = crc >>> 1 ^ 3988292384;
        } else {
          crc >>>= 1;
        }
      }
      return crc >>> 0;
    });
    var uMul = (a, b) => Math.imul(a, b) >>> 0;
    var crc32update = (pCrc32, bval) => {
      return crctable[(pCrc32 ^ bval) & 255] ^ pCrc32 >>> 8;
    };
    var genSalt = () => {
      if ("function" === typeof randomFillSync) {
        return randomFillSync(Buffer.alloc(12));
      } else {
        return genSalt.node();
      }
    };
    genSalt.node = () => {
      const salt = Buffer.alloc(12);
      const len = salt.length;
      for (let i = 0; i < len; i++) salt[i] = Math.random() * 256 & 255;
      return salt;
    };
    var config = {
      genSalt
    };
    function Initkeys(pw) {
      const pass = Buffer.isBuffer(pw) ? pw : Buffer.from(pw);
      this.keys = new Uint32Array([305419896, 591751049, 878082192]);
      for (let i = 0; i < pass.length; i++) {
        this.updateKeys(pass[i]);
      }
    }
    Initkeys.prototype.updateKeys = function(byteValue) {
      const keys = this.keys;
      keys[0] = crc32update(keys[0], byteValue);
      keys[1] += keys[0] & 255;
      keys[1] = uMul(keys[1], 134775813) + 1;
      keys[2] = crc32update(keys[2], keys[1] >>> 24);
      return byteValue;
    };
    Initkeys.prototype.next = function() {
      const k = (this.keys[2] | 2) >>> 0;
      return uMul(k, k ^ 1) >> 8 & 255;
    };
    function make_decrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data) {
        const result = Buffer.alloc(data.length);
        let pos = 0;
        for (let c of data) {
          result[pos++] = keys.updateKeys(c ^ keys.next());
        }
        return result;
      };
    }
    function make_encrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data, result, pos = 0) {
        if (!result) result = Buffer.alloc(data.length);
        for (let c of data) {
          const k = keys.next();
          result[pos++] = c ^ k;
          keys.updateKeys(c);
        }
        return result;
      };
    }
    function decrypt(data, header, pwd) {
      if (!data || !Buffer.isBuffer(data) || data.length < 12) {
        return Buffer.alloc(0);
      }
      const decrypter = make_decrypter(pwd);
      const salt = decrypter(data.slice(0, 12));
      const verifyByte = (header.flags & 8) === 8 ? header.timeHighByte : header.crc >>> 24;
      if (salt[11] !== verifyByte) {
        throw Errors.WRONG_PASSWORD();
      }
      return decrypter(data.slice(12));
    }
    function _salter(data) {
      if (Buffer.isBuffer(data) && data.length >= 12) {
        config.genSalt = function() {
          return data.slice(0, 12);
        };
      } else if (data === "node") {
        config.genSalt = genSalt.node;
      } else {
        config.genSalt = genSalt;
      }
    }
    function encrypt(data, header, pwd, oldlike = false) {
      if (data == null) data = Buffer.alloc(0);
      if (!Buffer.isBuffer(data)) data = Buffer.from(data.toString());
      const encrypter = make_encrypter(pwd);
      const salt = config.genSalt();
      salt[11] = header.crc >>> 24 & 255;
      if (oldlike) salt[10] = header.crc >>> 16 & 255;
      const result = Buffer.alloc(data.length + 12);
      encrypter(salt, result);
      return encrypter(data, result, 12);
    }
    module2.exports = { decrypt, encrypt, _salter };
  }
});

// node_modules/adm-zip/methods/index.js
var require_methods = __commonJS({
  "node_modules/adm-zip/methods/index.js"(exports2) {
    exports2.Deflater = require_deflater();
    exports2.Inflater = require_inflater();
    exports2.ZipCrypto = require_zipcrypto();
  }
});

// node_modules/adm-zip/zipEntry.js
var require_zipEntry = __commonJS({
  "node_modules/adm-zip/zipEntry.js"(exports2, module2) {
    var Utils = require_util();
    var Headers = require_headers();
    var Constants = Utils.Constants;
    var Methods = require_methods();
    module2.exports = function(options, input) {
      var _centralHeader = new Headers.EntryHeader(), _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0), _extralocal = Buffer.alloc(0), _efs = true;
      const opts = options;
      const decoder = typeof opts.decoder === "object" ? opts.decoder : Utils.decoder;
      _efs = decoder.hasOwnProperty("efs") ? decoder.efs : false;
      function getCompressedDataFromZip() {
        if (!input || !(input instanceof Uint8Array)) {
          return Buffer.alloc(0);
        }
        _extralocal = _centralHeader.loadLocalHeaderFromBinary(input);
        return input.slice(_centralHeader.realDataOffset, _centralHeader.realDataOffset + _centralHeader.compressedSize);
      }
      function crc32OK(data) {
        if (!_centralHeader.flags_desc && !_centralHeader.localHeader.flags_desc) {
          if (Utils.crc32(data) !== _centralHeader.localHeader.crc) {
            return false;
          }
        } else {
          const descriptor = {};
          const dataEndOffset = _centralHeader.realDataOffset + _centralHeader.compressedSize;
          if (input.readUInt32LE(dataEndOffset) == Constants.LOCSIG || input.readUInt32LE(dataEndOffset) == Constants.CENSIG) {
            throw Utils.Errors.DESCRIPTOR_NOT_EXIST();
          }
          if (input.readUInt32LE(dataEndOffset) == Constants.EXTSIG) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN);
          } else if (input.readUInt16LE(dataEndOffset + 12) === 19280) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC - 4);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ - 4);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN - 4);
          } else {
            throw Utils.Errors.DESCRIPTOR_UNKNOWN();
          }
          if (descriptor.compressedSize !== _centralHeader.compressedSize || descriptor.size !== _centralHeader.size || descriptor.crc !== _centralHeader.crc) {
            throw Utils.Errors.DESCRIPTOR_FAULTY();
          }
          if (Utils.crc32(data) !== descriptor.crc) {
            return false;
          }
        }
        return true;
      }
      function decompress(async, callback, pass) {
        if (typeof callback === "undefined" && typeof async === "string") {
          pass = async;
          async = void 0;
        }
        if (_isDirectory) {
          if (async && callback) {
            callback(Buffer.alloc(0), Utils.Errors.DIRECTORY_CONTENT_ERROR());
          }
          return Buffer.alloc(0);
        }
        var compressedData = getCompressedDataFromZip();
        if (compressedData.length === 0) {
          if (async && callback) callback(compressedData);
          return compressedData;
        }
        if (_centralHeader.encrypted) {
          if ("string" !== typeof pass && !Buffer.isBuffer(pass)) {
            throw Utils.Errors.INVALID_PASS_PARAM();
          }
          compressedData = Methods.ZipCrypto.decrypt(compressedData, _centralHeader, pass);
        }
        var data = Buffer.alloc(_centralHeader.size);
        switch (_centralHeader.method) {
          case Utils.Constants.STORED:
            compressedData.copy(data);
            if (!crc32OK(data)) {
              if (async && callback) callback(data, Utils.Errors.BAD_CRC());
              throw Utils.Errors.BAD_CRC();
            } else {
              if (async && callback) callback(data);
              return data;
            }
          case Utils.Constants.DEFLATED:
            var inflater = new Methods.Inflater(compressedData, _centralHeader.size);
            if (!async) {
              const result = inflater.inflate(data);
              result.copy(data, 0);
              if (!crc32OK(data)) {
                throw Utils.Errors.BAD_CRC(`"${decoder.decode(_entryName)}"`);
              }
              return data;
            } else {
              inflater.inflateAsync(function(result) {
                result.copy(result, 0);
                if (callback) {
                  if (!crc32OK(result)) {
                    callback(result, Utils.Errors.BAD_CRC());
                  } else {
                    callback(result);
                  }
                }
              });
            }
            break;
          default:
            if (async && callback) callback(Buffer.alloc(0), Utils.Errors.UNKNOWN_METHOD());
            throw Utils.Errors.UNKNOWN_METHOD();
        }
      }
      function compress(async, callback) {
        if ((!uncompressedData || !uncompressedData.length) && Buffer.isBuffer(input)) {
          if (async && callback) callback(getCompressedDataFromZip());
          return getCompressedDataFromZip();
        }
        if (uncompressedData.length && !_isDirectory) {
          var compressedData;
          switch (_centralHeader.method) {
            case Utils.Constants.STORED:
              _centralHeader.compressedSize = _centralHeader.size;
              compressedData = Buffer.alloc(uncompressedData.length);
              uncompressedData.copy(compressedData);
              if (async && callback) callback(compressedData);
              return compressedData;
            default:
            case Utils.Constants.DEFLATED:
              var deflater = new Methods.Deflater(uncompressedData);
              if (!async) {
                var deflated = deflater.deflate();
                _centralHeader.compressedSize = deflated.length;
                return deflated;
              } else {
                deflater.deflateAsync(function(data) {
                  compressedData = Buffer.alloc(data.length);
                  _centralHeader.compressedSize = data.length;
                  data.copy(compressedData);
                  callback && callback(compressedData);
                });
              }
              deflater = null;
              break;
          }
        } else if (async && callback) {
          callback(Buffer.alloc(0));
        } else {
          return Buffer.alloc(0);
        }
      }
      function readUInt64LE(buffer, offset) {
        return Utils.readBigUInt64LE(buffer, offset);
      }
      function parseExtra(data) {
        try {
          var offset = 0;
          var signature, size, part;
          while (offset + 4 < data.length) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            part = data.slice(offset, offset + size);
            offset += size;
            if (Constants.ID_ZIP64 === signature) {
              parseZip64ExtendedInformation(part);
            }
          }
        } catch (error) {
          throw Utils.Errors.EXTRA_FIELD_PARSE_ERROR();
        }
      }
      function parseZip64ExtendedInformation(data) {
        var size, compressedSize, offset, diskNumStart;
        if (data.length >= Constants.EF_ZIP64_SCOMP) {
          size = readUInt64LE(data, Constants.EF_ZIP64_SUNCOMP);
          if (_centralHeader.size === Constants.EF_ZIP64_OR_32) {
            _centralHeader.size = size;
          }
        }
        if (data.length >= Constants.EF_ZIP64_RHO) {
          compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
          if (_centralHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
            _centralHeader.compressedSize = compressedSize;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN) {
          offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
          if (_centralHeader.offset === Constants.EF_ZIP64_OR_32) {
            _centralHeader.offset = offset;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN + 4) {
          diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
          if (_centralHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
            _centralHeader.diskNumStart = diskNumStart;
          }
        }
      }
      return {
        get entryName() {
          return decoder.decode(_entryName);
        },
        get rawEntryName() {
          return _entryName;
        },
        set entryName(val) {
          _entryName = Utils.toBuffer(val, decoder.encode);
          var lastChar = _entryName[_entryName.length - 1];
          _isDirectory = lastChar === 47 || lastChar === 92;
          _centralHeader.fileNameLength = _entryName.length;
        },
        get efs() {
          if (typeof _efs === "function") {
            return _efs(this.entryName);
          } else {
            return _efs;
          }
        },
        get extra() {
          return _extra;
        },
        set extra(val) {
          _extra = val;
          _centralHeader.extraLength = val.length;
          parseExtra(val);
        },
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          _centralHeader.commentLength = _comment.length;
          if (_comment.length > 65535) throw Utils.Errors.COMMENT_TOO_LONG();
        },
        get name() {
          var n = decoder.decode(_entryName);
          return _isDirectory ? n.substr(n.length - 1).split("/").pop() : n.split("/").pop();
        },
        get isDirectory() {
          return _isDirectory;
        },
        getCompressedData: function() {
          return compress(false, null);
        },
        getCompressedDataAsync: function(callback) {
          compress(true, callback);
        },
        setData: function(value) {
          uncompressedData = Utils.toBuffer(value, Utils.decoder.encode);
          if (!_isDirectory && uncompressedData.length) {
            _centralHeader.size = uncompressedData.length;
            _centralHeader.method = Utils.Constants.DEFLATED;
            _centralHeader.crc = Utils.crc32(value);
            _centralHeader.changed = true;
          } else {
            _centralHeader.method = Utils.Constants.STORED;
          }
        },
        getData: function(pass) {
          if (_centralHeader.changed) {
            return uncompressedData;
          } else {
            return decompress(false, null, pass);
          }
        },
        getDataAsync: function(callback, pass) {
          if (_centralHeader.changed) {
            callback(uncompressedData);
          } else {
            decompress(true, callback, pass);
          }
        },
        set attr(attr) {
          _centralHeader.attr = attr;
        },
        get attr() {
          return _centralHeader.attr;
        },
        set header(data) {
          _centralHeader.loadFromBinary(data);
        },
        get header() {
          return _centralHeader;
        },
        packCentralHeader: function() {
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLength = _extra.length;
          var header = _centralHeader.centralHeaderToBinary();
          var addpos = Utils.Constants.CENHDR;
          _entryName.copy(header, addpos);
          addpos += _entryName.length;
          _extra.copy(header, addpos);
          addpos += _centralHeader.extraLength;
          _comment.copy(header, addpos);
          return header;
        },
        packLocalHeader: function() {
          let addpos = 0;
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLocalLength = _extralocal.length;
          const localHeaderBuf = _centralHeader.localHeaderToBinary();
          const localHeader = Buffer.alloc(localHeaderBuf.length + _entryName.length + _centralHeader.extraLocalLength);
          localHeaderBuf.copy(localHeader, addpos);
          addpos += localHeaderBuf.length;
          _entryName.copy(localHeader, addpos);
          addpos += _entryName.length;
          _extralocal.copy(localHeader, addpos);
          addpos += _extralocal.length;
          return localHeader;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return "<" + (nr && nr.length + " bytes buffer" || "null") + ">";
          };
          return {
            entryName: this.entryName,
            name: this.name,
            comment: this.comment,
            isDirectory: this.isDirectory,
            header: _centralHeader.toJSON(),
            compressedData: bytes(input),
            data: bytes(uncompressedData)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/zipFile.js
var require_zipFile = __commonJS({
  "node_modules/adm-zip/zipFile.js"(exports2, module2) {
    var ZipEntry = require_zipEntry();
    var Headers = require_headers();
    var Utils = require_util();
    module2.exports = function(inBuffer, options) {
      var entryList = [], entryTable = {}, _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader(), loadedEntries = false;
      var password = null;
      const temporary = /* @__PURE__ */ new Set();
      const opts = options;
      const { noSort, decoder } = opts;
      if (inBuffer) {
        readMainHeader(opts.readEntries);
      } else {
        loadedEntries = true;
      }
      function makeTemporaryFolders() {
        const foldersList = /* @__PURE__ */ new Set();
        for (const elem of Object.keys(entryTable)) {
          const elements = elem.split("/");
          elements.pop();
          if (!elements.length) continue;
          for (let i = 0; i < elements.length; i++) {
            const sub = elements.slice(0, i + 1).join("/") + "/";
            foldersList.add(sub);
          }
        }
        for (const elem of foldersList) {
          if (!(elem in entryTable)) {
            const tempfolder = new ZipEntry(opts);
            tempfolder.entryName = elem;
            tempfolder.attr = 16;
            tempfolder.temporary = true;
            entryList.push(tempfolder);
            entryTable[tempfolder.entryName] = tempfolder;
            temporary.add(tempfolder);
          }
        }
      }
      function readEntries() {
        loadedEntries = true;
        entryTable = {};
        if (mainHeader.diskEntries > (inBuffer.length - mainHeader.offset) / Utils.Constants.CENHDR) {
          throw Utils.Errors.DISK_ENTRY_TOO_LARGE();
        }
        entryList = new Array(mainHeader.diskEntries);
        var index = mainHeader.offset;
        for (var i = 0; i < entryList.length; i++) {
          var tmp = index, entry = new ZipEntry(opts, inBuffer);
          entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
          entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
          if (entry.header.extraLength) {
            entry.extra = inBuffer.slice(tmp, tmp += entry.header.extraLength);
          }
          if (entry.header.commentLength) entry.comment = inBuffer.slice(tmp, tmp + entry.header.commentLength);
          index += entry.header.centralHeaderSize;
          entryList[i] = entry;
          entryTable[entry.entryName] = entry;
        }
        temporary.clear();
        makeTemporaryFolders();
      }
      function readMainHeader(readNow) {
        var i = inBuffer.length - Utils.Constants.ENDHDR, max = Math.max(0, i - 65535), n = max, endStart = inBuffer.length, endOffset = -1, commentEnd = 0;
        const trailingSpace = typeof opts.trailingSpace === "boolean" ? opts.trailingSpace : false;
        if (trailingSpace) max = 0;
        for (i; i >= n; i--) {
          if (inBuffer[i] !== 80) continue;
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ENDSIG) {
            endOffset = i;
            commentEnd = i;
            endStart = i + Utils.Constants.ENDHDR;
            n = i - Utils.Constants.END64HDR;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.END64SIG) {
            n = max;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ZIP64SIG) {
            endOffset = i;
            endStart = i + Utils.readBigUInt64LE(inBuffer, i + Utils.Constants.ZIP64SIZE) + Utils.Constants.ZIP64LEAD;
            break;
          }
        }
        if (endOffset == -1) throw Utils.Errors.INVALID_FORMAT();
        mainHeader.loadFromBinary(inBuffer.slice(endOffset, endStart));
        if (mainHeader.commentLength) {
          _comment = inBuffer.slice(commentEnd + Utils.Constants.ENDHDR);
        }
        if (readNow) readEntries();
      }
      function sortEntries() {
        if (entryList.length > 1 && !noSort) {
          entryList.sort((a, b) => a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase()));
        }
      }
      return {
        /**
         * Returns an array of ZipEntry objects existent in the current opened archive
         * @return Array
         */
        get entries() {
          if (!loadedEntries) {
            readEntries();
          }
          return entryList.filter((e) => !temporary.has(e));
        },
        /**
         * Archive comment
         * @return {String}
         */
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          mainHeader.commentLength = _comment.length;
        },
        getEntryCount: function() {
          if (!loadedEntries) {
            return mainHeader.diskEntries;
          }
          return entryList.length;
        },
        forEach: function(callback) {
          this.entries.forEach(callback);
        },
        /**
         * Returns a reference to the entry with the given name or null if entry is inexistent
         *
         * @param entryName
         * @return ZipEntry
         */
        getEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          return entryTable[entryName] || null;
        },
        /**
         * Adds the given entry to the entry list
         *
         * @param entry
         */
        setEntry: function(entry) {
          if (!loadedEntries) {
            readEntries();
          }
          entryList.push(entry);
          entryTable[entry.entryName] = entry;
          mainHeader.totalEntries = entryList.length;
        },
        /**
         * Removes the file with the given name from the entry list.
         *
         * If the entry is a directory, then all nested files and directories will be removed
         * @param entryName
         * @returns {void}
         */
        deleteFile: function(entryName, withsubfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const list = this.getEntryChildren(entry, withsubfolders).map((child) => child.entryName);
          list.forEach(this.deleteEntry);
        },
        /**
         * Removes the entry with the given name from the entry list.
         *
         * @param {string} entryName
         * @returns {void}
         */
        deleteEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const index = entryList.indexOf(entry);
          if (index >= 0) {
            entryList.splice(index, 1);
            delete entryTable[entryName];
            mainHeader.totalEntries = entryList.length;
          }
        },
        /**
         *  Iterates and returns all nested files and directories of the given entry
         *
         * @param entry
         * @return Array
         */
        getEntryChildren: function(entry, subfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          if (typeof entry === "object") {
            if (entry.isDirectory && subfolders) {
              const list = [];
              const name = entry.entryName;
              for (const zipEntry of entryList) {
                if (zipEntry.entryName.startsWith(name)) {
                  list.push(zipEntry);
                }
              }
              return list;
            } else {
              return [entry];
            }
          }
          return [];
        },
        /**
         *  How many child elements entry has
         *
         * @param {ZipEntry} entry
         * @return {integer}
         */
        getChildCount: function(entry) {
          if (entry && entry.isDirectory) {
            const list = this.getEntryChildren(entry);
            return list.includes(entry) ? list.length - 1 : list.length;
          }
          return 0;
        },
        /**
         * Returns the zip file
         *
         * @return Buffer
         */
        compressToBuffer: function() {
          if (!loadedEntries) {
            readEntries();
          }
          sortEntries();
          const dataBlock = [];
          const headerBlocks = [];
          let totalSize = 0;
          let dindex = 0;
          mainHeader.size = 0;
          mainHeader.offset = 0;
          let totalEntries = 0;
          for (const entry of this.entries) {
            const compressedData = entry.getCompressedData();
            entry.header.offset = dindex;
            const localHeader = entry.packLocalHeader();
            const dataLength = localHeader.length + compressedData.length;
            dindex += dataLength;
            dataBlock.push(localHeader);
            dataBlock.push(compressedData);
            const centralHeader = entry.packCentralHeader();
            headerBlocks.push(centralHeader);
            mainHeader.size += centralHeader.length;
            totalSize += dataLength + centralHeader.length;
            totalEntries++;
          }
          totalSize += mainHeader.mainHeaderSize;
          mainHeader.offset = dindex;
          mainHeader.totalEntries = totalEntries;
          dindex = 0;
          const outBuffer = Buffer.alloc(totalSize);
          for (const content of dataBlock) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          for (const content of headerBlocks) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          const mh = mainHeader.toBinary();
          if (_comment) {
            _comment.copy(mh, mh.length - _comment.length);
          }
          mh.copy(outBuffer, dindex);
          inBuffer = outBuffer;
          loadedEntries = false;
          return outBuffer;
        },
        toAsyncBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          try {
            if (!loadedEntries) {
              readEntries();
            }
            sortEntries();
            const dataBlock = [];
            const centralHeaders = [];
            let totalSize = 0;
            let dindex = 0;
            let totalEntries = 0;
            mainHeader.size = 0;
            mainHeader.offset = 0;
            const compress2Buffer = function(entryLists) {
              if (entryLists.length > 0) {
                const entry = entryLists.shift();
                const name = entry.entryName + entry.extra.toString();
                if (onItemStart) onItemStart(name);
                entry.getCompressedDataAsync(function(compressedData) {
                  if (onItemEnd) onItemEnd(name);
                  entry.header.offset = dindex;
                  const localHeader = entry.packLocalHeader();
                  const dataLength = localHeader.length + compressedData.length;
                  dindex += dataLength;
                  dataBlock.push(localHeader);
                  dataBlock.push(compressedData);
                  const centalHeader = entry.packCentralHeader();
                  centralHeaders.push(centalHeader);
                  mainHeader.size += centalHeader.length;
                  totalSize += dataLength + centalHeader.length;
                  totalEntries++;
                  compress2Buffer(entryLists);
                });
              } else {
                totalSize += mainHeader.mainHeaderSize;
                mainHeader.offset = dindex;
                mainHeader.totalEntries = totalEntries;
                dindex = 0;
                const outBuffer = Buffer.alloc(totalSize);
                dataBlock.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                centralHeaders.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                const mh = mainHeader.toBinary();
                if (_comment) {
                  _comment.copy(mh, mh.length - _comment.length);
                }
                mh.copy(outBuffer, dindex);
                inBuffer = outBuffer;
                loadedEntries = false;
                onSuccess(outBuffer);
              }
            };
            compress2Buffer(Array.from(this.entries));
          } catch (e) {
            onFail(e);
          }
        }
      };
    };
  }
});

// node_modules/adm-zip/adm-zip.js
var require_adm_zip = __commonJS({
  "node_modules/adm-zip/adm-zip.js"(exports2, module2) {
    var Utils = require_util();
    var pth = require("path");
    var ZipEntry = require_zipEntry();
    var ZipFile = require_zipFile();
    var get_Bool = (...val) => Utils.findLast(val, (c) => typeof c === "boolean");
    var get_Str = (...val) => Utils.findLast(val, (c) => typeof c === "string");
    var get_Fun = (...val) => Utils.findLast(val, (c) => typeof c === "function");
    var defaultOptions = {
      // option "noSort" : if true it disables files sorting
      noSort: false,
      // read entries during load (initial loading may be slower)
      readEntries: false,
      // default method is none
      method: Utils.Constants.NONE,
      // file system
      fs: null
    };
    module2.exports = function(input, options) {
      let inBuffer = null;
      const opts = Object.assign(/* @__PURE__ */ Object.create(null), defaultOptions);
      if (input && "object" === typeof input) {
        if (!(input instanceof Uint8Array)) {
          Object.assign(opts, input);
          input = opts.input ? opts.input : void 0;
          if (opts.input) delete opts.input;
        }
        if (Buffer.isBuffer(input)) {
          inBuffer = input;
          opts.method = Utils.Constants.BUFFER;
          input = void 0;
        }
      }
      Object.assign(opts, options);
      const filetools = new Utils(opts);
      if (typeof opts.decoder !== "object" || typeof opts.decoder.encode !== "function" || typeof opts.decoder.decode !== "function") {
        opts.decoder = Utils.decoder;
      }
      if (input && "string" === typeof input) {
        if (filetools.fs.existsSync(input)) {
          opts.method = Utils.Constants.FILE;
          opts.filename = input;
          inBuffer = filetools.fs.readFileSync(input);
        } else {
          throw Utils.Errors.INVALID_FILENAME();
        }
      }
      const _zip = new ZipFile(inBuffer, opts);
      const { canonical, sanitize, zipnamefix } = Utils;
      function getEntry(entry) {
        if (entry && _zip) {
          var item;
          if (typeof entry === "string") item = _zip.getEntry(pth.posix.normalize(entry));
          if (typeof entry === "object" && typeof entry.entryName !== "undefined" && typeof entry.header !== "undefined") item = _zip.getEntry(entry.entryName);
          if (item) {
            return item;
          }
        }
        return null;
      }
      function fixPath(zipPath) {
        const { join, normalize, sep } = pth.posix;
        return join(pth.isAbsolute(zipPath) ? "/" : ".", normalize(sep + zipPath.split("\\").join(sep) + sep));
      }
      function filenameFilter(filterfn) {
        if (filterfn instanceof RegExp) {
          return /* @__PURE__ */ (function(rx) {
            return function(filename) {
              return rx.test(filename);
            };
          })(filterfn);
        } else if ("function" !== typeof filterfn) {
          return () => true;
        }
        return filterfn;
      }
      const relativePath = (local, entry) => {
        let lastChar = entry.slice(-1);
        lastChar = lastChar === filetools.sep ? filetools.sep : "";
        return pth.relative(local, entry) + lastChar;
      };
      return {
        /**
         * Extracts the given entry from the archive and returns the content as a Buffer object
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {Buffer|string} [pass] - password
         * @return Buffer or Null in case of error
         */
        readFile: function(entry, pass) {
          var item = getEntry(entry);
          return item && item.getData(pass) || null;
        },
        /**
         * Returns how many child elements has on entry (directories) on files it is always 0
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @returns {integer}
         */
        childCount: function(entry) {
          const item = getEntry(entry);
          if (item) {
            return _zip.getChildCount(item);
          }
        },
        /**
         * Asynchronous readFile
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         *
         * @return Buffer or Null in case of error
         */
        readFileAsync: function(entry, callback) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(callback);
          } else {
            callback(null, "getEntry failed for:" + entry);
          }
        },
        /**
         * Extracts the given entry from the archive and returns the content as plain text in the given encoding
         * @param {ZipEntry|string} entry - ZipEntry object or String with the full path of the entry
         * @param {string} encoding - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsText: function(entry, encoding) {
          var item = getEntry(entry);
          if (item) {
            var data = item.getData();
            if (data && data.length) {
              return data.toString(encoding || "utf8");
            }
          }
          return "";
        },
        /**
         * Asynchronous readAsText
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         * @param {string} [encoding] - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsTextAsync: function(entry, callback, encoding) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(function(data, err) {
              if (err) {
                callback(data, err);
                return;
              }
              if (data && data.length) {
                callback(data.toString(encoding || "utf8"));
              } else {
                callback("");
              }
            });
          } else {
            callback("");
          }
        },
        /**
         * Remove the entry from the file or the entry and all it's nested directories and files if the given entry is a directory
         *
         * @param {ZipEntry|string} entry
         * @param {boolean} withsubfolders
         * @returns {void}
         */
        deleteFile: function(entry, withsubfolders = true) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteFile(item.entryName, withsubfolders);
          }
        },
        /**
         * Remove the entry from the file or directory without affecting any nested entries
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteEntry: function(entry) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteEntry(item.entryName);
          }
        },
        /**
         * Adds a comment to the zip. The zip must be rewritten after adding the comment.
         *
         * @param {string} comment
         */
        addZipComment: function(comment) {
          _zip.comment = comment;
        },
        /**
         * Returns the zip comment
         *
         * @return String
         */
        getZipComment: function() {
          return _zip.comment || "";
        },
        /**
         * Adds a comment to a specified zipEntry. The zip must be rewritten after adding the comment
         * The comment cannot exceed 65535 characters in length
         *
         * @param {ZipEntry} entry
         * @param {string} comment
         */
        addZipEntryComment: function(entry, comment) {
          var item = getEntry(entry);
          if (item) {
            item.comment = comment;
          }
        },
        /**
         * Returns the comment of the specified entry
         *
         * @param {ZipEntry} entry
         * @return String
         */
        getZipEntryComment: function(entry) {
          var item = getEntry(entry);
          if (item) {
            return item.comment || "";
          }
          return "";
        },
        /**
         * Updates the content of an existing entry inside the archive. The zip must be rewritten after updating the content
         *
         * @param {ZipEntry} entry
         * @param {Buffer} content
         */
        updateFile: function(entry, content) {
          var item = getEntry(entry);
          if (item) {
            item.setData(content);
          }
        },
        /**
         * Adds a file from the disk to the archive
         *
         * @param {string} localPath File to add to zip
         * @param {string} [zipPath] Optional path inside the zip
         * @param {string} [zipName] Optional name for the file
         * @param {string} [comment] Optional file comment
         */
        addLocalFile: function(localPath2, zipPath, zipName, comment) {
          if (filetools.fs.existsSync(localPath2)) {
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            const _attr = filetools.fs.statSync(localPath2);
            const data = _attr.isFile() ? filetools.fs.readFileSync(localPath2) : Buffer.alloc(0);
            if (_attr.isDirectory()) zipPath += filetools.sep;
            this.addFile(zipPath, data, comment, _attr);
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Callback for showing if everything was done.
         *
         * @callback doneCallback
         * @param {Error} err - Error object
         * @param {boolean} done - was request fully completed
         */
        /**
         * Adds a file from the disk to the archive
         *
         * @param {(object|string)} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the file.
         * @param {string} [options.comment] - Optional file comment.
         * @param {string} [options.zipPath] - Optional path inside the zip
         * @param {string} [options.zipName] - Optional name for the file
         * @param {doneCallback} callback - The callback that handles the response.
         */
        addLocalFileAsync: function(options2, callback) {
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          const localPath2 = pth.resolve(options2.localPath);
          const { comment } = options2;
          let { zipPath, zipName } = options2;
          const self = this;
          filetools.fs.stat(localPath2, function(err, stats) {
            if (err) return callback(err, false);
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            if (stats.isFile()) {
              filetools.fs.readFile(localPath2, function(err2, data) {
                if (err2) return callback(err2, false);
                self.addFile(zipPath, data, comment, stats);
                return setImmediate(callback, void 0, true);
              });
            } else if (stats.isDirectory()) {
              zipPath += filetools.sep;
              self.addFile(zipPath, Buffer.alloc(0), comment, stats);
              return setImmediate(callback, void 0, true);
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - local path to the folder
         * @param {string} [zipPath] - optional path inside zip
         * @param {(RegExp|function)} [filter] - optional RegExp or Function if files match will be included.
         */
        addLocalFolder: function(localPath2, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          if (filetools.fs.existsSync(localPath2)) {
            const items = filetools.findFiles(localPath2);
            const self = this;
            if (items.length) {
              for (const filepath of items) {
                const p = pth.join(zipPath, relativePath(localPath2, filepath));
                if (filter(p)) {
                  self.addLocalFile(filepath, pth.dirname(p));
                }
              }
            }
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Asynchronous addLocalFolder
         * @param {string} localPath
         * @param {callback} callback
         * @param {string} [zipPath] optional path inside zip
         * @param {RegExp|function} [filter] optional RegExp or Function if files match will
         *               be included.
         */
        addLocalFolderAsync: function(localPath2, callback, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          var self = this;
          filetools.fs.open(localPath2, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath2));
            } else if (err) {
              callback(void 0, err);
            } else {
              var items = filetools.findFiles(localPath2);
              var i = -1;
              var next = function() {
                i += 1;
                if (i < items.length) {
                  var filepath = items[i];
                  var p = relativePath(localPath2, filepath).split("\\").join("/");
                  p = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
                  if (filter(p)) {
                    filetools.fs.stat(filepath, function(er0, stats) {
                      if (er0) callback(void 0, er0);
                      if (stats.isFile()) {
                        filetools.fs.readFile(filepath, function(er1, data) {
                          if (er1) {
                            callback(void 0, er1);
                          } else {
                            self.addFile(zipPath + p, data, "", stats);
                            next();
                          }
                        });
                      } else {
                        self.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                        next();
                      }
                    });
                  } else {
                    process.nextTick(() => {
                      next();
                    });
                  }
                } else {
                  callback(true, void 0);
                }
              };
              next();
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {object | string} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the folder.
         * @param {string} [options.zipPath] - optional path inside zip.
         * @param {RegExp|function} [options.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [options.namefix] - optional function to help fix filename
         * @param {doneCallback} callback - The callback that handles the response.
         *
         */
        addLocalFolderAsync2: function(options2, callback) {
          const self = this;
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          const localPath2 = pth.resolve(fixPath(options2.localPath));
          let { zipPath, filter, namefix } = options2;
          if (filter instanceof RegExp) {
            filter = /* @__PURE__ */ (function(rx) {
              return function(filename) {
                return rx.test(filename);
              };
            })(filter);
          } else if ("function" !== typeof filter) {
            filter = function() {
              return true;
            };
          }
          zipPath = zipPath ? fixPath(zipPath) : "";
          if (namefix === "latin1") {
            namefix = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
          }
          if (typeof namefix !== "function") namefix = (str) => str;
          const relPathFix = (entry) => pth.join(zipPath, namefix(relativePath(localPath2, entry)));
          const fileNameFix = (entry) => pth.win32.basename(pth.win32.normalize(namefix(entry)));
          filetools.fs.open(localPath2, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath2));
            } else if (err) {
              callback(void 0, err);
            } else {
              filetools.findFilesAsync(localPath2, function(err2, fileEntries) {
                if (err2) return callback(err2);
                fileEntries = fileEntries.filter((dir) => filter(relPathFix(dir)));
                if (!fileEntries.length) callback(void 0, false);
                setImmediate(
                  fileEntries.reverse().reduce(function(next, entry) {
                    return function(err3, done) {
                      if (err3 || done === false) return setImmediate(next, err3, false);
                      self.addLocalFileAsync(
                        {
                          localPath: entry,
                          zipPath: pth.dirname(relPathFix(entry)),
                          zipName: fileNameFix(entry)
                        },
                        next
                      );
                    };
                  }, callback)
                );
              });
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - path where files will be extracted
         * @param {object} props - optional properties
         * @param {string} [props.zipPath] - optional path inside zip
         * @param {RegExp|function} [props.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [props.namefix] - optional function to help fix filename
         */
        addLocalFolderPromise: function(localPath2, props) {
          return new Promise((resolve, reject) => {
            this.addLocalFolderAsync2(Object.assign({ localPath: localPath2 }, props), (err, done) => {
              if (err) reject(err);
              if (done) resolve(this);
            });
          });
        },
        /**
         * Allows you to create a entry (file or directory) in the zip file.
         * If you want to create a directory the entryName must end in / and a null buffer should be provided.
         * Comment and attributes are optional
         *
         * @param {string} entryName
         * @param {Buffer | string} content - file content as buffer or utf8 coded string
         * @param {string} [comment] - file comment
         * @param {number | object} [attr] - number as unix file permissions, object as filesystem Stats object
         */
        addFile: function(entryName, content, comment, attr) {
          entryName = zipnamefix(entryName);
          let entry = getEntry(entryName);
          const update = entry != null;
          if (!update) {
            entry = new ZipEntry(opts);
            entry.entryName = entryName;
          }
          entry.comment = comment || "";
          const isStat = "object" === typeof attr && attr instanceof filetools.fs.Stats;
          if (isStat) {
            entry.header.time = attr.mtime;
          }
          var fileattr = entry.isDirectory ? 16 : 0;
          let unix = entry.isDirectory ? 16384 : 32768;
          if (isStat) {
            unix |= 4095 & attr.mode;
          } else if ("number" === typeof attr) {
            unix |= 4095 & attr;
          } else {
            unix |= entry.isDirectory ? 493 : 420;
          }
          fileattr = (fileattr | unix << 16) >>> 0;
          entry.attr = fileattr;
          entry.setData(content);
          if (!update) _zip.setEntry(entry);
          return entry;
        },
        /**
         * Returns an array of ZipEntry objects representing the files and folders inside the archive
         *
         * @param {string} [password]
         * @returns Array
         */
        getEntries: function(password) {
          _zip.password = password;
          return _zip ? _zip.entries : [];
        },
        /**
         * Returns a ZipEntry object representing the file or folder specified by ``name``.
         *
         * @param {string} name
         * @return ZipEntry
         */
        getEntry: function(name) {
          return getEntry(name);
        },
        getEntryCount: function() {
          return _zip.getEntryCount();
        },
        forEach: function(callback) {
          return _zip.forEach(callback);
        },
        /**
         * Extracts the given entry to the given targetPath
         * If the entry is a directory inside the archive, the entire directory and it's subdirectories will be extracted
         *
         * @param {string|ZipEntry} entry - ZipEntry object or String with the full path of the entry
         * @param {string} targetPath - Target folder where to write the file
         * @param {boolean} [maintainEntryPath=true] - If maintainEntryPath is true and the entry is inside a folder, the entry folder will be created in targetPath as well. Default is TRUE
         * @param {boolean} [overwrite=false] - If the file already exists at the target path, the file will be overwriten if this is true.
         * @param {boolean} [keepOriginalPermission=false] - The file will be set as the permission from the entry if this is true.
         * @param {string} [outFileName] - String If set will override the filename of the extracted file (Only works if the entry is a file)
         *
         * @return Boolean
         */
        extractEntryTo: function(entry, targetPath, maintainEntryPath, overwrite, keepOriginalPermission, outFileName) {
          overwrite = get_Bool(false, overwrite);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          maintainEntryPath = get_Bool(true, maintainEntryPath);
          outFileName = get_Str(keepOriginalPermission, outFileName);
          var item = getEntry(entry);
          if (!item) {
            throw Utils.Errors.NO_ENTRY();
          }
          var entryName = canonical(item.entryName);
          var target = sanitize(targetPath, outFileName && !item.isDirectory ? canonical(outFileName) : maintainEntryPath ? entryName : pth.basename(entryName));
          if (item.isDirectory) {
            var children = _zip.getEntryChildren(item);
            children.forEach(function(child) {
              if (child.isDirectory) return;
              var content2 = child.getData();
              if (!content2) {
                throw Utils.Errors.CANT_EXTRACT_FILE();
              }
              var name = canonical(child.entryName);
              var childName = sanitize(targetPath, maintainEntryPath ? name : pth.basename(name));
              const fileAttr2 = keepOriginalPermission ? child.header.fileAttr : void 0;
              filetools.writeFileTo(childName, content2, overwrite, fileAttr2);
            });
            return true;
          }
          var content = item.getData(_zip.password);
          if (!content) throw Utils.Errors.CANT_EXTRACT_FILE();
          if (filetools.fs.existsSync(target) && !overwrite) {
            throw Utils.Errors.CANT_OVERRIDE();
          }
          const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
          filetools.writeFileTo(target, content, overwrite, fileAttr);
          return true;
        },
        /**
         * Test the archive
         * @param {string} [pass]
         */
        test: function(pass) {
          if (!_zip) {
            return false;
          }
          for (var entry of _zip.entries) {
            try {
              if (entry.isDirectory) {
                continue;
              }
              var content = _zip.entries[entry].getData(pass);
              if (!content) {
                return false;
              }
            } catch (err) {
              return false;
            }
          }
          return true;
        },
        /**
         * Extracts the entire archive to the given location
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {string|Buffer} [pass] password
         */
        extractAllTo: function(targetPath, overwrite, keepOriginalPermission, pass) {
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          pass = get_Str(keepOriginalPermission, pass);
          overwrite = get_Bool(false, overwrite);
          if (!_zip) throw Utils.Errors.NO_ZIP();
          _zip.entries.forEach(function(entry) {
            var entryName = sanitize(targetPath, canonical(entry.entryName));
            if (entry.isDirectory) {
              filetools.makeDir(entryName);
              return;
            }
            var content = entry.getData(pass);
            if (!content) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
            const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            filetools.writeFileTo(entryName, content, overwrite, fileAttr);
            try {
              filetools.fs.utimesSync(entryName, entry.header.time, entry.header.time);
            } catch (err) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
          });
        },
        /**
         * Asynchronous extractAllTo
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {function} callback The callback will be executed when all entries are extracted successfully or any error is thrown.
         */
        extractAllToAsync: function(targetPath, overwrite, keepOriginalPermission, callback) {
          callback = get_Fun(overwrite, keepOriginalPermission, callback);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          overwrite = get_Bool(false, overwrite);
          if (!callback) {
            return new Promise((resolve, reject) => {
              this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
                if (err) {
                  reject(err);
                } else {
                  resolve(this);
                }
              });
            });
          }
          if (!_zip) {
            callback(Utils.Errors.NO_ZIP());
            return;
          }
          targetPath = pth.resolve(targetPath);
          const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName)));
          const getError = (msg, file) => new Error(msg + ': "' + file + '"');
          const dirEntries = [];
          const fileEntries = [];
          _zip.entries.forEach((e) => {
            if (e.isDirectory) {
              dirEntries.push(e);
            } else {
              fileEntries.push(e);
            }
          });
          for (const entry of dirEntries) {
            const dirPath = getPath(entry);
            const dirAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            try {
              filetools.makeDir(dirPath);
              if (dirAttr) filetools.fs.chmodSync(dirPath, dirAttr);
              filetools.fs.utimesSync(dirPath, entry.header.time, entry.header.time);
            } catch (er) {
              callback(getError("Unable to create folder", dirPath));
            }
          }
          fileEntries.reverse().reduce(function(next, entry) {
            return function(err) {
              if (err) {
                next(err);
              } else {
                const entryName = pth.normalize(canonical(entry.entryName));
                const filePath = sanitize(targetPath, entryName);
                entry.getDataAsync(function(content, err_1) {
                  if (err_1) {
                    next(err_1);
                  } else if (!content) {
                    next(Utils.Errors.CANT_EXTRACT_FILE());
                  } else {
                    const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
                    filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                      if (!succ) {
                        next(getError("Unable to write file", filePath));
                      }
                      filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function(err_2) {
                        if (err_2) {
                          next(getError("Unable to set times", filePath));
                        } else {
                          next();
                        }
                      });
                    });
                  }
                });
              }
            };
          }, callback)();
        },
        /**
         * Writes the newly created zip file to disk at the specified location or if a zip was opened and no ``targetFileName`` is provided, it will overwrite the opened zip
         *
         * @param {string} targetFileName
         * @param {function} callback
         */
        writeZip: function(targetFileName, callback) {
          if (arguments.length === 1) {
            if (typeof targetFileName === "function") {
              callback = targetFileName;
              targetFileName = "";
            }
          }
          if (!targetFileName && opts.filename) {
            targetFileName = opts.filename;
          }
          if (!targetFileName) return;
          var zipData = _zip.compressToBuffer();
          if (zipData) {
            var ok = filetools.writeFileTo(targetFileName, zipData, true);
            if (typeof callback === "function") callback(!ok ? new Error("failed") : null, "");
          }
        },
        /**
                 *
                 * @param {string} targetFileName
                 * @param {object} [props]
                 * @param {boolean} [props.overwrite=true] If the file already exists at the target path, the file will be overwriten if this is true.
                 * @param {boolean} [props.perm] The file will be set as the permission from the entry if this is true.
        
                 * @returns {Promise<void>}
                 */
        writeZipPromise: function(targetFileName, props) {
          const { overwrite, perm } = Object.assign({ overwrite: true }, props);
          return new Promise((resolve, reject) => {
            if (!targetFileName && opts.filename) targetFileName = opts.filename;
            if (!targetFileName) reject("ADM-ZIP: ZIP File Name Missing");
            this.toBufferPromise().then((zipData) => {
              const ret = (done) => done ? resolve(done) : reject("ADM-ZIP: Wasn't able to write zip file");
              filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
            }, reject);
          });
        },
        /**
         * @returns {Promise<Buffer>} A promise to the Buffer.
         */
        toBufferPromise: function() {
          return new Promise((resolve, reject) => {
            _zip.toAsyncBuffer(resolve, reject);
          });
        },
        /**
         * Returns the content of the entire zip file as a Buffer object
         *
         * @prop {function} [onSuccess]
         * @prop {function} [onFail]
         * @prop {function} [onItemStart]
         * @prop {function} [onItemEnd]
         * @returns {Buffer}
         */
        toBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          if (typeof onSuccess === "function") {
            _zip.toAsyncBuffer(onSuccess, onFail, onItemStart, onItemEnd);
            return null;
          }
          return _zip.compressToBuffer();
        }
      };
    };
  }
});

// electron/main.ts
var import_electron2 = require("electron");
var import_node_crypto10 = require("node:crypto");
var import_node_path10 = __toESM(require("node:path"), 1);
var import_promises12 = __toESM(require("node:fs/promises"), 1);
var import_node_url = require("node:url");

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json2 = JSON.stringify(obj, null, 2);
  return json2.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path: path11, errorMaps, issueData } = params;
  const fullPath = [...path11, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path11, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path11;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description: description2 } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description: description2 };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description: description2 };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description2) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description: description2
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// electron/core/store.ts
var import_node_fs2 = __toESM(require("node:fs"), 1);
var import_electron = require("electron");

// electron/core/files.ts
var import_promises = __toESM(require("node:fs/promises"), 1);
var import_node_fs = require("node:fs");
var import_node_crypto = require("node:crypto");
var import_node_path2 = __toESM(require("node:path"), 1);
var import_adm_zip = __toESM(require_adm_zip(), 1);

// electron/core/safety.ts
var import_node_path = __toESM(require("node:path"), 1);
var identifier = external_exports.string().min(1).max(120).regex(/^[a-zA-Z0-9][a-zA-Z0-9_.+\-]*$/).refine((v) => !/^(con|prn|aux|nul|com\d|lpt\d)(\.|$)/i.test(v) && !v.endsWith("."), "\u65E0\u6548\u7684\u6587\u4EF6\u6807\u8BC6");
var portSchema = external_exports.number().int().min(1024).max(65535);
var leafSchema = external_exports.string().min(1).max(160).refine((v) => !/[\\/:*?"<>|\x00-\x1f]/.test(v) && v !== "." && v !== ".." && !/[. ]$/.test(v), "\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u8DEF\u5F84\u6216\u7279\u6B8A\u5B57\u7B26");
function under(root, ...parts) {
  const resolved = import_node_path.default.resolve(root, ...parts);
  const relative = import_node_path.default.relative(import_node_path.default.resolve(root), resolved);
  if (relative === ".." || relative.startsWith(`..${import_node_path.default.sep}`) || import_node_path.default.isAbsolute(relative)) throw new Error("\u8DEF\u5F84\u8D85\u51FA\u542F\u52A8\u5668\u6570\u636E\u76EE\u5F55");
  return resolved;
}
var hosts = [
  "piston-meta.mojang.com",
  "piston-data.mojang.com",
  "launchermeta.mojang.com",
  "launcher.mojang.com",
  "libraries.minecraft.net",
  "resources.download.minecraft.net",
  "meta.fabricmc.net",
  "maven.fabricmc.net",
  "api.modrinth.com",
  "cdn.modrinth.com",
  "api.adoptium.net",
  "github.com",
  "objects.githubusercontent.com",
  "release-assets.githubusercontent.com",
  "api.natfrp.com",
  "nya.globalslb.net",
  "natfrp.com",
  "download.natfrp.com",
  "login.microsoftonline.com",
  "user.auth.xboxlive.com",
  "xsts.auth.xboxlive.com",
  "api.minecraftservices.com"
];
function trustedUrl(value) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.port && url.port !== "443" || !hosts.includes(url.hostname)) throw new Error(`\u4E0D\u53D7\u4FE1\u4EFB\u7684\u4E0B\u8F7D\u6765\u6E90\uFF1A${url.hostname}`);
  return url;
}
function safeMessage(error) {
  const message = error instanceof Error ? error.message : String(error);
  return message.replace(/(Bearer\s+|access_token[=:]\s*|refresh_token[=:]\s*|NATFRP_TOKEN[=:]\s*)[^\s,;]+/gi, "$1[\u5DF2\u9690\u85CF]").slice(0, 600);
}

// electron/core/files.ts
async function exists(file) {
  try {
    await import_promises.default.access(file);
    return true;
  } catch {
    return false;
  }
}
async function atomicWrite(file, value) {
  await import_promises.default.mkdir(import_node_path2.default.dirname(file), { recursive: true });
  const temp = `${file}.${(0, import_node_crypto.randomUUID)()}.tmp`;
  try {
    await import_promises.default.writeFile(temp, value, { mode: 384 });
    await import_promises.default.rename(temp, file);
  } finally {
    await import_promises.default.rm(temp, { force: true });
  }
}
async function readJson(file) {
  return JSON.parse(await import_promises.default.readFile(file, "utf8"));
}
async function hashFile(file, algorithm) {
  const hash = (0, import_node_crypto.createHash)(algorithm);
  for await (const chunk of (0, import_node_fs.createReadStream)(file)) hash.update(chunk);
  return hash.digest("hex");
}
async function extractZip(file, target, skipMeta = false) {
  const zip = new import_adm_zip.default(file);
  let total = 0;
  for (const entry of zip.getEntries()) {
    const name = entry.entryName.replace(/\\/g, "/");
    if (skipMeta && name.startsWith("META-INF/")) continue;
    if (name.startsWith("/") || name.split("/").some((s) => s === ".." || s.includes(":")) || (entry.attr >>> 16 & 61440) === 40960) throw new Error("\u538B\u7F29\u5305\u5305\u542B\u4E0D\u5B89\u5168\u8DEF\u5F84");
    total += entry.header.size;
    if (total > 2 * 1024 ** 3) throw new Error("\u538B\u7F29\u5305\u89E3\u538B\u4F53\u79EF\u8D85\u51FA\u9650\u5236");
    const destination = under(target, name);
    if (entry.isDirectory) await import_promises.default.mkdir(destination, { recursive: true });
    else {
      await import_promises.default.mkdir(import_node_path2.default.dirname(destination), { recursive: true });
      await import_promises.default.writeFile(destination, entry.getData());
    }
  }
}

// electron/core/store.ts
var settingsSchema = external_exports.object({
  memoryMb: external_exports.number().int().min(1024).max(32768),
  javaPath: external_exports.string().max(1e3),
  autoJava: external_exports.boolean(),
  microsoftClientId: external_exports.string().max(100).refine((v) => !v || /^[a-f0-9-]{36}$/i.test(v), "Client ID \u683C\u5F0F\u4E0D\u6B63\u786E"),
  concurrency: external_exports.number().int().min(1).max(12),
  friendsServer: external_exports.string().max(500),
  theme: external_exports.enum(["light", "dark"]),
  textScale: external_exports.number().min(1).max(1.5).default(1),
  reduceMotion: external_exports.boolean().default(false),
  backgroundRevision: external_exports.string().uuid().optional(),
  backgroundDim: external_exports.number().min(0.35).max(0.9).default(0.75)
});
var Store = class {
  constructor(root) {
    this.root = root;
    this.state = {
      instances: [],
      settings: { memoryMb: 4096, javaPath: "", autoJava: true, microsoftClientId: "", concurrency: 6, friendsServer: "http://127.0.0.1:4589", theme: "light" },
      social: { connected: false, friends: [] },
      sakuraConfigured: false,
      dataDir: root,
      jobs: [],
      room: { state: "idle", detail: "" },
      running: [],
      logs: [],
      appVersion: "0.4.0"
    };
  }
  state;
  onChange = () => {
  };
  writing = Promise.resolve();
  async init() {
    import_node_fs2.default.mkdirSync(this.root, { recursive: true });
    if (await exists(this.file("state.json"))) {
      const value = await readJson(this.file("state.json"));
      if (value.schema !== 1 || !Array.isArray(value.instances)) throw new Error("\u914D\u7F6E\u6587\u4EF6\u7248\u672C\u4E0D\u53D7\u652F\u6301\uFF0C\u8BF7\u5907\u4EFD\u540E\u68C0\u67E5 state.json");
      this.state.settings = settingsSchema.parse({ ...this.state.settings, ...value.settings });
      this.state.instances = value.instances.map((item) => ({ ...item, id: identifier.parse(item.id), gameVersion: identifier.parse(item.gameVersion), versionId: identifier.parse(item.versionId), ...item.importState === "copying" ? { importState: "failed", installed: false } : {} }));
      this.state.selectedId = value.selectedId;
      this.state.account = value.account;
    }
    this.state.sakuraConfigured = !!this.secret("sakura");
  }
  file(...parts) {
    return under(this.root, ...parts);
  }
  async flush() {
    await this.writing;
  }
  instance(id) {
    const instance = this.state.instances.find((item) => item.id === id);
    if (!instance) throw new Error("\u6E38\u620F\u5B9E\u4F8B\u4E0D\u5B58\u5728");
    return instance;
  }
  instanceDir(id) {
    return this.file("instances", identifier.parse(id));
  }
  changed() {
    this.onChange();
  }
  async save() {
    const snapshot = { schema: 1, settings: this.state.settings, instances: this.state.instances, selectedId: this.state.selectedId, account: this.state.account };
    const encoded = JSON.stringify(snapshot, null, 2);
    this.writing = this.writing.catch(() => {
    }).then(() => atomicWrite(this.file("state.json"), encoded));
    await this.writing;
    this.changed();
  }
  secret(key) {
    const file = this.file("secrets", `${identifier.parse(key)}.bin`);
    if (!import_node_fs2.default.existsSync(file)) return void 0;
    if (!import_electron.safeStorage.isEncryptionAvailable()) throw new Error("\u7CFB\u7EDF\u51ED\u8BC1\u52A0\u5BC6\u4E0D\u53EF\u7528");
    return import_electron.safeStorage.decryptString(import_node_fs2.default.readFileSync(file));
  }
  async setSecret(key, value) {
    const file = this.file("secrets", `${identifier.parse(key)}.bin`);
    if (!value) {
      this.writing = this.writing.catch(() => {
      }).then(() => import("node:fs/promises").then((m) => m.rm(file, { force: true })));
      await this.writing;
      return;
    }
    if (!import_electron.safeStorage.isEncryptionAvailable()) throw new Error("\u7CFB\u7EDF\u51ED\u8BC1\u52A0\u5BC6\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u767B\u5F55\u72B6\u6001");
    const encrypted = import_electron.safeStorage.encryptString(value);
    this.writing = this.writing.catch(() => {
    }).then(() => atomicWrite(file, encrypted));
    await this.writing;
  }
  log(value) {
    this.state.logs.push(`${(/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN", { hour12: false })}  ${value}`);
    this.state.logs = this.state.logs.slice(-150);
    this.changed();
  }
};

// electron/core/jobs.ts
var import_node_crypto2 = require("node:crypto");
var Jobs = class {
  constructor(store) {
    this.store = store;
  }
  work = /* @__PURE__ */ new Map();
  queue = [];
  active = false;
  add(title, action) {
    const id = (0, import_node_crypto2.randomUUID)();
    const job = { id, title, status: "queued", detail: "\u7B49\u5F85\u5F00\u59CB", progress: 0, bytes: 0, totalBytes: 0, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
    this.store.state.jobs.unshift(job);
    this.store.state.jobs = this.store.state.jobs.slice(0, 100);
    this.work.set(id, { controller: new AbortController(), action });
    this.queue.push(id);
    this.store.changed();
    void this.drain();
    return id;
  }
  cancel(id) {
    const job = this.store.state.jobs.find((item) => item.id === id);
    if (!job || !["running", "queued"].includes(job.status)) return;
    if (this.work.get(id)?.commitStarted) return;
    this.work.get(id)?.controller.abort(new Error("\u4EFB\u52A1\u5DF2\u53D6\u6D88"));
    if (job.status === "queued") {
      job.status = "cancelled";
      job.detail = "\u5DF2\u53D6\u6D88";
      this.queue = this.queue.filter((key) => key !== id);
    }
    this.store.changed();
  }
  cancelAll() {
    for (const id of this.work.keys()) this.cancel(id);
  }
  retry(id) {
    const action = this.work.get(id)?.action;
    const job = this.store.state.jobs.find((item) => item.id === id);
    if (!action || !job || !["failed", "cancelled"].includes(job.status)) throw new Error("\u6B64\u4EFB\u52A1\u4E0D\u80FD\u91CD\u8BD5");
    return this.add(job.title, action);
  }
  async drain() {
    if (this.active) return;
    this.active = true;
    try {
      while (this.queue.length) {
        const id = this.queue.shift();
        const work = this.work.get(id);
        const job = this.store.state.jobs.find((item) => item.id === id);
        if (!job) continue;
        if (work.controller.signal.aborted) continue;
        job.status = "running";
        this.store.changed();
        try {
          await work.action({ signal: work.controller.signal, beginCommit: () => {
            work.controller.signal.throwIfAborted();
            work.commitStarted = true;
          }, update: (detail, progress, bytes, totalBytes) => {
            job.detail = detail;
            if (progress !== void 0) job.progress = Math.max(0, Math.min(1, progress));
            if (bytes !== void 0) job.bytes = bytes;
            if (totalBytes !== void 0) job.totalBytes = totalBytes;
            this.store.changed();
          } });
          work.controller.signal.throwIfAborted();
          job.status = "done";
          job.progress = 1;
          job.detail = "\u5DF2\u5B8C\u6210";
        } catch (error) {
          job.status = work.controller.signal.aborted ? "cancelled" : "failed";
          job.error = safeMessage(error);
          job.detail = job.error;
          this.store.log(`${job.title}\uFF1A${job.error}`);
        }
        this.store.changed();
      }
    } finally {
      this.active = false;
    }
  }
};

// electron/core/network.ts
var import_promises2 = __toESM(require("node:fs/promises"), 1);
var import_node_path3 = __toESM(require("node:path"), 1);
var import_node_crypto3 = require("node:crypto");
var USER_AGENT = "OLSLauncher/0.2.0 (Minecraft Java desktop launcher)";
async function request(url, options = {}, signal) {
  let current = trustedUrl(url).toString();
  for (let redirects = 0; redirects < 6; redirects++) {
    const headerTimeout = new AbortController();
    const timer = setTimeout(() => headerTimeout.abort(new Error("\u8FDE\u63A5\u8D85\u65F6")), 45e3);
    let response;
    try {
      response = await fetch(current, { ...options, headers: { "User-Agent": USER_AGENT, ...options.headers }, redirect: "manual", signal: signal ? AbortSignal.any([signal, headerTimeout.signal]) : headerTimeout.signal });
    } finally {
      clearTimeout(timer);
    }
    if (response.status >= 300 && response.status < 400 && response.headers.get("location")) {
      const next = trustedUrl(new URL(response.headers.get("location"), current).toString()).toString();
      if (new URL(next).origin !== new URL(current).origin && options.headers && Object.keys(options.headers).some((x) => x.toLowerCase() === "authorization")) throw new Error("\u62D2\u7EDD\u5411\u5176\u4ED6\u7AD9\u70B9\u8F6C\u53D1\u51ED\u8BC1");
      await response.body?.cancel();
      current = next;
      continue;
    }
    return response;
  }
  throw new Error("\u8BF7\u6C42\u91CD\u5B9A\u5411\u6B21\u6570\u8FC7\u591A");
}
async function json(url, options = {}, signal) {
  const response = await request(url, options, signal ? AbortSignal.any([signal, AbortSignal.timeout(45e3)]) : AbortSignal.timeout(45e3));
  if (!response.ok) {
    let reason = "";
    try {
      const value = await response.json();
      reason = value.msg || value.errorMessage || "";
    } catch {
    }
    throw new Error(`${new URL(url).hostname} \u8FD4\u56DE ${response.status}${reason ? `\uFF1A${reason}` : ""}`);
  }
  return response.json();
}
async function download(item, signal, progress = () => {
}) {
  trustedUrl(item.url);
  if (await exists(item.file)) {
    const stat = await import_promises2.default.stat(item.file);
    if ((!item.size || stat.size === item.size) && item.hash && await hashFile(item.file, item.algorithm || "sha1") === item.hash.toLowerCase()) {
      progress(stat.size, stat.size);
      return;
    }
  }
  await import_promises2.default.mkdir(import_node_path3.default.dirname(item.file), { recursive: true });
  for (let attempt = 0; attempt < 3; attempt++) {
    signal.throwIfAborted();
    const temp = `${item.file}.${(0, import_node_crypto3.randomUUID)()}.part`;
    const idle = new AbortController();
    let idleTimer;
    const touch = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => idle.abort(new Error("\u4E0B\u8F7D\u957F\u65F6\u95F4\u65E0\u54CD\u5E94")), 6e4);
    };
    try {
      touch();
      const response = await request(item.url, {}, AbortSignal.any([signal, idle.signal]));
      if (!response.ok || !response.body) throw new Error(`\u4E0B\u8F7D\u5931\u8D25 (${response.status})\uFF1A${import_node_path3.default.basename(item.file)}`);
      const total = item.size || Number(response.headers.get("content-length")) || 0;
      const handle = await import_promises2.default.open(temp, "w");
      let bytes = 0;
      try {
        for await (const chunk of response.body) {
          signal.throwIfAborted();
          touch();
          bytes += chunk.length;
          if (bytes > 4 * 1024 ** 3 || item.size && bytes > item.size) throw new Error("\u4E0B\u8F7D\u6587\u4EF6\u5927\u5C0F\u5F02\u5E38");
          await handle.writeFile(chunk);
          progress(bytes, total);
        }
      } finally {
        await handle.close();
      }
      if (item.size && bytes !== item.size) throw new Error("\u4E0B\u8F7D\u4E0D\u5B8C\u6574\uFF0C\u6B63\u5728\u91CD\u8BD5");
      if (item.hash && await hashFile(temp, item.algorithm || "sha1") !== item.hash.toLowerCase()) throw new Error(`\u6587\u4EF6\u6821\u9A8C\u5931\u8D25\uFF1A${import_node_path3.default.basename(item.file)}`);
      signal.throwIfAborted();
      await import_promises2.default.rename(temp, item.file);
      return;
    } catch (error) {
      await import_promises2.default.rm(temp, { force: true });
      if (signal.aborted || attempt === 2) throw error;
      await new Promise((resolve, reject) => {
        const done = () => {
          signal.removeEventListener("abort", abort);
          resolve();
        };
        const timer = setTimeout(done, 600 * (attempt + 1));
        const abort = () => {
          clearTimeout(timer);
          reject(signal.reason);
        };
        signal.addEventListener("abort", abort, { once: true });
      });
    } finally {
      if (idleTimer) clearTimeout(idleTimer);
    }
  }
}
async function parallel(values, concurrency, action) {
  let index = 0;
  let error;
  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, async () => {
    while (index < values.length && !error) {
      const current = index++;
      try {
        await action(values[current], current);
      } catch (caught) {
        error = caught;
      }
    }
  }));
  if (error) throw error;
}

// electron/core/auth.ts
var BASE = "https://login.microsoftonline.com/consumers/oauth2/v2.0";
var SCOPE = "XboxLive.signin offline_access";
var Auth = class {
  constructor(store) {
    this.store = store;
  }
  pending;
  cancel() {
    this.pending?.abort();
    this.pending = void 0;
  }
  async login() {
    const clientId = this.store.state.settings.microsoftClientId;
    if (!clientId) throw new Error("\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199\u542F\u52A8\u5668\u7684 Microsoft \u5E94\u7528 Client ID");
    this.cancel();
    const controller = new AbortController();
    this.pending = controller;
    const code = await json(`${BASE}/devicecode`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ client_id: clientId, scope: SCOPE }).toString() }, controller.signal);
    const expiresAt = Date.now() + code.expires_in * 1e3;
    void this.poll(code.device_code, clientId, code.interval || 5, expiresAt, controller.signal).catch((error) => {
      if (!controller.signal.aborted) this.store.log(`\u5FAE\u8F6F\u767B\u5F55\uFF1A${error instanceof Error ? error.message : "\u767B\u5F55\u5931\u8D25"}`);
    });
    return { userCode: code.user_code, verificationUri: code.verification_uri, expiresAt };
  }
  async poll(deviceCode, clientId, interval, expiresAt, signal) {
    let delay = Math.max(5, interval);
    while (Date.now() < expiresAt) {
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          signal.removeEventListener("abort", abort);
          resolve();
        }, delay * 1e3);
        const abort = () => {
          clearTimeout(timer);
          reject(new Error("\u767B\u5F55\u5DF2\u53D6\u6D88"));
        };
        signal.addEventListener("abort", abort, { once: true });
      });
      signal.throwIfAborted();
      const response = await request(`${BASE}/token`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ client_id: clientId, grant_type: "urn:ietf:params:oauth:grant-type:device_code", device_code: deviceCode }).toString() }, signal);
      const result = await response.json();
      if (result.error === "authorization_pending") continue;
      if (result.error === "slow_down") {
        delay += 5;
        continue;
      }
      if (result.error || !response.ok) throw new Error(result.error === "authorization_declined" ? "\u5DF2\u53D6\u6D88\u6388\u6743" : `\u5FAE\u8F6F\u6388\u6743\u672A\u5B8C\u6210\uFF1A${result.error || response.status}`);
      await this.exchange(result, clientId, signal);
      return;
    }
    throw new Error("\u767B\u5F55\u7801\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
  }
  async exchange(tokens, clientId, signal) {
    const post = (url, body) => json(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }, signal);
    const xbox = await post("https://user.auth.xboxlive.com/user/authenticate", { Properties: { AuthMethod: "RPS", SiteName: "user.auth.xboxlive.com", RpsTicket: `d=${tokens.access_token}` }, RelyingParty: "http://auth.xboxlive.com", TokenType: "JWT" });
    const xsts = await post("https://xsts.auth.xboxlive.com/xsts/authorize", { Properties: { SandboxId: "RETAIL", UserTokens: [xbox.Token] }, RelyingParty: "rp://api.minecraftservices.com/", TokenType: "JWT" });
    const minecraft = await post("https://api.minecraftservices.com/authentication/login_with_xbox", { identityToken: `XBL3.0 x=${xsts.DisplayClaims.xui[0].uhs};${xsts.Token}` });
    const headers = { Authorization: `Bearer ${minecraft.access_token}` };
    const profile = await json("https://api.minecraftservices.com/minecraft/profile", { headers }, signal).catch(() => {
      throw new Error("\u65E0\u6CD5\u8BFB\u53D6 Minecraft Java \u6863\u6848\uFF0C\u8BF7\u786E\u8BA4\u5DF2\u62E5\u6709 Java \u7248\u4E14\u5E94\u7528\u6709 Minecraft API \u6743\u9650");
    });
    signal?.throwIfAborted();
    const session = { id: profile.id, name: profile.name, accessToken: minecraft.access_token, expiresAt: Date.now() + minecraft.expires_in * 1e3, refreshToken: tokens.refresh_token, clientId };
    await this.store.setSecret("microsoft", JSON.stringify(session));
    this.store.state.account = { id: profile.id, name: profile.name };
    await this.store.save();
    this.store.log(`${profile.name} \u5DF2\u767B\u5F55 Minecraft`);
    return session;
  }
  async session() {
    const stored = this.store.secret("microsoft");
    if (!stored) throw new Error("\u8BF7\u5148\u767B\u5F55\u6B63\u7248 Microsoft / Minecraft \u8D26\u53F7");
    const value = JSON.parse(stored);
    if (value.expiresAt > Date.now() + 12e4) return value;
    const result = await json(`${BASE}/token`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ client_id: value.clientId, grant_type: "refresh_token", refresh_token: value.refreshToken, scope: SCOPE }).toString() });
    return this.exchange({ ...result, refresh_token: result.refresh_token || value.refreshToken }, value.clientId);
  }
  async logout() {
    this.cancel();
    await this.store.setSecret("microsoft");
    this.store.state.account = void 0;
    await this.store.save();
  }
};

// electron/core/minecraft.ts
var import_promises6 = __toESM(require("node:fs/promises"), 1);
var import_node_path6 = __toESM(require("node:path"), 1);
var import_node_child_process = require("node:child_process");
var import_node_util = require("node:util");
var import_node_crypto6 = require("node:crypto");

// electron/core/local-import.ts
var import_promises5 = __toESM(require("node:fs/promises"), 1);
var import_node_path5 = __toESM(require("node:path"), 1);
var import_node_crypto5 = require("node:crypto");

// electron/core/local-scan.ts
var import_promises4 = __toESM(require("node:fs/promises"), 1);
var import_node_path4 = __toESM(require("node:path"), 1);
var import_node_crypto4 = require("node:crypto");
var import_adm_zip2 = __toESM(require_adm_zip(), 1);

// node_modules/smol-toml/dist/error.js
function getLineColFromPtr(string, ptr) {
  let lines = string.slice(0, ptr).split(/\r?\n/);
  return [lines.length, lines.pop().length + 1];
}
function makeCodeBlock(string, line, column) {
  let lines = string.split(/\r?\n/);
  let codeblock = "";
  let numberLen = (Math.log10(line + 1) | 0) + 1;
  for (let i = line - 1; i <= line + 1; i++) {
    let l = lines[i - 1];
    if (!l)
      continue;
    codeblock += i.toString().padEnd(numberLen, " ");
    codeblock += ":  ";
    codeblock += l;
    codeblock += "\n";
    if (i === line) {
      codeblock += " ".repeat(numberLen + column + 2);
      codeblock += "^\n";
    }
  }
  return codeblock;
}
var TomlError = class _TomlError extends Error {
  line;
  column;
  codeblock;
  constructor(message, options) {
    const [line, column] = getLineColFromPtr(options.toml, options.ptr);
    const codeblock = makeCodeBlock(options.toml, line, column);
    super(`Invalid TOML document: ${message}

${codeblock}`, options);
    this.line = line;
    this.column = column;
    this.codeblock = codeblock;
  }
  /** @internal */
  static x(message, ctx, ptr) {
    throw new _TomlError(message, { toml: ctx.s, ptr: ptr ?? ctx.p });
  }
};

// node_modules/smol-toml/dist/primitive.js
function parseString(ctx) {
  let startPtr = ctx.p;
  let c = ctx.s.charCodeAt(ctx.p++);
  let first = c;
  let isLiteral = c === 39;
  let isMultiline = c === ctx.s.charCodeAt(ctx.p) && c === ctx.s.charCodeAt(ctx.p + 1);
  if (isMultiline) {
    if ((c = ctx.s.charCodeAt(ctx.p += 2)) === 10)
      ctx.p++;
    else if (c === 13 && ctx.s.charCodeAt(ctx.p + 1) === 10)
      ctx.p += 2;
  }
  let parsed = "";
  let sliceStart = ctx.p;
  let state = 0;
  for (; ctx.p < ctx.s.length; ctx.p++) {
    c = ctx.s.charCodeAt(ctx.p);
    if (isMultiline && (c === 10 || c === 13 && ctx.s.charCodeAt(ctx.p + 1) === 10)) {
      state = state && 3;
    } else if (c < 32 && c !== 9 || c === 127) {
      TomlError.x("control characters are not allowed in strings", ctx);
    } else if ((!state || state === 3) && c === first && (!isMultiline || ctx.s.charCodeAt(ctx.p + 1) === first && ctx.s.charCodeAt(ctx.p + 2) === first)) {
      if (isMultiline) {
        if (ctx.s.charCodeAt(ctx.p + 3) === first)
          ctx.p++;
        if (ctx.s.charCodeAt(ctx.p + 3) === first)
          ctx.p++;
      }
      if (!state) {
        let s = ctx.s.slice(sliceStart, ctx.p);
        parsed = parsed ? parsed + s : s;
      }
      ctx.p += isMultiline ? 3 : 1;
      return parsed;
    } else if (!state) {
      if (!isLiteral && c === 92) {
        parsed += ctx.s.slice(sliceStart, sliceStart = ctx.p);
        state = 1;
      }
    } else if (state === 1) {
      if (c === 120 || c === 117 || c === 85) {
        let errPtr = ctx.p++ - 1;
        let value = 0;
        let len = c === 120 ? 2 : c === 117 ? 4 : 8;
        for (let j = 0; j < len; j++, ctx.p++) {
          let hex = ctx.s.charCodeAt(ctx.p);
          let digit = (
            /* 0-9 */
            hex >= 48 && hex <= 57 ? hex - 48 : (
              /* A-F */
              hex >= 65 && hex <= 70 ? hex - 65 + 10 : (
                /* a-f */
                hex >= 97 && hex <= 102 ? hex - 97 + 10 : -1
              )
            )
          );
          if (digit < 0)
            TomlError.x("invalid non-hex character in unicode escape", ctx);
          value = value << 4 | digit;
        }
        if (value < 0 || value > 1114111 || value >= 55296 && value <= 57343) {
          TomlError.x("invalid unicode escape", ctx, errPtr);
        }
        parsed += String.fromCodePoint(value);
        sliceStart = ctx.p--;
        state = 0;
      } else if (isMultiline && (c === 32 || c === 9)) {
        state = 2;
      } else {
        if (c === 98)
          parsed += "\b";
        else if (c === 116)
          parsed += "	";
        else if (c === 110)
          parsed += "\n";
        else if (c === 102)
          parsed += "\f";
        else if (c === 114)
          parsed += "\r";
        else if (c === 101)
          parsed += "\x1B";
        else if (c === 34)
          parsed += '"';
        else if (c === 92)
          parsed += "\\";
        else
          TomlError.x("unrecognised escape sequence", ctx);
        sliceStart = ctx.p + 1;
        state = 0;
      }
    } else if (c !== 32 && c !== 9) {
      if (state === 2)
        TomlError.x("invalid escape: only line-ending whitespace may be escaped", ctx, sliceStart);
      state = !isLiteral && c === 92 ? 1 : 0;
      sliceStart = ctx.p;
    }
  }
  TomlError.x("unfinished string", ctx, startPtr);
}

// node_modules/smol-toml/dist/date.js
var DATE_TIME_RE = /^(\d{4}-\d{2}-\d{2})?[Tt ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|z|[-+]\d{2}:\d{2})?$/i;
var TomlDate = class _TomlDate extends Date {
  #hasDate = false;
  #hasTime = false;
  #offset = null;
  constructor(date, fasttype, unsafeDelim) {
    let hasDate = true;
    let hasTime = true;
    let offset = "Z";
    let c;
    if (typeof date === "string") {
      if (fasttype)
        prep: {
          if (fasttype < 3) {
            if (+date.slice(11, 13) > 23) {
              date = "";
              break prep;
            }
            if (fasttype === 2) {
              offset = null;
              date += "Z";
            } else if ((c = date.charCodeAt(date.length - 1)) !== 90 && c !== 122) {
              offset = date.slice(date.length - 6);
            }
            if (unsafeDelim)
              date = date.slice(0, 10) + "T" + date.slice(11);
          } else if (fasttype === 4) {
            date = +date.slice(0, 2) > 23 ? "" : `0000-01-01T${date}Z`;
          }
          hasDate = fasttype !== 4;
          hasTime = fasttype !== 3;
        }
      else {
        let match = date.match(DATE_TIME_RE);
        if (match) {
          if (!match[1]) {
            hasDate = false;
            date = `0000-01-01T${date}`;
          }
          hasTime = !!match[2];
          hasTime && date[10] === " " && (date = date.replace(" ", "T"));
          if (match[2] && +match[2] > 23) {
            date = "";
          } else {
            offset = match[3] || null;
            if (!offset && hasTime)
              date += "Z";
          }
        } else {
          date = "";
        }
      }
    }
    super(date);
    if (!isNaN(this.getTime())) {
      this.#hasDate = hasDate;
      this.#hasTime = hasTime;
      this.#offset = offset;
    }
  }
  isDateTime() {
    return this.#hasDate && this.#hasTime;
  }
  isLocal() {
    return !this.#hasDate || !this.#hasTime || !this.#offset;
  }
  isDate() {
    return this.#hasDate && !this.#hasTime;
  }
  isTime() {
    return this.#hasTime && !this.#hasDate;
  }
  isValid() {
    return this.#hasDate || this.#hasTime;
  }
  toISOString() {
    let iso = super.toISOString();
    if (this.isDate())
      return iso.slice(0, 10);
    if (this.isTime())
      return iso.slice(11, 23);
    if (this.#offset === null)
      return iso.slice(0, -1);
    if (this.#offset === "Z" || this.#offset === "z")
      return iso;
    let offset = +this.#offset.slice(1, 3) * 60 + +this.#offset.slice(4, 6);
    offset = this.#offset[0] === "-" ? offset : -offset;
    let offsetDate = new Date(this.getTime() - offset * 6e4);
    return offsetDate.toISOString().slice(0, -1) + this.#offset;
  }
  static wrapAsOffsetDateTime(jsDate, offset = "Z") {
    let date = new _TomlDate(jsDate);
    date.#offset = offset;
    return date;
  }
  static wrapAsLocalDateTime(jsDate) {
    let date = new _TomlDate(jsDate);
    date.#offset = null;
    return date;
  }
  static wrapAsLocalDate(jsDate) {
    let date = new _TomlDate(jsDate);
    date.#hasTime = false;
    date.#offset = null;
    return date;
  }
  static wrapAsLocalTime(jsDate) {
    let date = new _TomlDate(jsDate);
    date.#hasDate = false;
    date.#offset = null;
    return date;
  }
};

// node_modules/smol-toml/dist/extract.js
function isDigit(char, base = 10) {
  return base === 16 ? char > 47 && char < 58 || char > 64 && char < 71 || char > 96 && char < 103 : char > 47 && char < 48 + base;
}
function isEndOfValue(char, delim) {
  return char === 32 || char === 9 || char === 10 || char === 13 || // Structure end or next value delimiter
  delim && (char === delim || char === 44) || // Comment
  char === 35;
}
function extractValue(ctx, end) {
  let errPtr = ctx.p;
  let c = ctx.s.charCodeAt(ctx.p);
  if (c === 91 || c === 123) {
    ctx.d-- || TomlError.x("document contains excessively nested structures. aborting.", ctx);
    let value = c === 91 ? parseArray(ctx) : parseInlineTable(ctx);
    ctx.d++;
    return value;
  }
  if (c === 34 || c === 39) {
    return parseString(ctx);
  }
  if (c === 116) {
    if (ctx.s.charCodeAt(++ctx.p) !== 114 || ctx.s.charCodeAt(++ctx.p) !== 117 || ctx.s.charCodeAt(++ctx.p) !== 101)
      TomlError.x("invalid value", ctx, errPtr);
    return ctx.p++, true;
  }
  if (c === 102) {
    if (ctx.s.charCodeAt(++ctx.p) !== 97 || ctx.s.charCodeAt(++ctx.p) !== 108 || ctx.s.charCodeAt(++ctx.p) !== 115 || ctx.s.charCodeAt(++ctx.p) !== 101)
      TomlError.x("invalid value", ctx, errPtr);
    return ctx.p++, false;
  }
  if (c === 43 || c === 45) {
    return parseNumber(ctx, ctx.p, ctx.s.charCodeAt(++ctx.p), 44 - c, end);
  }
  if (ctx.s.charCodeAt(ctx.p + 4) === 45 && ctx.s.charCodeAt(ctx.p + 7) === 45) {
    return parseDate(ctx, c, end);
  }
  if (ctx.s.charCodeAt(ctx.p + 2) === 58) {
    return parseTime(ctx, c, end);
  }
  return parseNumber(ctx, ctx.p, c, 0, end);
}
function parseNumber(ctx, startPtr, startChr, sign, endChr) {
  let c = startChr;
  let state = 0;
  let hasUnderscores = false;
  if (c === 105) {
    if (ctx.s.charCodeAt(++ctx.p) !== 110 || ctx.s.charCodeAt(++ctx.p) !== 102)
      TomlError.x("invalid value", ctx, startPtr);
    return ctx.p++, (sign || 1) / 0;
  }
  if (c === 110) {
    if (ctx.s.charCodeAt(++ctx.p) !== 97 || ctx.s.charCodeAt(++ctx.p) !== 110)
      TomlError.x("invalid value", ctx, startPtr);
    return ctx.p++, NaN;
  }
  if (c === 48) {
    if (++ctx.p >= ctx.s.length || isEndOfValue(c = ctx.s.charCodeAt(ctx.p), endChr))
      return ctx.bi === true ? 0n : 0;
    if (!sign) {
      if (c === 120)
        return parseIntegerBaseN(ctx, startPtr, 16, endChr);
      else if (c === 98)
        return parseIntegerBaseN(ctx, startPtr, 2, endChr);
      else if (c === 111)
        return parseIntegerBaseN(ctx, startPtr, 8, endChr);
    }
    if (c === 46)
      state = 2;
    else if (c === 101 || c === 69)
      state = 4;
    else
      TomlError.x("illegal leading zero", ctx, startPtr);
  } else if (!isDigit(c))
    TomlError.x("invalid value", ctx, startPtr);
  while (++ctx.p < ctx.s.length && (c = ctx.s.charCodeAt(ctx.p), !isEndOfValue(c, endChr))) {
    if (!state)
      state = 1;
    if (c === 95) {
      if (!(state & 1))
        TomlError.x("illegal underscore", ctx);
      state += 11;
      hasUnderscores = true;
    } else if (state === 1 && c === 46)
      state = 2;
    else if ((state === 1 || state === 3) && (c === 101 || c === 69))
      state = 4;
    else if (state === 4 && (c === 43 || c === 45)) {
      state = 6;
    } else if (!isDigit(c))
      TomlError.x(`illegal character in numeric literal`, ctx);
    else if (state > 9)
      state -= 11;
    else if (!(state & 1))
      state++;
  }
  if (!state) {
    let val = (startChr - 48) * (sign || 1);
    return ctx.bi === true ? BigInt(val) : val;
  }
  if (!(state & 1))
    TomlError.x("unfinished numeric value", ctx, startPtr);
  let str = ctx.s.slice(startPtr, ctx.p);
  if (hasUnderscores)
    str = str.replaceAll("_", "");
  return state > 1 ? parseFloat(str) : parseInteger(ctx, str, 10, startPtr);
}
function parseIntegerBaseN(ctx, startPtr, base, endChr) {
  let c, underscore = 1;
  while (++ctx.p < ctx.s.length && (c = ctx.s.charCodeAt(ctx.p), !isEndOfValue(c, endChr))) {
    if (c === 95) {
      if (underscore & 1)
        TomlError.x("illegal underscore", ctx);
      underscore = 3;
    } else if (!isDigit(c, base))
      TomlError.x(`illegal character in numeric literal`, ctx);
    else if (underscore & 1)
      underscore--;
  }
  if (underscore & 1)
    TomlError.x("unfinished numeric value", ctx);
  let str = ctx.s.slice(startPtr + 2, ctx.p);
  if (underscore)
    str = str.replaceAll("_", "");
  return parseInteger(ctx, str, base, startPtr);
}
function parseInteger(ctx, str, base, startPtr) {
  if (ctx.bi !== true)
    int: {
      let val = parseInt(str, base);
      if (!Number.isSafeInteger(val)) {
        if (ctx.bi)
          break int;
        TomlError.x("integer value cannot be represented losslessly", ctx, startPtr);
      }
      return val;
    }
  return base === 10 ? BigInt(str) : BigInt((base === 2 ? "0b" : base === 8 ? "0o" : "0x") + str);
}
function parseDate(ctx, c, endChr) {
  let startPtr = ctx.p++, unsafeSeparator;
  if (!isDigit(c) || !isDigit(ctx.s.charCodeAt(ctx.p++)) || !isDigit(ctx.s.charCodeAt(ctx.p++)) || !isDigit(ctx.s.charCodeAt(ctx.p++))) {
    return parseNumber(ctx, ctx.p = startPtr, c, 0, endChr);
  }
  ctx.p += 5;
  if (!isDigit(ctx.s.charCodeAt(ctx.p++)))
    TomlError.x("invalid date-time: date part is malformed", ctx, startPtr);
  if (ctx.p >= ctx.s.length || ((c = ctx.s.charCodeAt(ctx.p)) !== 32 || (unsafeSeparator = true, !isDigit(ctx.s.charCodeAt(ctx.p + 1)))) && c !== 84 && c !== 116) {
    let t2 = ctx.s.slice(startPtr, ctx.p);
    return readDate(ctx, t2, 3, false, startPtr);
  }
  if (ctx.s.charCodeAt(ctx.p += 3) !== 58)
    TomlError.x("invalid date-time: time part is malformed", ctx, startPtr);
  if (ctx.s.charCodeAt(ctx.p += 3) === 58)
    ctx.p += 3;
  if (ctx.s.charCodeAt(ctx.p) === 46)
    while (isDigit(ctx.s.charCodeAt(++ctx.p)))
      ;
  if (c = ctx.s.charCodeAt(ctx.p)) {
    if (c === 90 || c === 122) {
      let t2 = ctx.s.slice(startPtr, ++ctx.p);
      return readDate(ctx, t2, 1, unsafeSeparator, startPtr, "[+00:00]");
    }
    if (c === 43 || c === 45) {
      let t2 = ctx.s.slice(startPtr, ctx.p += 6);
      return readDate(ctx, t2, 1, unsafeSeparator, startPtr, !ctx.ld && "[" + ctx.s.slice(ctx.p - 6, ctx.p) + "]");
    }
  }
  let t = ctx.s.slice(startPtr, ctx.p);
  return readDate(ctx, t, 2, unsafeSeparator, startPtr);
}
function parseTime(ctx, c, endChr) {
  let start2 = ctx.p;
  if (!isDigit(c) || !isDigit(ctx.s.charCodeAt(++ctx.p))) {
    return parseNumber(ctx, --ctx.p, c, 0, endChr);
  }
  if (ctx.s.charCodeAt(ctx.p += 4) === 58)
    ctx.p += 3;
  if (ctx.s.charCodeAt(ctx.p) === 46)
    while (isDigit(ctx.s.charCodeAt(++ctx.p)))
      ;
  let t = ctx.s.slice(start2, ctx.p);
  return readDate(ctx, t, 4, false, start2);
}
function readDate(ctx, str, type, unsafeDelim, errPtr, temporalSuffix) {
  if (ctx.ld) {
    let date = new TomlDate(str, type, unsafeDelim);
    if (!date.isValid())
      TomlError.x("invalid date", ctx, errPtr);
    return date;
  }
  try {
    if (temporalSuffix)
      str += temporalSuffix;
    switch (type) {
      case 1:
        return Temporal.ZonedDateTime.from(str);
      case 2:
        return Temporal.PlainDateTime.from(str);
      case 3:
        return Temporal.PlainDate.from(str);
      case 4:
        return Temporal.PlainTime.from(str);
    }
  } catch (e) {
    TomlError.x(e instanceof Error ? e.message : "" + e, ctx, errPtr);
  }
}

// node_modules/smol-toml/dist/util.js
function skipComment(ctx) {
  for (; ctx.p < ctx.s.length; ctx.p++) {
    let c = ctx.s.charCodeAt(ctx.p);
    if (c === 10)
      break;
    if (c === 13 && ctx.s.charCodeAt(ctx.p + 1) === 10) {
      ctx.p++;
      break;
    }
    if (c < 32 && c !== 9 || c === 127) {
      TomlError.x("control characters are not allowed in comments", ctx);
    }
  }
}
function skipVoid(ctx, banNewLines, banComments) {
  let c;
  while (ctx.p < ctx.s.length) {
    while (ctx.p < ctx.s.length && ((c = ctx.s.charCodeAt(ctx.p)) === 32 || c === 9 || !banNewLines && (c === 10 || c === 13 && ctx.s.charCodeAt(ctx.p + 1) === 10)))
      ctx.p++;
    if (banComments || c !== 35)
      break;
    skipComment(ctx);
  }
}

// node_modules/smol-toml/dist/struct.js
function parseKey(ctx, end = 61) {
  let startPtr;
  let state = 0;
  let parsed = [];
  let sliceStart;
  let c = ctx.s.charCodeAt(startPtr = ctx.p);
  do {
    if (c === end) {
      if (!state)
        TomlError.x("unexpected end of key", ctx);
      if (state === 1)
        parsed.push(ctx.s.slice(sliceStart, ctx.p));
      return ctx.p++, parsed;
    } else if (c === 46) {
      if (!state)
        TomlError.x("illegal empty bare key", ctx);
      if (state === 1)
        parsed.push(ctx.s.slice(sliceStart, ctx.p));
      state = 0;
    } else if (!state && (c === 34 || c === 39)) {
      if (c === ctx.s.charCodeAt(ctx.p + 1) && c === ctx.s.charCodeAt(ctx.p + 2))
        TomlError.x("illegal quoted key: multiline strings are not allowed", ctx);
      parsed.push(parseString(ctx));
      state = 2;
      ctx.p--;
    } else if (c === 32 || c === 9) {
      if (state === 1) {
        parsed.push(ctx.s.slice(sliceStart, ctx.p));
        state = 2;
      }
    } else if (state === 2 || c < 48 && c !== 45 || c > 57 && c < 65 || c > 90 && c < 97 && c !== 95 || c > 122) {
      TomlError.x("illegal character in key", ctx);
    } else if (!state) {
      state = 1;
      sliceStart = ctx.p;
    }
  } while (c = ctx.s.charCodeAt(++ctx.p));
  TomlError.x("incomplete key-value: cannot find end of key", ctx, startPtr);
}
function parseInlineTable(ctx) {
  let startPtr = ctx.p++;
  let res = /* @__PURE__ */ Object.create(null);
  let seen = /* @__PURE__ */ new Set();
  let c;
  while (ctx.p < ctx.s.length) {
    skipVoid(ctx);
    if ((c = ctx.s.charCodeAt(ctx.p)) === 125) {
      ctx.p++;
      return res;
    }
    let k;
    let t = res;
    let hasOwn = false;
    let errPtr = ctx.p;
    let key = parseKey(ctx);
    for (let i = 0; i < key.length; i++) {
      if (i)
        t = hasOwn ? t[k] : t[k] = /* @__PURE__ */ Object.create(null);
      k = key[i];
      if ((hasOwn = Object.hasOwn(t, k)) && (typeof t[k] !== "object" || seen.has(t[k]))) {
        TomlError.x("trying to redefine an already defined value", ctx, errPtr);
      }
      let unsafe = k === "__proto__";
      if (ctx.uk && (unsafe || k === "constructor")) {
        t = ctx.uk !== 1 && TomlError.x("document contains an unsafe property", ctx, errPtr);
        break;
      }
      if (!hasOwn && unsafe) {
        Object.defineProperty(t, k, { enumerable: true, configurable: true, writable: true });
      }
    }
    if (hasOwn) {
      TomlError.x("trying to redefine an already defined value", ctx, errPtr);
    }
    skipVoid(ctx, true, true);
    let value = extractValue(
      ctx,
      125
      /* } */
    );
    if (t && typeof (t[k] = value) === "object")
      seen.add(value);
    skipVoid(ctx);
    if ((c = ctx.s.charCodeAt(ctx.p++)) === 125) {
      return res;
    }
    if (c !== 44)
      TomlError.x("expected comma or end of structure", ctx, ctx.p - 1);
  }
  TomlError.x("unfinished table", ctx, startPtr);
}
function parseArray(ctx) {
  let startPtr = ctx.p++;
  let res = [];
  let c;
  while (ctx.p < ctx.s.length) {
    skipVoid(ctx);
    if ((c = ctx.s.charCodeAt(ctx.p)) === 93) {
      ctx.p++;
      return res;
    }
    res.push(extractValue(
      ctx,
      93
      /* ] */
    ));
    skipVoid(ctx);
    if ((c = ctx.s.charCodeAt(ctx.p++)) === 93) {
      return res;
    }
    if (c !== 44)
      TomlError.x("expected comma or end of structure", ctx, ctx.p - 1);
  }
  TomlError.x("unfinished array", ctx, startPtr);
}

// node_modules/smol-toml/dist/parse.js
function peekTable(ctx, key, table, meta, type) {
  let t = table;
  let m = meta;
  let k;
  let hasOwn = false;
  let state;
  for (let i = 0; i < key.length; i++) {
    if (i) {
      t = hasOwn ? t[k] : t[k] = /* @__PURE__ */ Object.create(null);
      m = (state = m[k]).c;
      if (type === 0 && (state.t === 1 || state.t === 2)) {
        return null;
      }
      if (state.t === 2) {
        let l = t.length - 1;
        t = t[l];
        m = m[l].c;
      }
    }
    k = key[i];
    if ((hasOwn = Object.hasOwn(t, k)) && m[k]?.t === 0 && m[k]?.d) {
      return null;
    }
    if (!hasOwn) {
      let unsafe = k === "__proto__";
      if (ctx.uk && (unsafe || k === "constructor"))
        return false;
      if (unsafe) {
        Object.defineProperty(t, k, { enumerable: true, configurable: true, writable: true });
        Object.defineProperty(m, k, { enumerable: true, configurable: true, writable: true });
      }
      m[k] = {
        t: i < key.length - 1 && type === 2 ? 3 : type,
        d: false,
        i: 0,
        c: /* @__PURE__ */ Object.create(null)
      };
    }
  }
  state = m[k];
  if (state.t !== type && !(type === 1 && state.t === 3)) {
    return null;
  }
  if (type === 2) {
    if (!state.d) {
      state.d = true;
      t[k] = [];
    }
    t[k].push(t = /* @__PURE__ */ Object.create(null));
    state.c[state.i++] = state = { t: 1, d: false, i: 0, c: /* @__PURE__ */ Object.create(null) };
  }
  if (state.d) {
    return null;
  }
  state.d = true;
  if (type === 1) {
    t = hasOwn ? t[k] : t[k] = /* @__PURE__ */ Object.create(null);
  } else if (type === 0 && hasOwn) {
    return null;
  }
  return [k, t, state.c];
}
function validateTablePeek(ctx, peek, ptr) {
  if (peek === null || ctx.uk === 2)
    TomlError.x(peek === null ? "trying to redefine an already defined table or value" : "document contains an unsafe property", ctx, ptr);
}
function parse(toml, options = {}) {
  let ctx = {
    s: toml,
    p: 0,
    d: options.maxDepth ?? 1e3,
    bi: options.integersAsBigInt ?? false,
    ld: options.useLegacyDate ?? true,
    uk: options.unsafeKeyBehaviour === "throw" ? 2 : options.unsafeKeyBehaviour === "drop" ? 1 : 0
  };
  let res = /* @__PURE__ */ Object.create(null);
  let meta = /* @__PURE__ */ Object.create(null);
  let tmp;
  let skipping = false;
  let tbl = res;
  let m = meta;
  if (toml.charCodeAt(0) === 65279)
    ctx.p++;
  skipVoid(ctx);
  while (ctx.p < toml.length) {
    if (toml.charCodeAt(ctx.p) === 91) {
      let isTableArray = toml.charCodeAt(++ctx.p) === 91;
      tmp = ctx.p += +isTableArray;
      skipping = false;
      let k = parseKey(
        ctx,
        93
        /* ] */
      );
      if (isTableArray) {
        if (toml.charCodeAt(ctx.p) !== 93) {
          TomlError.x("expected end of table array declaration", ctx);
        }
        ctx.p++;
      }
      let p = peekTable(
        ctx,
        k,
        res,
        meta,
        isTableArray ? 2 : 1
        /* Type.EXPLICIT */
      );
      if (!p) {
        validateTablePeek(ctx, p, tmp);
        skipping = true;
      } else {
        m = p[2];
        tbl = p[1];
      }
    } else {
      tmp = ctx.p;
      let k = parseKey(ctx);
      let p = peekTable(
        ctx,
        k,
        tbl,
        m,
        0
        /* Type.DOTTED */
      );
      if (!p && !skipping)
        validateTablePeek(ctx, p, tmp);
      skipVoid(ctx, true, true);
      let v = extractValue(ctx, void 0);
      if (p && !skipping)
        p[1][p[0]] = v;
    }
    skipVoid(ctx, true);
    if (ctx.p < toml.length && (tmp = toml.charCodeAt(ctx.p)) !== 10 && (tmp !== 13 || toml.charCodeAt(ctx.p + 1) !== 10)) {
      TomlError.x("each key-value declaration must be followed by an end-of-line", ctx);
    }
    skipVoid(ctx);
  }
  return res;
}

// node_modules/smol-toml/dist/stringify.js
var HAS_WELLFORMED = !!"".isWellFormed;

// electron/core/world-info.ts
var import_promises3 = __toESM(require("node:fs/promises"), 1);
var import_node_zlib = require("node:zlib");
function readLevelInfo(encoded) {
  if (encoded.length > 8 * 1024 ** 2) throw new Error("level.dat \u8D85\u51FA\u8BFB\u53D6\u4E0A\u9650");
  const data = encoded[0] === 31 && encoded[1] === 139 ? (0, import_node_zlib.gunzipSync)(encoded, { maxOutputLength: 8 * 1024 ** 2 }) : encoded;
  let cursor = 0;
  let budget = 15e4;
  const need = (size) => {
    if (size < 0 || !Number.isSafeInteger(size) || cursor + size > data.length) throw new Error("NBT \u6570\u636E\u4E0D\u5B8C\u6574");
  };
  const u8 = () => {
    need(1);
    return data[cursor++];
  };
  const i32 = () => {
    need(4);
    const value2 = data.readInt32BE(cursor);
    cursor += 4;
    return value2;
  };
  const string = () => {
    need(2);
    const size = data.readUInt16BE(cursor);
    cursor += 2;
    need(size);
    const value2 = data.toString("utf8", cursor, cursor + size);
    cursor += size;
    return value2;
  };
  const output = {};
  const wanted = /* @__PURE__ */ new Set(["Data.LevelName", "Data.LastPlayed", "Data.GameType", "Data.hardcore", "Data.Version.Name", "LevelName", "LastPlayed", "GameType", "hardcore", "Version.Name"]);
  const value = (type, key, depth) => {
    if (--budget < 0 || depth > 40) throw new Error("NBT \u7ED3\u6784\u8D85\u51FA\u8BFB\u53D6\u4E0A\u9650");
    const retain = wanted.has(key);
    if (type === 1) {
      const number = u8();
      if (retain) output[key] = number;
    } else if (type === 2) {
      need(2);
      const number = data.readInt16BE(cursor);
      cursor += 2;
      if (retain) output[key] = number;
    } else if (type === 3) {
      const number = i32();
      if (retain) output[key] = number;
    } else if (type === 4) {
      need(8);
      const number = Number(data.readBigInt64BE(cursor));
      cursor += 8;
      if (retain && Number.isSafeInteger(number)) output[key] = number;
    } else if (type === 5 || type === 6) {
      const size = type === 5 ? 4 : 8;
      need(size);
      cursor += size;
    } else if (type === 8) {
      const text2 = string();
      if (retain) output[key] = text2;
    } else if (type === 7 || type === 11 || type === 12) {
      const count = i32();
      const bytes = count * (type === 7 ? 1 : type === 11 ? 4 : 8);
      need(bytes);
      cursor += bytes;
    } else if (type === 9) {
      const childType = u8();
      const count = i32();
      if (count < 0 || count > budget || count && childType === 0) throw new Error("NBT \u5217\u8868\u957F\u5EA6\u65E0\u6548");
      for (let index = 0; index < count; index++) value(childType, "", depth + 1);
    } else if (type === 10) {
      while (true) {
        const childType = u8();
        if (!childType) break;
        const name2 = string();
        value(childType, key ? `${key}.${name2}` : name2, depth + 1);
      }
    } else throw new Error("\u672A\u77E5 NBT \u7C7B\u578B");
  };
  if (u8() !== 10) throw new Error("level.dat \u4E0D\u662F\u6709\u6548\u7684 Java \u5B58\u6863");
  string();
  value(10, "", 0);
  const get = (key) => output[`Data.${key}`] ?? output[key];
  const name = get("LevelName");
  const version = get("Version.Name");
  const played = get("LastPlayed");
  const mode = get("GameType");
  return { name: typeof name === "string" ? name.slice(0, 200) : "", gameVersion: typeof version === "string" ? version.slice(0, 80) : void 0, lastPlayed: typeof played === "number" ? played : void 0, gameMode: typeof mode === "number" ? ["\u751F\u5B58", "\u521B\u9020", "\u5192\u9669", "\u65C1\u89C2"][mode] || "\u672A\u77E5" : void 0, hardcore: !!get("hardcore") };
}
async function readWorld(file, folder) {
  try {
    const stat = await import_promises3.default.stat(file);
    if (stat.size > 8 * 1024 ** 2) throw new Error();
    const info = readLevelInfo(await import_promises3.default.readFile(file));
    return { ...info, folder, name: info.name || folder };
  } catch {
    return { folder, name: folder, warning: "\u65E0\u6CD5\u8BFB\u53D6\u5B58\u6863\u4FE1\u606F\uFF0C\u4FDD\u7559\u6587\u4EF6\u5939\u540D\u79F0" };
  }
}

// electron/core/local-scan.ts
var CONTENT_DIRS = ["mods", "saves", "resourcepacks", "shaderpacks", "config", "defaultconfigs", "kubejs", "scripts"];
var CONTENT_FILES = ["options.txt", "optionsof.txt", "optionsshaders.txt", "servers.dat"];
var METADATA_LIMIT = 512 * 1024;
var VERSION_PATTERN = /^(?:\d{1,2}\.\d+(?:\.\d+)?(?:-(?:pre|rc|snapshot)-?\d+)?|\d{2}w\d{2}[a-z])$/;
var modernVersion = (version) => Number(/^1\.(\d+)/.exec(version)?.[1] ?? Infinity) >= 13;
async function localPath(root, ...parts) {
  const target = under(root, ...parts);
  try {
    const stat = await import_promises4.default.lstat(target);
    if (stat.isSymbolicLink()) return void 0;
    const real = await import_promises4.default.realpath(target);
    under(root, import_node_path4.default.relative(root, real));
    return { path: target, stat };
  } catch {
    return void 0;
  }
}
async function directories(root) {
  try {
    return (await import_promises4.default.readdir(root, { withFileTypes: true })).filter((entry) => entry.isDirectory() && !entry.isSymbolicLink()).sort((a, b) => a.name.localeCompare(b.name));
  } catch {
    return [];
  }
}
async function readSmallJson(root, ...parts) {
  const item = await localPath(root, ...parts);
  if (!item || !item.stat.isFile() || item.stat.size > 2 * 1024 ** 2) return void 0;
  try {
    const value = JSON.parse(await import_promises4.default.readFile(item.path, "utf8"));
    return value && typeof value === "object" && !Array.isArray(value) ? value : void 0;
  } catch {
    return void 0;
  }
}
var text = (value) => typeof value === "string" ? value.slice(0, 500) : void 0;
var description = (value) => typeof value === "string" ? value.slice(0, 500) : Array.isArray(value) ? value.map(description).filter(Boolean).join(" ").slice(0, 500) : value && typeof value === "object" ? description(value.text) : void 0;
function archiveText(zip, name) {
  const entry = zip.getEntry(name);
  if (!entry || entry.isDirectory || entry.header.size > METADATA_LIMIT || entry.header.compressedSize > METADATA_LIMIT) return void 0;
  const buffer = entry.getData();
  if (buffer.length > METADATA_LIMIT) throw new Error("\u5143\u6570\u636E\u4F53\u79EF\u8D85\u9650");
  return buffer.toString("utf8");
}
async function sniffResource(root, folder, filename, kind) {
  const item = await localPath(root, folder, filename);
  const enabled = !/\.(disabled|disable|old)$/i.test(filename);
  const base = filename.replace(/\.(disabled|disable|old)$/i, "").replace(/\.(jar|zip)$/i, "");
  const result = { filename, name: base, kind, enabled, size: item?.stat.size || 0, loaders: [] };
  if (item?.stat.isDirectory() && kind !== "mod") {
    result.directory = true;
    result.size = 0;
    const metadata = await readSmallJson(root, folder, filename, "pack.mcmeta");
    const pack = metadata?.pack;
    result.description = description(pack?.description);
    if (typeof pack?.pack_format === "number") result.packFormat = pack.pack_format;
    return result;
  }
  if (!item || !item.stat.isFile()) {
    result.warning = "\u6587\u4EF6\u5DF2\u79FB\u52A8\u6216\u4E0D\u53EF\u8BBF\u95EE";
    return result;
  }
  if (item.stat.size > 256 * 1024 ** 2) {
    result.warning = "\u6587\u4EF6\u8F83\u5927\uFF0C\u672A\u5C55\u5F00\u5185\u90E8\u5143\u6570\u636E";
    return result;
  }
  try {
    if (item.stat.isDirectory()) return result;
    const zip = new import_adm_zip2.default(item.path);
    if (kind !== "mod") {
      const metadata = archiveText(zip, "pack.mcmeta");
      if (metadata) {
        const pack = JSON.parse(metadata).pack;
        result.description = description(pack?.description);
        if (Number.isSafeInteger(pack?.pack_format)) result.packFormat = pack.pack_format;
      }
      return result;
    }
    const fabric = archiveText(zip, "fabric.mod.json");
    const quilt = archiveText(zip, "quilt.mod.json");
    const forge = archiveText(zip, "META-INF/mods.toml");
    const neo = archiveText(zip, "META-INF/neoforge.mods.toml");
    if (fabric) {
      const data = JSON.parse(fabric);
      result.name = text(data.name) || text(data.id) || base;
      result.modId = text(data.id);
      result.version = text(data.version);
      result.description = description(data.description);
      result.loaders.push("fabric");
    }
    if (quilt) {
      const data = JSON.parse(quilt).quilt_loader;
      if (!fabric) {
        result.name = text(data?.metadata?.name) || text(data?.id) || base;
        result.modId = text(data?.id);
        result.version = text(data?.version);
      }
      result.loaders.push("quilt");
    }
    for (const [metadata, loader] of [[forge, "forge"], [neo, "neoforge"]]) if (metadata) {
      const data = parse(metadata);
      const mod = data.mods?.[0];
      if (!fabric && !quilt) {
        result.name = text(mod?.displayName) || text(mod?.modId) || base;
        result.modId = text(mod?.modId);
        result.version = text(mod?.version);
        result.description = description(mod?.description);
      }
      result.loaders.push(loader);
    }
    if (result.version?.includes("${")) {
      const manifest2 = archiveText(zip, "META-INF/MANIFEST.MF");
      result.version = manifest2?.match(/^Implementation-Version:\s*(.+)$/m)?.[1]?.trim();
    }
    if (!result.loaders.length) {
      const legacy = archiveText(zip, "mcmod.info");
      if (legacy) {
        const data = JSON.parse(legacy);
        const mod = Array.isArray(data) ? data[0] : data.modList?.[0];
        result.name = text(mod?.name) || base;
        result.modId = text(mod?.modid);
        result.version = text(mod?.version);
        result.loaders.push("forge");
      } else result.warning = "\u672A\u53D1\u73B0\u5E38\u89C1\u6A21\u7EC4\u5143\u6570\u636E\uFF0C\u4FDD\u7559\u6587\u4EF6\u540D";
    }
  } catch {
    result.warning = "\u5143\u6570\u636E\u635F\u574F\u6216\u683C\u5F0F\u4E0D\u53D7\u652F\u6301\uFF0C\u6587\u4EF6\u4ECD\u53EF\u67E5\u770B";
  }
  return result;
}
async function sniffContents(gameDir) {
  const resources = [];
  const worlds = [];
  const warnings = [];
  for (const [folder, kind] of [["mods", "mod"], ["shaderpacks", "shader"], ["resourcepacks", "resourcepack"]]) {
    const directory = await localPath(gameDir, folder);
    if (!directory?.stat.isDirectory()) {
      try {
        if ((await import_promises4.default.lstat(under(gameDir, folder))).isSymbolicLink()) warnings.push(`\u5DF2\u8DF3\u8FC7\u94FE\u63A5\u76EE\u5F55 ${folder}\uFF0C\u4E0D\u4F1A\u8BFB\u53D6\u6216\u590D\u5236\u94FE\u63A5\u6307\u5411\u7684\u5185\u5BB9`);
      } catch {
      }
      continue;
    }
    const entries = [];
    for (const entry of await import_promises4.default.readdir(directory.path, { withFileTypes: true })) {
      if (entry.isSymbolicLink()) continue;
      if (entry.isFile() && (kind === "mod" ? /\.jar(?:\.(?:disabled|disable|old))?$/i : /\.zip(?:\.(?:disabled|disable|old))?$/i).test(entry.name)) entries.push(entry);
      else if (entry.isDirectory() && kind !== "mod" && (await localPath(gameDir, folder, entry.name, "pack.mcmeta") || kind === "shader" && await localPath(gameDir, folder, entry.name, "shaders"))) entries.push(entry);
    }
    entries.sort((a, b) => a.name.localeCompare(b.name));
    if (entries.length > 1500) warnings.push(`${folder} \u4EC5\u5C55\u793A\u524D 1500 \u9879\uFF0C\u5BFC\u5165\u65F6\u4ECD\u590D\u5236\u9009\u5B9A\u76EE\u5F55\u7684\u6587\u4EF6`);
    const inspected = [];
    await parallel(entries.slice(0, 1500), 3, async (entry, index) => {
      inspected[index] = await sniffResource(gameDir, folder, entry.name, kind);
    });
    resources.push(...inspected);
  }
  const saveRoot = await localPath(gameDir, "saves");
  if (saveRoot?.stat.isDirectory()) for (const entry of (await directories(saveRoot.path)).slice(0, 1e3)) {
    const file = await localPath(gameDir, "saves", entry.name, "level.dat");
    if (file?.stat.isFile()) worlds.push(await readWorld(file.path, entry.name));
  }
  worlds.sort((a, b) => (b.lastPlayed || 0) - (a.lastPlayed || 0));
  return { resources, worlds, warnings };
}
function loaderInfo(metadata) {
  const libraries = metadata.flatMap((data) => Array.isArray(data.libraries) ? data.libraries : []).filter((value) => !!value && typeof value.name === "string");
  for (const [prefix, loader] of [["net.neoforged:neoforge:", "neoforge"], ["net.minecraftforge:forge:", "forge"], ["org.quiltmc:quilt-loader:", "quilt"], ["net.fabricmc:fabric-loader:", "fabric"]]) {
    const match = libraries.find((item) => item.name.startsWith(prefix));
    if (match) return { loader, version: match.name.slice(prefix.length).split(":")[0] };
  }
  const classes = metadata.map((data) => text(data.mainClass) || "").join(" ");
  if (/fabricmc|KnotClient/i.test(classes)) return { loader: "fabric" };
  if (/quiltmc/i.test(classes)) return { loader: "quilt" };
  if (/modlauncher|forge/i.test(classes)) return { loader: "forge" };
  return { loader: /net\.minecraft\.(client\.main\.Main|launchwrapper\.Launch)/.test(classes) ? "vanilla" : "unknown" };
}
async function scanLocalFolder(selected) {
  const selectedPath = await import_promises4.default.realpath(selected);
  if (!(await import_promises4.default.stat(selectedPath)).isDirectory()) throw new Error("\u8BF7\u9009\u62E9\u6E38\u620F\u6587\u4EF6\u5939");
  const report = { id: (0, import_node_crypto4.randomUUID)(), selectedPath, scannedAt: (/* @__PURE__ */ new Date()).toISOString(), profiles: [], warnings: [] };
  const roots = /* @__PURE__ */ new Set();
  const directProfiles = [];
  const addRoot = async (directory) => {
    try {
      const real = await import_promises4.default.realpath(directory);
      if ((await import_promises4.default.lstat(directory)).isSymbolicLink()) return;
      roots.add(real);
    } catch {
    }
  };
  if (import_node_path4.default.basename(import_node_path4.default.dirname(selectedPath)).toLowerCase() === "versions") directProfiles.push({ root: import_node_path4.default.dirname(import_node_path4.default.dirname(selectedPath)), directory: selectedPath });
  else if (import_node_path4.default.basename(selectedPath).toLowerCase() === "versions") await addRoot(import_node_path4.default.dirname(selectedPath));
  else {
    await addRoot(selectedPath);
    const minecraft = await localPath(selectedPath, ".minecraft");
    if (minecraft?.stat.isDirectory()) await addRoot(minecraft.path);
    const instances = await localPath(selectedPath, "instances");
    const container = instances?.stat.isDirectory() ? instances.path : selectedPath;
    for (const entry of (await directories(container)).slice(0, 100)) {
      if (["versions", "libraries", "assets", "mods", "saves", "resourcepacks", "shaderpacks", "config"].includes(entry.name)) continue;
      const wrapped = await localPath(container, entry.name, ".minecraft");
      if (wrapped?.stat.isDirectory()) await addRoot(wrapped.path);
      else if (instances && await localPath(container, entry.name, "versions")) await addRoot(under(container, entry.name));
    }
  }
  const candidates = [...directProfiles];
  for (const root of roots) {
    if ((await localPath(root, ".minecraft"))?.stat.isDirectory()) continue;
    const versions = await localPath(root, "versions");
    if (versions?.stat.isDirectory()) for (const entry of (await directories(versions.path)).slice(0, 128)) candidates.push({ root, directory: under(versions.path, entry.name) });
    else {
      const mmc = await readSmallJson(root, "mmc-pack.json") || await readSmallJson(import_node_path4.default.dirname(root), "mmc-pack.json");
      const components = Array.isArray(mmc?.components) ? mmc.components : [];
      if (components.length) {
        const minecraft = components.find((component) => component.uid === "net.minecraft");
        const loaderComponent = components.find((component) => ["net.fabricmc.fabric-loader", "net.minecraftforge", "net.neoforged", "org.quiltmc.quilt-loader"].includes(String(component.uid)));
        const loader = loaderComponent ? String(loaderComponent.uid).includes("fabric") ? "fabric" : String(loaderComponent.uid).includes("neoforged") ? "neoforge" : String(loaderComponent.uid).includes("quilt") ? "quilt" : "forge" : "vanilla";
        const gameVersion = text(minecraft?.version);
        const contents = await sniffContents(root);
        const supported = !!gameVersion && modernVersion(gameVersion) && (loader === "fabric" || loader === "vanilla");
        report.profiles.push({ id: (0, import_node_crypto4.randomUUID)(), name: import_node_path4.default.basename(import_node_path4.default.dirname(root)), gameVersion, loader, loaderVersion: text(loaderComponent?.version), gameDir: root, cacheRoot: root, isolated: true, ...contents, canImport: supported, importReason: supported ? void 0 : "\u6B64\u52A0\u8F7D\u5668\u6682\u4EC5\u652F\u6301\u8BC6\u522B\u548C\u67E5\u770B" });
      } else if (await localPath(root, "mods") || await localPath(root, "saves")) {
        const contents = await sniffContents(root);
        report.profiles.push({ id: (0, import_node_crypto4.randomUUID)(), name: import_node_path4.default.basename(root), loader: "unknown", gameDir: root, cacheRoot: root, isolated: true, ...contents, canImport: false, importReason: "\u53D1\u73B0\u6E38\u620F\u5185\u5BB9\uFF0C\u4F46\u7F3A\u5C11\u53EF\u786E\u8BA4\u7248\u672C\u7684\u542F\u52A8\u914D\u7F6E" });
      }
    }
  }
  const contentCache = /* @__PURE__ */ new Map();
  for (const { root, directory } of candidates.slice(0, 128)) {
    const files = (await import_promises4.default.readdir(directory, { withFileTypes: true })).filter((entry) => entry.isFile() && !entry.isSymbolicLink() && entry.name.endsWith(".json") && !/account|credential|token|session|launcher_profiles/i.test(entry.name));
    let metadata;
    const usual = `${import_node_path4.default.basename(directory)}.json`;
    for (const file of [...files.filter((file2) => file2.name === usual), ...files.filter((file2) => file2.name !== usual)].slice(0, 16)) {
      const data = await readSmallJson(root, "versions", import_node_path4.default.basename(directory), file.name);
      if (data && (data.mainClass || data.inheritsFrom || data.downloads)) {
        metadata = data;
        break;
      }
    }
    if (!metadata) continue;
    const warnings = [];
    const chain = [metadata];
    const visited = /* @__PURE__ */ new Set();
    let parent = text(metadata.inheritsFrom);
    for (let depth = 0; parent && depth < 12; depth++) {
      if (visited.has(parent)) {
        warnings.push("\u7248\u672C\u7EE7\u627F\u5FAA\u73AF\uFF0C\u5DF2\u505C\u6B62\u8FFD\u8E2A");
        break;
      }
      visited.add(parent);
      if (!leafSchema.safeParse(parent).success) {
        warnings.push("\u7248\u672C\u7EE7\u627F\u8DEF\u5F84\u65E0\u6548");
        break;
      }
      const data = await readSmallJson(root, "versions", parent, `${parent}.json`);
      if (!data) {
        warnings.push(`\u7F3A\u5C11\u57FA\u7840\u7248\u672C\u914D\u7F6E ${parent}\uFF0C\u5BFC\u5165\u65F6\u5C06\u4ECE\u5B98\u65B9\u8865\u9F50`);
        break;
      }
      chain.push(data);
      parent = text(data.inheritsFrom);
    }
    let gameVersion = chain.slice().reverse().flatMap((data) => [text(data.clientVersion), text(data.jar), text(data.id)]).find((id) => !!id && VERSION_PATTERN.test(id)) || [...visited].reverse().find((id) => VERSION_PATTERN.test(id));
    if (!gameVersion) {
      const client = await localPath(root, "versions", import_node_path4.default.basename(directory), `${import_node_path4.default.basename(directory)}.jar`);
      if (client?.stat.isFile() && client.stat.size <= 256 * 1024 ** 2) {
        try {
          const metadata2 = archiveText(new import_adm_zip2.default(client.path), "version.json");
          const id = metadata2 && text(JSON.parse(metadata2).id);
          if (id && VERSION_PATTERN.test(id)) gameVersion = id;
        } catch {
          warnings.push("\u65E0\u6CD5\u4ECE\u5BA2\u6237\u7AEF\u8BFB\u53D6\u5185\u7F6E\u7248\u672C\u4FE1\u606F");
        }
      }
    }
    const detected = loaderInfo(chain);
    let gameDir = root;
    const nested = await localPath(root, "versions", import_node_path4.default.basename(directory), ".minecraft");
    if (nested?.stat.isDirectory()) gameDir = nested.path;
    else if ((await Promise.all([...CONTENT_DIRS, "options.txt"].map((name) => localPath(directory, name)))).some(Boolean)) gameDir = directory;
    let contents = contentCache.get(gameDir);
    if (!contents) {
      contents = await sniffContents(gameDir);
      contentCache.set(gameDir, contents);
    }
    const supported = !!gameVersion && modernVersion(gameVersion) && (detected.loader === "fabric" || detected.loader === "vanilla") && identifier.safeParse(gameVersion).success;
    report.profiles.push({ id: (0, import_node_crypto4.randomUUID)(), name: text(metadata.id) || import_node_path4.default.basename(directory), gameVersion, loader: detected.loader, loaderVersion: detected.version, gameDir, cacheRoot: root, versionDir: directory, isolated: gameDir !== root, resources: contents.resources, worlds: contents.worlds, warnings: [...warnings, ...contents.warnings], canImport: supported, importReason: supported ? void 0 : !gameVersion ? "\u65E0\u6CD5\u786E\u8BA4 Minecraft \u57FA\u7840\u7248\u672C" : !modernVersion(gameVersion) ? "\u6B64\u65E7\u7248\u672C\u6682\u4EC5\u652F\u6301\u8BC6\u522B\uFF1B\u5F53\u524D\u5BFC\u5165\u542F\u52A8\u652F\u6301 1.13 \u53CA\u4EE5\u4E0A\u7248\u672C" : "\u6B64\u52A0\u8F7D\u5668\u6682\u4EC5\u652F\u6301\u8BC6\u522B\u548C\u67E5\u770B\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5BFC\u5165\u542F\u52A8" });
  }
  for (const root of /* @__PURE__ */ new Set([...roots, ...directProfiles.map((profile) => profile.directory)])) {
    if (report.profiles.some((profile) => profile.cacheRoot === root || profile.gameDir === root) || (await localPath(root, ".minecraft"))?.stat.isDirectory()) continue;
    if (await localPath(root, "mods") || await localPath(root, "saves")) {
      const contents = await sniffContents(root);
      report.profiles.push({ id: (0, import_node_crypto4.randomUUID)(), name: import_node_path4.default.basename(root), loader: "unknown", gameDir: root, cacheRoot: root, isolated: true, ...contents, canImport: false, importReason: "\u53D1\u73B0\u6E38\u620F\u5185\u5BB9\uFF0C\u4F46\u7F3A\u5C11\u53EF\u786E\u8BA4\u7248\u672C\u7684\u542F\u52A8\u914D\u7F6E" });
    }
  }
  if (!report.profiles.length) report.warnings.push("\u6CA1\u6709\u627E\u5230\u6E38\u620F\u7248\u672C\u3001\u6A21\u7EC4\u6216\u5B58\u6863\u3002\u53EF\u9009\u62E9 .minecraft\u3001versions\u3001\u5177\u4F53\u7248\u672C\u76EE\u5F55\u6216\u6574\u5408\u5305\u5B9E\u4F8B\u76EE\u5F55\u3002");
  return report;
}

// electron/core/local-import.ts
async function seedLocalDownload(item, destinationRoot, seed, signal) {
  if (await exists(item.file) || !item.hash) return false;
  const relative = import_node_path5.default.relative(destinationRoot, item.file);
  const parts = relative.split(import_node_path5.default.sep);
  if (!["versions", "libraries", "assets", "logging"].includes(parts[0])) return false;
  const options = [{ root: seed.cacheRoot, parts }];
  if (parts[0] === "versions" && parts.at(-1)?.endsWith(".jar") && seed.versionDir) options.push({ root: seed.versionDir, parts: [`${import_node_path5.default.basename(seed.versionDir)}.jar`] });
  for (const option of options) {
    signal.throwIfAborted();
    const source = await localPath(option.root, ...option.parts);
    if (!source?.stat.isFile() || item.size && source.stat.size !== item.size) continue;
    if (await hashFile(source.path, item.algorithm || "sha1") !== item.hash.toLowerCase()) continue;
    signal.throwIfAborted();
    await import_promises5.default.mkdir(import_node_path5.default.dirname(item.file), { recursive: true });
    const temp = `${item.file}.${(0, import_node_crypto5.randomUUID)()}.seed`;
    try {
      await import_promises5.default.copyFile(source.path, temp);
      signal.throwIfAborted();
      await import_promises5.default.rename(temp, item.file);
      return true;
    } finally {
      await import_promises5.default.rm(temp, { force: true });
    }
  }
  return false;
}
async function copyLocalContent(profile, destination, context) {
  const root = await import_promises5.default.realpath(profile.gameDir);
  const target = import_node_path5.default.resolve(destination);
  const relativeTarget = import_node_path5.default.relative(root, target);
  if (!relativeTarget || relativeTarget !== ".." && !relativeTarget.startsWith(`..${import_node_path5.default.sep}`) && !import_node_path5.default.isAbsolute(relativeTarget)) throw new Error("\u5BFC\u5165\u76EE\u6807\u4E0D\u80FD\u4F4D\u4E8E\u539F\u6E38\u620F\u76EE\u5F55\u4E2D");
  const plan = [];
  let total = 0;
  let visited = 0;
  const walk = async (relative, depth) => {
    context.signal.throwIfAborted();
    if (depth > 40 || ++visited > 2e5) throw new Error("\u6E38\u620F\u5185\u5BB9\u8D85\u51FA\u5BFC\u5165\u8303\u56F4\uFF0C\u8BF7\u62C6\u5206\u5927\u578B\u76EE\u5F55\u540E\u91CD\u8BD5");
    const candidate = under(root, relative);
    const stat = await import_promises5.default.lstat(candidate);
    if (stat.isSymbolicLink()) throw new Error(`\u5BFC\u5165\u5185\u5BB9\u5305\u542B\u94FE\u63A5\uFF0C\u8BF7\u5148\u79FB\u9664\u94FE\u63A5\uFF1A${relative}`);
    const item = await localPath(root, relative);
    if (!item) throw new Error(`\u6587\u4EF6\u5DF2\u79FB\u52A8\u6216\u4E0D\u80FD\u8BBF\u95EE\uFF1A${relative}`);
    if (stat.isDirectory()) {
      for (const entry of await import_promises5.default.readdir(candidate)) {
        leafSchema.parse(entry);
        await walk(import_node_path5.default.join(relative, entry), depth + 1);
      }
    } else if (stat.isFile() && import_node_path5.default.basename(relative) !== "session.lock") {
      plan.push({ source: candidate, relative, size: stat.size });
      total += stat.size;
    }
  };
  context.update("\u7EDF\u8BA1\u9700\u8981\u590D\u5236\u7684\u6A21\u7EC4\u3001\u914D\u7F6E\u548C\u5B58\u6863", 0.01);
  for (const name of [...CONTENT_DIRS, ...CONTENT_FILES]) {
    try {
      if ((await import_promises5.default.lstat(under(root, name))).isSymbolicLink()) throw new Error(`\u5BFC\u5165\u5185\u5BB9\u5305\u542B\u94FE\u63A5\uFF0C\u8BF7\u5148\u79FB\u9664\u94FE\u63A5\uFF1A${name}`);
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }
    await walk(name, 0);
  }
  await import_promises5.default.mkdir(target, { recursive: true });
  const space = await import_promises5.default.statfs(target);
  if (space.bavail * space.bsize < total + 64 * 1024 ** 2) throw new Error("OLS \u6570\u636E\u76EE\u5F55\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u5C1A\u672A\u590D\u5236\u6E38\u620F\u5185\u5BB9");
  let copied = 0;
  let count = 0;
  for (const file of plan) {
    context.signal.throwIfAborted();
    const current = await localPath(root, file.relative);
    if (!current?.stat.isFile()) throw new Error(`\u590D\u5236\u524D\u6587\u4EF6\u5DF2\u79FB\u52A8\uFF1A${file.relative}`);
    const output = under(target, file.relative);
    await import_promises5.default.mkdir(import_node_path5.default.dirname(output), { recursive: true });
    const temp = `${output}.${(0, import_node_crypto5.randomUUID)()}.import`;
    try {
      await import_promises5.default.copyFile(current.path, temp);
      context.signal.throwIfAborted();
      await import_promises5.default.rename(temp, output);
    } finally {
      await import_promises5.default.rm(temp, { force: true });
    }
    copied += file.size;
    count++;
    context.update(`\u590D\u5236 ${count} / ${plan.length} \xB7 ${file.relative}`, 0.03 + count / Math.max(1, plan.length) * 0.87, copied, total);
  }
  const contents = await sniffContents(target);
  const resources = [];
  const directoryHash = async (directory) => {
    const hash = (0, import_node_crypto5.createHash)("sha512");
    const visit = async (relative) => {
      context.signal.throwIfAborted();
      for (const entry of (await import_promises5.default.readdir(under(directory, relative), { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
        if (entry.isSymbolicLink()) throw new Error("\u590D\u5236\u76EE\u5F55\u51FA\u73B0\u94FE\u63A5\uFF0C\u5DF2\u505C\u6B62\u5BFC\u5165");
        const child = import_node_path5.default.join(relative, entry.name);
        if (entry.isDirectory()) await visit(child);
        else if (entry.isFile()) hash.update(`${child}\0${await hashFile(under(directory, child), "sha512")}\0`);
      }
    };
    await visit("");
    return hash.digest("hex");
  };
  for (const item of contents.resources) {
    context.signal.throwIfAborted();
    const dir = { mod: "mods", shader: "shaderpacks", resourcepack: "resourcepacks" }[item.kind];
    const hash = item.directory ? await directoryHash(under(target, dir, item.filename)) : await hashFile(under(target, dir, item.filename), "sha512");
    const filename = item.enabled ? item.filename : item.filename.replace(/\.(disabled|disable|old)$/i, "");
    if (!item.enabled && item.filename !== `${filename}.disabled`) {
      if (await exists(under(target, dir, `${filename}.disabled`))) throw new Error(`\u6709\u591A\u4E2A\u540C\u540D\u505C\u7528\u8D44\u6E90\uFF0C\u8BF7\u5728\u539F\u76EE\u5F55\u6574\u7406\u540E\u91CD\u65B0\u5BFC\u5165\uFF1A${filename}`);
      await import_promises5.default.rename(under(target, dir, item.filename), under(target, dir, `${filename}.disabled`));
    }
    resources.push({ projectId: `local-${(0, import_node_crypto5.createHash)("sha256").update(`${dir}/${filename}`).digest("hex").slice(0, 24)}`, versionId: `local-${hash.slice(0, 24)}`, name: item.name, filename, kind: item.kind, sha512: hash, enabled: item.enabled, source: "local", modId: item.modId, displayVersion: item.version, directory: item.directory });
  }
  context.update("\u672C\u5730\u6E38\u620F\u5185\u5BB9\u5DF2\u590D\u5236\uFF0C\u51C6\u5907\u6821\u9A8C\u8FD0\u884C\u6587\u4EF6", 1);
  return resources;
}
function canRepairImported(instance) {
  if (instance.importState === "copying" || instance.importState === "failed") throw new Error("\u672C\u5730\u5185\u5BB9\u5C1A\u672A\u590D\u5236\u5B8C\u6574\uFF0C\u8BF7\u5728\u4E0B\u8F7D\u7BA1\u7406\u91CD\u8BD5\u539F\u5BFC\u5165\u4EFB\u52A1\uFF1B\u91CD\u65B0\u6253\u5F00\u542F\u52A8\u5668\u540E\u53EF\u91CD\u65B0\u626B\u63CF\u5E76\u5BFC\u5165");
}

// electron/core/minecraft.ts
var exec = (0, import_node_util.promisify)(import_node_child_process.execFile);
var MANIFEST = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";
function allowed(rules, features = {}, platform = "windows", arch = "x86_64") {
  if (!rules?.length) return true;
  let result = false;
  for (const rule of rules) {
    if (rule.os?.name && rule.os.name !== platform) continue;
    if (rule.os?.arch && rule.os.arch !== arch) continue;
    if (rule.os?.version && !new RegExp(rule.os.version).test(process.getSystemVersion?.() || "10.0")) continue;
    if (rule.features && !Object.entries(rule.features).every(([key, value]) => !!features[key] === value)) continue;
    result = rule.action === "allow";
  }
  return result;
}
function expandArguments(args, variables, features) {
  return args.flatMap((arg) => typeof arg === "string" ? [arg] : allowed(arg.rules, features) ? typeof arg.value === "string" ? [arg.value] : arg.value : []).map((arg) => arg.replace(/\$\{([^}]+)\}/g, (_, key) => {
    if (!(key in variables)) throw new Error(`\u6E38\u620F\u53C2\u6570\u4E0D\u53D7\u652F\u6301\uFF1A${key}`);
    return variables[key];
  }));
}
function mavenPath(name) {
  const [coordinate, extension = "jar"] = name.split("@");
  const [group, artifact, version, classifier] = coordinate.split(":");
  if (!group || !artifact || !version || !/^[a-zA-Z0-9_.-]+$/.test(group)) throw new Error("\u65E0\u6548\u7684 Maven \u5750\u6807");
  [artifact, version, extension, ...classifier ? [classifier] : []].forEach((item) => identifier.parse(item));
  return `${group.replace(/\./g, "/")}/${artifact}/${version}/${artifact}-${version}${classifier ? `-${classifier}` : ""}.${extension}`;
}
var Minecraft = class {
  constructor(store, auth) {
    this.store = store;
    this.auth = auth;
  }
  manifest;
  processes = /* @__PURE__ */ new Map();
  lan = /* @__PURE__ */ new Map();
  onExit = () => {
  };
  onWorldClosed = () => {
  };
  lanReady(id) {
    return this.lan.get(id)?.ready || false;
  }
  async versions() {
    this.manifest = await json(MANIFEST);
    return this.manifest.versions.filter((v) => ["release", "snapshot"].includes(v.type)).map(({ id, type, releaseTime }) => ({ id, type, releaseTime }));
  }
  newInstance(name, gameVersion, loader, loaderVersion) {
    identifier.parse(gameVersion);
    if (loaderVersion) identifier.parse(loaderVersion);
    return { id: (0, import_node_crypto6.randomUUID)(), name: name.trim() || `${gameVersion} ${loader === "fabric" ? "Fabric" : "\u539F\u7248"}`, gameVersion, loader, loaderVersion, versionId: gameVersion, installed: false, resources: [], createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  }
  async install(instance, context, localSeed = instance.importCache) {
    const fetchFile = async (item, progress) => {
      if (localSeed) await seedLocalDownload(item, this.store.root, localSeed, context.signal);
      await download(item, context.signal, progress);
    };
    context.signal.throwIfAborted();
    context.update("\u83B7\u53D6\u5B98\u65B9\u7248\u672C\u4FE1\u606F", 0.01);
    if (!this.manifest) await this.versions();
    const entry = this.manifest.versions.find((v) => v.id === instance.gameVersion);
    if (!entry) throw new Error("\u5B98\u65B9\u7248\u672C\u5217\u8868\u4E2D\u6CA1\u6709\u6B64\u7248\u672C");
    const baseFile = this.store.file("versions", instance.gameVersion, `${instance.gameVersion}.json`);
    await fetchFile({ url: entry.url, file: baseFile, hash: entry.sha1 });
    const base = await readJson(baseFile);
    if (!base.arguments) throw new Error("\u9996\u7248\u652F\u6301\u4F7F\u7528\u73B0\u4EE3\u542F\u52A8\u53C2\u6570\u7684 Minecraft 1.13 \u53CA\u4EE5\u4E0A\u7248\u672C");
    let meta = base;
    if (instance.loader === "fabric") {
      context.update("\u5B89\u88C5 Fabric \u52A0\u8F7D\u5668", 0.03);
      if (!instance.loaderVersion) {
        const loaders = await json(`https://meta.fabricmc.net/v2/versions/loader/${encodeURIComponent(instance.gameVersion)}`, {}, context.signal);
        const loader = loaders.find((v) => v.loader.stable) || loaders[0];
        if (!loader) throw new Error("\u8FD9\u4E2A Minecraft \u7248\u672C\u6682\u65F6\u6CA1\u6709 Fabric \u52A0\u8F7D\u5668");
        instance.loaderVersion = identifier.parse(loader.loader.version);
      }
      const profile = await json(`https://meta.fabricmc.net/v2/versions/loader/${encodeURIComponent(instance.gameVersion)}/${encodeURIComponent(instance.loaderVersion)}/profile/json`, {}, context.signal);
      const key = (name) => {
        const p = name.split(":");
        return `${p[0]}:${p[1]}:${p[3] || ""}`;
      };
      const overrides = new Set(profile.libraries.map((l) => key(l.name)));
      meta = { ...base, id: identifier.parse(profile.id), mainClass: profile.mainClass, libraries: [...base.libraries.filter((l) => !overrides.has(key(l.name))), ...profile.libraries], arguments: { game: [...base.arguments.game, ...profile.arguments.game || []], jvm: [...base.arguments.jvm, ...profile.arguments.jvm || []] } };
    }
    instance.versionId = meta.id;
    const downloads = [{ url: base.downloads.client.url, file: this.store.file("versions", instance.gameVersion, `${instance.gameVersion}.jar`), hash: base.downloads.client.sha1, size: base.downloads.client.size }];
    const nativeJars = [];
    for (const library of meta.libraries.filter((lib) => allowed(lib.rules))) {
      const artifact = library.downloads?.artifact;
      if (artifact) {
        const file = this.store.file("libraries", artifact.path);
        downloads.push({ url: artifact.url, file, hash: artifact.sha1, size: artifact.size });
        if (library.name.split(":")[3] === "natives-windows") nativeJars.push(file);
      } else if (!library.natives) {
        const relative = mavenPath(library.name);
        const url = `${library.url || "https://libraries.minecraft.net/"}${relative}`;
        const response = await request(`${url}.sha1`, {}, context.signal);
        if (!response.ok) throw new Error(`\u65E0\u6CD5\u8BFB\u53D6\u4F9D\u8D56\u6821\u9A8C\uFF1A${library.name}`);
        const hash = (await response.text()).trim().split(/\s/)[0];
        if (!/^[a-f0-9]{40}$/i.test(hash)) throw new Error("\u4F9D\u8D56\u6821\u9A8C\u503C\u65E0\u6548");
        downloads.push({ url, file: this.store.file("libraries", relative), hash });
      }
      const classifier = library.natives?.windows?.replace("${arch}", "64");
      const native = classifier && library.downloads?.classifiers?.[classifier];
      if (native) {
        const file = this.store.file("libraries", native.path);
        downloads.push({ url: native.url, file, hash: native.sha1, size: native.size });
        nativeJars.push(file);
      }
    }
    if (base.logging?.client) {
      const file = base.logging.client.file;
      downloads.push({ url: file.url, file: this.store.file("logging", identifier.parse(file.id)), hash: file.sha1, size: file.size });
    }
    const indexPath = this.store.file("assets", "indexes", `${identifier.parse(base.assetIndex.id)}.json`);
    await fetchFile({ url: base.assetIndex.url, file: indexPath, hash: base.assetIndex.sha1, size: base.assetIndex.size });
    const assets = await readJson(indexPath);
    if (assets.virtual || assets.map_to_resources) throw new Error("\u8BE5\u65E7\u7248\u672C\u7684\u8D44\u6E90\u5E03\u5C40\u6682\u4E0D\u652F\u6301\uFF0C\u8BF7\u9009\u62E9\u73B0\u4EE3\u7248\u672C");
    for (const asset of Object.values(assets.objects)) {
      if (!/^[a-f0-9]{40}$/.test(asset.hash)) throw new Error("\u8D44\u6E90\u7D22\u5F15\u635F\u574F");
      downloads.push({ url: `https://resources.download.minecraft.net/${asset.hash.slice(0, 2)}/${asset.hash}`, file: this.store.file("assets", "objects", asset.hash.slice(0, 2), asset.hash), hash: asset.hash, size: asset.size });
    }
    const unique = [...new Map(downloads.map((item) => [item.file, item])).values()];
    let completed = 0;
    const transferred = /* @__PURE__ */ new Map();
    const totalBytes = unique.reduce((sum, item) => sum + (item.size || 0), 0);
    await parallel(unique, this.store.state.settings.concurrency, async (item) => {
      await fetchFile(item, (bytes) => {
        transferred.set(item.file, bytes);
      });
      completed++;
      context.update(`\u6E38\u620F\u6587\u4EF6 ${completed} / ${unique.length} \xB7 ${import_node_path6.default.basename(item.file)}`, 0.05 + completed / unique.length * 0.78, [...transferred.values()].reduce((a, b) => a + b, 0), totalBytes);
    });
    context.update("\u51C6\u5907\u539F\u751F\u8FD0\u884C\u5E93", 0.85);
    for (const file of new Set(nativeJars)) {
      context.signal.throwIfAborted();
      await extractZip(file, this.store.file("natives", identifier.parse(meta.id)), true);
    }
    await atomicWrite(this.store.file("versions", identifier.parse(meta.id), "resolved.json"), JSON.stringify(meta));
    for (const directory of ["", "mods", "shaderpacks", "resourcepacks", "saves", "logs"]) await import_promises6.default.mkdir(under(this.store.instanceDir(instance.id), directory), { recursive: true });
    await this.ensureJava(meta.javaVersion?.majorVersion || 8, context);
    context.signal.throwIfAborted();
    instance.installed = true;
    await this.store.save();
    context.update("\u6E38\u620F\u5B89\u88C5\u5B8C\u6210", 1);
  }
  async ensureJava(required, context) {
    const candidates = /* @__PURE__ */ new Set();
    if (this.store.state.settings.javaPath) candidates.add(this.store.state.settings.javaPath);
    const runtimeRoot = this.store.file("runtimes", `java-${required}`);
    const scan = async (dir) => {
      try {
        for (const item of await import_promises6.default.readdir(dir, { withFileTypes: true })) if (item.isDirectory()) candidates.add(import_node_path6.default.join(dir, item.name, "bin", "java.exe"));
      } catch {
      }
    };
    await scan(runtimeRoot);
    if (process.env.JAVA_HOME) candidates.add(import_node_path6.default.join(process.env.JAVA_HOME, "bin", "java.exe"));
    for (const dir of ["Microsoft", "Eclipse Adoptium", "Java", "Zulu"]) await scan(import_node_path6.default.join(process.env.ProgramFiles || "C:\\Program Files", dir));
    candidates.add("java");
    for (const candidate of candidates) {
      try {
        const result = await exec(candidate, ["-version"], { windowsHide: true, timeout: 7e3 });
        const version = `${result.stderr}${result.stdout}`.match(/version "(?:1\.)?(\d+)/)?.[1];
        if (Number(version) === required) return candidate;
      } catch {
      }
    }
    if (!this.store.state.settings.autoJava) throw new Error(`\u6CA1\u6709\u627E\u5230 Java ${required}\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u5F00\u542F\u81EA\u52A8\u4E0B\u8F7D\u6216\u9009\u62E9\u5BF9\u5E94 Java`);
    context.update(`\u4E0B\u8F7D Java ${required} \u8FD0\u884C\u73AF\u5883`, 0.9);
    const releases = await json(`https://api.adoptium.net/v3/assets/latest/${required}/hotspot?architecture=x64&image_type=jre&os=windows`, {}, context.signal);
    const packageInfo = releases[0]?.binary.package;
    if (!packageInfo) throw new Error(`\u6682\u672A\u627E\u5230 Java ${required} Windows \u8FD0\u884C\u65F6`);
    const zip = this.store.file("cache", `java-${required}.zip`);
    await download({ url: packageInfo.link, file: zip, hash: packageInfo.checksum, algorithm: "sha256", size: packageInfo.size }, context.signal, (bytes, total) => context.update(`\u4E0B\u8F7D Java ${required}`, 0.9 + (total ? bytes / total : 0) * 0.07, bytes, total));
    await extractZip(zip, runtimeRoot);
    await scan(runtimeRoot);
    for (const candidate of candidates) if (candidate.startsWith(runtimeRoot) && await exists(candidate)) return candidate;
    throw new Error("Java \u89E3\u538B\u540E\u672A\u627E\u5230\u8FD0\u884C\u7A0B\u5E8F");
  }
  async worlds(id) {
    this.store.instance(id);
    const directory = under(this.store.instanceDir(id), "saves");
    const result = [];
    try {
      for (const item of await import_promises6.default.readdir(directory, { withFileTypes: true })) if (item.isDirectory() && !item.isSymbolicLink() && await exists(under(directory, item.name, "level.dat"))) result.push(await readWorld(under(directory, item.name, "level.dat"), item.name));
    } catch {
    }
    return result;
  }
  async launch(id, context, options = {}) {
    const instance = this.store.instance(id);
    if (this.processes.has(id)) throw new Error("\u8FD9\u4E2A\u6E38\u620F\u5B9E\u4F8B\u5DF2\u5728\u8FD0\u884C");
    if (!instance.installed) throw new Error("\u6E38\u620F\u5C1A\u672A\u5B89\u88C5\u5B8C\u6210\uFF0C\u8BF7\u5148\u4FEE\u590D\u6216\u5B8C\u6210\u4E0B\u8F7D");
    const session = await this.auth.session();
    const meta = await readJson(this.store.file("versions", identifier.parse(instance.versionId), "resolved.json"));
    const java = await this.ensureJava(meta.javaVersion?.majorVersion || 8, context);
    const gameDir = this.store.instanceDir(id);
    const classpath = meta.libraries.filter((lib) => allowed(lib.rules)).filter((lib) => lib.downloads?.artifact || !lib.natives).map((lib) => this.store.file("libraries", lib.downloads?.artifact?.path || mavenPath(lib.name)));
    classpath.push(this.store.file("versions", instance.gameVersion, `${instance.gameVersion}.jar`));
    const variables = {
      auth_player_name: session.name,
      version_name: instance.versionId,
      game_directory: gameDir,
      assets_root: this.store.file("assets"),
      assets_index_name: meta.assetIndex.id,
      auth_uuid: session.id,
      auth_access_token: session.accessToken,
      clientid: session.clientId,
      auth_xuid: "",
      user_type: "msa",
      version_type: "OLS",
      resolution_width: "1280",
      resolution_height: "720",
      natives_directory: this.store.file("natives", instance.versionId),
      launcher_name: "OLS",
      launcher_version: "0.4.0",
      classpath: classpath.join(import_node_path6.default.delimiter),
      library_directory: this.store.file("libraries"),
      classpath_separator: import_node_path6.default.delimiter,
      user_properties: "{}",
      quickPlayPath: import_node_path6.default.join(gameDir, "quickplay.json"),
      quickPlaySingleplayer: options.world || "",
      quickPlayMultiplayer: options.address || "",
      quickPlayRealms: ""
    };
    const features = { has_custom_resolution: true, has_quick_plays_support: false, is_quick_play_singleplayer: false, is_quick_play_multiplayer: false, is_demo_user: false };
    const jvm = expandArguments(meta.arguments.jvm, variables, features);
    const game = expandArguments(meta.arguments.game, variables, features);
    if (options.world || options.address) {
      if (!JSON.stringify(meta.arguments).includes("quickPlay")) throw new Error("\u6B64\u7248\u672C\u4E0D\u652F\u6301\u81EA\u52A8\u8FDB\u5165\u4E16\u754C\uFF0C\u8BF7\u4F7F\u7528 Minecraft 1.20 \u53CA\u4EE5\u4E0A\u7248\u672C");
      if (options.world) {
        leafSchema.parse(options.world);
        if (!(await this.worlds(id)).some((world) => world.folder === options.world)) throw new Error("\u8FD9\u4E2A\u4E16\u754C\u4E0D\u5B58\u5728");
        game.push("--quickPlaySingleplayer", options.world);
      }
      if (options.address) game.push("--quickPlayMultiplayer", options.address);
    }
    if (meta.logging?.client) jvm.push(meta.logging.client.argument.replace("${path}", this.store.file("logging", meta.logging.client.file.id)));
    const args = [`-Xmx${this.store.state.settings.memoryMb}M`, "-Xms512M", ...jvm, meta.mainClass, ...game];
    context.signal.throwIfAborted();
    const env = { ...process.env };
    delete env.NATFRP_TOKEN;
    delete env.NATFRP_TARGET;
    const nonce = (0, import_node_crypto6.randomUUID)();
    if (options.lanPort) {
      env.QINGLAN_LAN_PORT = String(options.lanPort);
      env.QINGLAN_ROOM_NONCE = nonce;
      this.lan.set(id, { nonce, port: options.lanPort, ready: false });
    } else {
      delete env.QINGLAN_LAN_PORT;
      delete env.QINGLAN_ROOM_NONCE;
    }
    const child = (0, import_node_child_process.spawn)(java, args, { cwd: gameDir, env, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
    await new Promise((resolve, reject) => {
      child.once("spawn", resolve);
      child.once("error", reject);
    });
    this.processes.set(id, child);
    this.store.state.running = [...this.processes.keys()];
    let partial = "";
    const log = (chunk) => {
      partial += chunk.toString();
      const lines = partial.split(/\r?\n/);
      partial = lines.pop().slice(-4e3);
      for (const line of lines) {
        if (line.includes(`QINGLAN_LAN_READY ${nonce} ${options.lanPort}`)) {
          const lan = this.lan.get(id);
          if (lan) lan.ready = true;
        }
        if (line.includes(`QINGLAN_LAN_CLOSED ${nonce}`)) {
          this.lan.delete(id);
          this.onWorldClosed(id);
        }
        if (/ERROR|Exception|QINGLAN|Started serving|OpenAL|Backend library/i.test(line)) this.store.log(line.replaceAll(session.accessToken, "[\u51ED\u8BC1\u5DF2\u9690\u85CF]").slice(0, 400));
      }
    };
    child.stdout?.on("data", log);
    child.stderr?.on("data", log);
    child.once("exit", (code) => {
      this.processes.delete(id);
      this.lan.delete(id);
      this.store.state.running = [...this.processes.keys()];
      this.store.log(`${instance.name} \u5DF2\u9000\u51FA${code ? `\uFF08\u4EE3\u7801 ${code}\uFF09` : ""}`);
      this.onExit(id);
    });
    child.on("error", () => this.store.log(`${instance.name} \u6E38\u620F\u8FDB\u7A0B\u53D1\u751F\u9519\u8BEF`));
    instance.lastPlayed = (/* @__PURE__ */ new Date()).toISOString();
    await this.store.save();
    context.update("\u6E38\u620F\u5DF2\u542F\u52A8", 1);
  }
};

// electron/core/modrinth.ts
var import_promises7 = __toESM(require("node:fs/promises"), 1);
var import_node_crypto7 = require("node:crypto");
var API = "https://api.modrinth.com/v2";
var resourceDirectory = { mod: "mods", shader: "shaderpacks", resourcepack: "resourcepacks" };
var Modrinth = class {
  constructor(store) {
    this.store = store;
  }
  async search(input) {
    const facets = [[`project_type:${input.kind}`]];
    if (input.instanceId) {
      const instance = this.store.instance(input.instanceId);
      facets.push([`versions:${instance.gameVersion}`]);
      if (input.kind === "mod" && instance.loader !== "vanilla") facets.push([`categories:${instance.loader}`]);
    }
    const params = new URLSearchParams({ query: input.query, facets: JSON.stringify(facets), limit: "12", offset: String(input.offset || 0), index: input.sort || "downloads" });
    return json(`${API}/search?${params}`);
  }
  async install(instance, projectId, kind, context, versionId) {
    if (this.store.state.running.includes(instance.id)) throw new Error("\u8BF7\u5148\u9000\u51FA\u8BE5\u6E38\u620F\uFF0C\u518D\u4FEE\u6539\u8D44\u6E90");
    if (!instance.installed) throw new Error("\u8BF7\u5148\u5B8C\u6210\u6E38\u620F\u5B89\u88C5");
    if ((kind === "mod" || kind === "shader") && instance.loader !== "fabric") throw new Error("\u6A21\u7EC4\u548C\u5149\u5F71\u9700\u8981 Fabric \u5B9E\u4F8B\uFF0C\u8BF7\u5728\u6E38\u620F\u5E93\u65B0\u5EFA Fabric \u6E38\u620F");
    const plan = /* @__PURE__ */ new Map();
    const existing = new Map(instance.resources.map((resource) => [resource.projectId, resource]));
    const visiting = /* @__PURE__ */ new Set();
    const resolve = async (project, resourceKind, exact) => {
      context.signal.throwIfAborted();
      if (project) identifier.parse(project);
      if (exact) identifier.parse(exact);
      let version;
      if (exact) version = await json(`${API}/version/${encodeURIComponent(exact)}`, {}, context.signal);
      else {
        const loaders = resourceKind === "mod" ? ["fabric"] : resourceKind === "shader" ? ["iris"] : ["minecraft"];
        const params = new URLSearchParams({ game_versions: JSON.stringify([instance.gameVersion]), loaders: JSON.stringify(loaders), include_changelog: "false" });
        const versions = await json(`${API}/project/${encodeURIComponent(project)}/version?${params}`, {}, context.signal);
        if (!versions.length) throw new Error(`\u672A\u627E\u5230\u9002\u5408 ${instance.gameVersion} \u7684\u8D44\u6E90\uFF1A${project}`);
        version = versions[0];
      }
      if (!version.game_versions.includes(instance.gameVersion) || resourceKind === "mod" && !version.loaders.includes("fabric")) throw new Error(`\u8D44\u6E90 ${version.name} \u4E0E\u6E38\u620F\u7248\u672C\u6216\u52A0\u8F7D\u5668\u4E0D\u517C\u5BB9`);
      if (project && project.length === 8 && version.project_id !== project) throw new Error("\u8D44\u6E90\u7248\u672C\u5F52\u5C5E\u4E0D\u5339\u914D");
      const previous = plan.get(version.project_id);
      if (previous) {
        if (previous.version.id !== version.id) throw new Error(`\u6A21\u7EC4\u4F9D\u8D56\u7248\u672C\u51B2\u7A81\uFF1A${version.name}`);
        return;
      }
      if (visiting.has(version.project_id)) return;
      visiting.add(version.project_id);
      const projectInfo = await json(`${API}/project/${version.project_id}`, {}, context.signal);
      if (projectInfo.project_type !== resourceKind) throw new Error("\u8D44\u6E90\u7C7B\u578B\u4E0D\u5339\u914D");
      plan.set(version.project_id, { version, kind: resourceKind, name: projectInfo.title });
      for (const dependency of version.dependencies) {
        if (dependency.dependency_type === "required") {
          if (!dependency.project_id && !dependency.version_id) throw new Error(`\u9700\u8981\u624B\u52A8\u5B89\u88C5\u7684\u4F9D\u8D56\uFF1A${dependency.file_name || "\u672A\u77E5\u6587\u4EF6"}`);
          await resolve(dependency.project_id, "mod", dependency.version_id);
        }
      }
    };
    context.update("\u5206\u6790\u517C\u5BB9\u7248\u672C\u4E0E\u5FC5\u8981\u4F9D\u8D56", 0.02);
    await resolve(projectId, kind, versionId);
    if (kind === "shader") await resolve("iris", "mod");
    for (const { version } of plan.values()) for (const dependency of version.dependencies.filter((d) => d.dependency_type === "incompatible")) {
      if (dependency.project_id && (plan.has(dependency.project_id) || existing.get(dependency.project_id)?.enabled)) throw new Error(`\u68C0\u6D4B\u5230\u4E0D\u517C\u5BB9\u7684\u5DF2\u5B89\u88C5\u6A21\u7EC4\uFF1A${dependency.project_id}`);
      if (dependency.version_id && [...instance.resources, ...[...plan.values()].map((p) => ({ versionId: p.version.id }))].some((r) => r.versionId === dependency.version_id)) throw new Error("\u68C0\u6D4B\u5230\u4E0D\u517C\u5BB9\u7684\u6A21\u7EC4\u7248\u672C");
    }
    const staged = [];
    let count = 0;
    for (const { version, kind: type, name } of plan.values()) {
      const file = version.files.find((file2) => file2.primary) || version.files[0];
      if (!file || !/^[a-f0-9]{128}$/i.test(file.hashes.sha512)) throw new Error("\u8D44\u6E90\u7F3A\u5C11\u53EF\u9760\u7684\u6587\u4EF6\u6821\u9A8C\u503C");
      leafSchema.parse(file.filename);
      if (!file.filename.toLowerCase().endsWith(type === "mod" ? ".jar" : ".zip")) throw new Error("\u8D44\u6E90\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301");
      const target = this.store.file("cache", "modrinth", `${identifier.parse(version.id)}-${file.filename}`);
      await download({ url: file.url, file: target, hash: file.hashes.sha512, algorithm: "sha512", size: file.size }, context.signal, (bytes, total) => context.update(`\u4E0B\u8F7D ${name}`, 0.05 + (count + (total ? bytes / total : 0)) / plan.size * 0.8, bytes, total));
      const metadata = type === "mod" ? await sniffResource(this.store.file("cache"), "modrinth", `${version.id}-${file.filename}`, type) : void 0;
      staged.push({ file: target, resource: { projectId: version.project_id, versionId: version.id, name, filename: file.filename, kind: type, sha512: file.hashes.sha512, enabled: true, source: "modrinth", modId: metadata?.modId, displayVersion: metadata?.version } });
      count++;
    }
    context.signal.throwIfAborted();
    context.update("\u5E94\u7528\u8D44\u6E90\u6587\u4EF6", 0.95);
    const backupDirectory = this.store.file("backups", instance.id, (0, import_node_crypto7.randomUUID)());
    const moves = [];
    const created = [];
    const previousResources = [...instance.resources];
    try {
      for (const { file, resource } of staged) {
        const dir = under(this.store.instanceDir(instance.id), resourceDirectory[resource.kind]);
        await import_promises7.default.mkdir(dir, { recursive: true });
        const old = existing.get(resource.projectId) || instance.resources.find((item) => item.source === "local" && item.kind === resource.kind && (item.filename === resource.filename || !!resource.modId && item.modId === resource.modId));
        const target = under(dir, resource.filename);
        const backupCandidates = /* @__PURE__ */ new Set([target, ...old ? [under(dir, `${leafSchema.parse(old.filename)}${old.enabled ? "" : ".disabled"}`)] : []]);
        for (const from of backupCandidates) if (await exists(from)) {
          await import_promises7.default.mkdir(backupDirectory, { recursive: true });
          const backup = under(backupDirectory, `${moves.length}-${(0, import_node_crypto7.randomUUID)()}`);
          await import_promises7.default.rename(from, backup);
          moves.push({ from, backup });
        }
        await import_promises7.default.copyFile(file, target);
        created.push(target);
        instance.resources = [...instance.resources.filter((r) => r.projectId !== resource.projectId && r.projectId !== old?.projectId), resource];
      }
      await this.store.save();
    } catch (error) {
      instance.resources = previousResources;
      for (const file of created) await import_promises7.default.rm(file, { force: true });
      for (const move of moves.reverse()) await import_promises7.default.rename(move.backup, move.from);
      throw error;
    }
    context.update("\u8D44\u6E90\u5DF2\u5B89\u88C5", 1);
  }
  async toggle(instanceId, projectId) {
    if (this.store.state.running.includes(instanceId)) throw new Error("\u8BF7\u5148\u9000\u51FA\u6E38\u620F\uFF0C\u518D\u542F\u7528\u6216\u505C\u7528\u6A21\u7EC4");
    const instance = this.store.instance(instanceId);
    const resource = instance.resources.find((r) => r.projectId === projectId);
    if (!resource) throw new Error("\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u8D44\u6E90");
    const dir = under(this.store.instanceDir(instanceId), resourceDirectory[resource.kind]);
    const filename = leafSchema.parse(resource.filename);
    const from = under(dir, `${filename}${resource.enabled ? "" : ".disabled"}`);
    const to = under(dir, `${filename}${resource.enabled ? ".disabled" : ""}`);
    if (await exists(to)) throw new Error("\u76EE\u6807\u6587\u4EF6\u5DF2\u5B58\u5728\uFF0C\u8BF7\u5148\u5728\u6587\u4EF6\u5939\u4E2D\u68C0\u67E5\u91CD\u590D\u6587\u4EF6");
    await import_promises7.default.rename(from, to);
    resource.enabled = !resource.enabled;
    try {
      await this.store.save();
    } catch (error) {
      resource.enabled = !resource.enabled;
      await import_promises7.default.rename(to, from);
      throw error;
    }
  }
};

// electron/core/sakura.ts
var import_node_child_process2 = require("node:child_process");
var import_promises8 = __toESM(require("node:fs/promises"), 1);
var API2 = "https://api.natfrp.com/v4";
var Sakura = class {
  constructor(store) {
    this.store = store;
  }
  process;
  onExit = () => {
  };
  token() {
    const token = this.store.secret("sakura");
    if (!token) throw new Error("\u8BF7\u5148\u5728\u6A31\u82B1\u8D26\u6237\u9875\u7ED1\u5B9A\u8BBF\u95EE\u5BC6\u94A5");
    return token;
  }
  call(route, method = "GET", body, token = this.token()) {
    return json(`${API2}${route}`, { method, headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: body === void 0 ? void 0 : JSON.stringify(body) });
  }
  async saveToken(token) {
    const account = await this.call("/user/info", "GET", void 0, token);
    if (account.ban) throw new Error(`${account.ban.title}\uFF1A${account.ban.reason}`);
    await this.store.setSecret("sakura", token);
    this.store.state.sakuraConfigured = true;
    this.store.changed();
  }
  async logout() {
    this.stop();
    await this.store.setSecret("sakura");
    this.store.state.sakuraConfigured = false;
    this.store.changed();
  }
  async account() {
    const raw = await this.call("/user/info");
    const account = { id: raw.id, name: raw.name, speed: raw.speed, tunnels: raw.tunnels, realname: raw.realname, group: raw.group, traffic: raw.traffic, sign: raw.sign, ban: raw.ban };
    if (account.ban) throw new Error(`${account.ban.title}\uFF1A${account.ban.reason}`);
    const plans = await this.call("/user/data_plans?status=valid");
    return { account, plans };
  }
  async nodes() {
    const raw = await this.call("/nodes");
    return Object.entries(raw).map(([id, node]) => ({ ...node, id: Number(id), available: !!(node.flag & 4) && !(node.flag & 512) && !(node.flag & 256) }));
  }
  tunnels() {
    return this.call("/tunnels");
  }
  async prepare(instanceId, nodeId, port, tunnelId) {
    const nodes = await this.nodes();
    const node = nodes.find((n) => n.id === nodeId);
    if (!node || !node.available) throw new Error("\u6B64\u8282\u70B9\u5F53\u524D\u4E0D\u53EF\u7528\uFF0C\u6216\u8981\u6C42\u989D\u5916\u8BBF\u95EE\u8BA4\u8BC1\uFF0C\u8BF7\u9009\u62E9\u53EF\u7528\u8282\u70B9");
    const note = `OLS:${instanceId}`;
    let tunnel = (await this.tunnels()).find((t) => tunnelId ? t.id === tunnelId : [note, `Qinglan:${instanceId}`].includes(t.note) && t.node === nodeId && t.type === "tcp");
    if (tunnelId && !tunnel) throw new Error("\u6307\u5B9A\u96A7\u9053\u4E0D\u5B58\u5728");
    if (tunnel && (tunnel.type !== "tcp" || tunnel.node !== nodeId || tunnel.status !== 0)) throw new Error("\u8BF7\u9009\u62E9\u76F8\u540C\u8282\u70B9\u7684\u6B63\u5E38 TCP \u96A7\u9053");
    if (tunnel) {
      if (tunnel.online) throw new Error("\u8FD9\u4E2A\u96A7\u9053\u5DF2\u5728\u5176\u4ED6\u5BA2\u6237\u7AEF\u8FD0\u884C\uFF0C\u8BF7\u5148\u505C\u6B62\u6216\u9009\u62E9\u65B0\u96A7\u9053");
      await this.call("/tunnel/edit", "POST", { id: tunnel.id, local_ip: "127.0.0.1", local_port: port, extra: "minecraft_detect = disabled" });
    } else {
      const created = await this.call("/tunnels", "POST", { name: `ols_${instanceId.slice(0, 8)}`, type: "tcp", node: nodeId, local_ip: "127.0.0.1", local_port: port, note, extra: "minecraft_detect = disabled" });
      tunnel = (await this.tunnels()).find((t) => t.id === created.id);
      if (!tunnel) throw new Error("\u96A7\u9053\u5DF2\u521B\u5EFA\uFF0C\u4F46\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u8BF7\u5237\u65B0\u8D26\u6237\u9875\u540E\u91CD\u8BD5");
    }
    const remotePort = Number(tunnel.remote);
    if (!Number.isInteger(remotePort) || remotePort < 1 || remotePort > 65535) throw new Error("\u6A31\u82B1\u8FD4\u56DE\u7684\u8FDC\u7A0B\u7AEF\u53E3\u4E0D\u6B63\u786E");
    return { tunnelId: tunnel.id, host: node.host, port: remotePort };
  }
  async start(tunnelId, context) {
    if (this.process) throw new Error("\u5DF2\u6709\u7A7F\u900F\u8FDB\u7A0B\u6B63\u5728\u8FD0\u884C");
    context.update("\u51C6\u5907\u6A31\u82B1\u7A7F\u900F\u5BA2\u6237\u7AEF", 0.55);
    const clients = await json(`${API2}/system/clients?download=true`, {}, context.signal);
    const entry = clients.frpc.archs.windows_amd64;
    if (!entry || !/^[a-f0-9]{32}$/i.test(entry.hash)) throw new Error("\u5B98\u65B9 frpc \u4E0B\u8F7D\u4FE1\u606F\u65E0\u6548");
    const executable = this.store.file("tools", `frpc-${entry.hash}.exe`);
    await download({ url: entry.url, file: executable, hash: entry.hash, algorithm: "md5", size: entry.size }, context.signal, (bytes, total) => context.update("\u4E0B\u8F7D\u6A31\u82B1\u7A7F\u900F\u5BA2\u6237\u7AEF", 0.55 + (total ? bytes / total : 0) * 0.1, bytes, total));
    context.signal.throwIfAborted();
    const token = this.token();
    const cwd = this.store.file("frpc");
    await import_promises8.default.mkdir(cwd, { recursive: true });
    const child = (0, import_node_child_process2.spawn)(executable, ["--disable_log_color", "--no_check_update"], { cwd, env: { ...process.env, NATFRP_TOKEN: token, NATFRP_TARGET: String(tunnelId) }, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
    this.process = child;
    let output = "";
    const receive = (chunk) => {
      output += chunk.toString().replaceAll(token, "[\u51ED\u8BC1\u5DF2\u9690\u85CF]");
      if (output.length > 8e3) output = output.slice(-8e3);
    };
    child.stdout?.on("data", receive);
    child.stderr?.on("data", receive);
    child.once("exit", () => {
      if (this.process === child) {
        this.process = void 0;
        this.onExit();
      }
    });
    try {
      await new Promise((resolve, reject) => {
        child.once("spawn", resolve);
        child.once("error", reject);
      });
      for (let i = 0; i < 30; i++) {
        context.signal.throwIfAborted();
        if (child.exitCode !== null || this.process !== child) throw new Error(`\u6A31\u82B1\u7A7F\u900F\u542F\u52A8\u5931\u8D25\uFF1A${output.slice(-400)}`);
        if ((await this.tunnels()).some((t) => t.id === tunnelId && t.online)) {
          context.update("\u96A7\u9053\u5DF2\u8FDE\u63A5", 0.95);
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      throw new Error(`\u96A7\u9053\u8FDE\u63A5\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u8D26\u6237\u548C\u8282\u70B9\u3002${output.slice(-300)}`);
    } catch (error) {
      this.stop();
      throw error;
    }
  }
  stop() {
    const child = this.process;
    this.process = void 0;
    child?.kill();
  }
  async delete(id) {
    if (this.store.state.room.tunnelId === id && this.store.state.room.state !== "idle") throw new Error("\u8BF7\u5148\u5173\u95ED\u5F53\u524D\u4E16\u754C\uFF0C\u518D\u5220\u9664\u96A7\u9053");
    const result = await this.call("/tunnel/delete", "POST", { ids: String(id) });
    if (!result.deleted.includes(id)) throw new Error("\u96A7\u9053\u672A\u80FD\u5220\u9664\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5");
  }
};

// electron/core/invite.ts
var import_node_zlib2 = require("node:zlib");
var import_node_crypto8 = require("node:crypto");
var inviteSchema = external_exports.object({
  schema: external_exports.union([external_exports.literal(1), external_exports.literal(2)]),
  name: external_exports.string().min(1).max(80),
  host: external_exports.string().min(1).max(253).regex(/^(?=.{1,253}$)[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?$/).refine((v) => !v.includes("..")),
  port: external_exports.number().int().min(1).max(65535),
  gameVersion: identifier,
  loader: external_exports.enum(["vanilla", "fabric"]),
  loaderVersion: identifier.optional(),
  expiresAt: external_exports.number().int().positive(),
  mods: external_exports.array(external_exports.object({ projectId: identifier, versionId: identifier }).strict()).max(200),
  localMods: external_exports.array(external_exports.object({ filename: leafSchema, sha512: external_exports.string().regex(/^[a-f0-9]{128}$/), size: external_exports.number().int().min(0).max(2 ** 40) }).strict()).min(1).max(512).optional()
}).strict().superRefine((value, context) => {
  if (value.schema === 1 && value.localMods || value.schema === 2 && (!value.localMods || value.loader !== "fabric")) context.addIssue({ code: external_exports.ZodIssueCode.custom, message: "\u672C\u5730\u6A21\u7EC4\u623F\u95F4\u9700\u8981\u65B0\u7248\u534F\u8BAE\u4E0EFabric\u73AF\u5883" });
});
function decodeInvite(code, now = Date.now()) {
  if (code.length > 24e3) throw new Error("\u9080\u8BF7\u7801\u8FC7\u957F");
  const match = code.trim().match(/^(?:启源联机\s*)?(QL1\.([A-Za-z0-9_-]+)\.([a-f0-9]{12}))$/);
  if (!match) throw new Error("\u9080\u8BF7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u590D\u5236\u5B8C\u6574\u7684 QL1 \u5F00\u5934\u6587\u672C");
  const expected = (0, import_node_crypto8.createHash)("sha256").update(match[2]).digest("hex").slice(0, 12);
  if (!(0, import_node_crypto8.timingSafeEqual)(Buffer.from(expected), Buffer.from(match[3]))) throw new Error("\u9080\u8BF7\u7801\u4E0D\u5B8C\u6574\u6216\u5DF2\u635F\u574F");
  let data;
  try {
    data = inviteSchema.parse(JSON.parse((0, import_node_zlib2.inflateRawSync)(Buffer.from(match[2], "base64url"), { maxOutputLength: 256e3 }).toString()));
  } catch {
    throw new Error("\u9080\u8BF7\u7801\u5185\u5BB9\u65E0\u6548\u6216\u7248\u672C\u4E0D\u53D7\u652F\u6301");
  }
  if (data.expiresAt < now) throw new Error("\u9080\u8BF7\u7801\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u8BA9\u623F\u4E3B\u91CD\u65B0\u521B\u5EFA\u623F\u95F4");
  if (data.expiresAt > now + 7 * 864e5) throw new Error("\u9080\u8BF7\u7801\u6709\u6548\u671F\u5F02\u5E38");
  if (data.loader === "fabric" && !data.loaderVersion) throw new Error("\u9080\u8BF7\u7801\u7F3A\u5C11 Fabric \u7248\u672C");
  if (data.loader === "vanilla" && data.mods.length) throw new Error("\u539F\u7248\u5B9E\u4F8B\u4E0D\u80FD\u5305\u542B\u6A21\u7EC4");
  return data;
}

// electron/core/social.ts
function friendsUrl(value) {
  const url = new URL(value);
  const local = ["127.0.0.1", "localhost", "[::1]"].includes(url.hostname);
  if (url.protocol !== "https:" && !(local && url.protocol === "http:") || url.username || url.password || url.search || url.hash || url.pathname !== "/") throw new Error("\u597D\u53CB\u670D\u52A1\u8BF7\u586B\u5199 HTTPS \u5730\u5740\uFF0C\u672C\u673A\u8C03\u8BD5\u53EF\u4F7F\u7528 http://127.0.0.1:4589");
  return url.origin;
}
var Social = class {
  constructor(store) {
    this.store = store;
  }
  timer;
  busy = false;
  generation = 0;
  room;
  token() {
    const stored = this.store.secret("friends");
    if (!stored) return void 0;
    const value = JSON.parse(stored);
    return value.server === friendsUrl(this.store.state.settings.friendsServer) ? value.token : void 0;
  }
  async api(route, method = "GET", body, token = this.token()) {
    const response = await fetch(`${friendsUrl(this.store.state.settings.friendsServer)}${route}`, { method, redirect: "error", signal: AbortSignal.timeout(12e3), headers: { "Content-Type": "application/json", ...token ? { Authorization: `Bearer ${token}` } : {} }, body: body === void 0 ? void 0 : JSON.stringify(body) });
    const value = await response.json();
    if (!response.ok) {
      if (response.status === 401 && route !== "/v1/login") {
        await this.store.setSecret("friends");
        this.store.state.social = { connected: false, friends: [], error: "\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55" };
        this.store.changed();
      }
      throw new Error(value.error || `\u597D\u53CB\u670D\u52A1\u8FD4\u56DE ${response.status}`);
    }
    return value;
  }
  start() {
    this.stop();
    void this.refresh();
    this.timer = setInterval(() => void this.refresh(), 15e3);
  }
  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = void 0;
  }
  async pause() {
    this.stop();
    ++this.generation;
    while (this.busy) await new Promise((resolve) => setTimeout(resolve, 25));
  }
  async refresh() {
    if (this.busy) return;
    this.busy = true;
    const generation = this.generation;
    try {
      if (!this.token()) return;
      const value = await this.api("/v1/presence", "POST", {});
      if (generation !== this.generation) return;
      this.store.state.social = { user: value.user, friends: value.friends, connected: true, updatedAt: Date.now() };
      if (this.room && this.store.state.room.state === "ready") await this.api("/v1/room", "PUT", this.room);
    } catch (error) {
      if (generation === this.generation) {
        this.store.state.social.connected = false;
        this.store.state.social.friends = this.store.state.social.friends.map((friend) => ({ ...friend, online: false, world: void 0 }));
        this.store.state.social.error = error instanceof Error ? error.message : "\u597D\u53CB\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528";
      }
    } finally {
      this.busy = false;
      this.store.changed();
    }
  }
  async login(input) {
    ++this.generation;
    const value = await this.api(input.register ? "/v1/register" : "/v1/login", "POST", { username: input.username, password: input.password, nickname: input.nickname }, "");
    await this.store.setSecret("friends", JSON.stringify({ server: friendsUrl(this.store.state.settings.friendsServer), token: value.token }));
    this.store.state.social = { user: value.user, friends: value.friends, connected: true, updatedAt: Date.now() };
    this.store.changed();
  }
  async logout() {
    ++this.generation;
    if (this.token()) await this.api("/v1/logout", "POST", {}).catch(() => {
    });
    await this.store.setSecret("friends");
    this.room = void 0;
    this.store.state.social = { connected: false, friends: [] };
    this.store.changed();
  }
  async add(username) {
    await this.api("/v1/friends", "POST", { username });
    await this.refresh();
  }
  async respond(id, accept) {
    await this.api(`/v1/friends/${id}`, "PATCH", { accept });
    await this.refresh();
  }
  async remove(id) {
    await this.api(`/v1/friends/${id}`, "DELETE");
    await this.refresh();
  }
  async publish(room) {
    if (room.schema === 2) {
      const health = await this.api("/health");
      if (!health.roomSchemas?.includes(2)) throw new Error("\u672C\u5730\u6A21\u7EC4\u8054\u673A\u9700\u8981\u66F4\u65B0\u597D\u53CB\u670D\u52A1\u7AEF\u81F3 OLS 0.4.0 \u6216\u66F4\u9AD8\u7248\u672C");
    }
    await this.api("/v1/room", "PUT", room);
    this.room = room;
  }
  async unpublish() {
    this.room = void 0;
    if (this.token()) await this.api("/v1/room", "DELETE").catch(() => {
    });
  }
  async getRoom(id) {
    return inviteSchema.parse(await this.api(`/v1/rooms/${id}`));
  }
  async shutdown() {
    ++this.generation;
    this.stop();
    this.room = void 0;
    if (this.token()) await this.api("/v1/disconnect", "POST", {}).catch(() => {
    });
  }
};

// electron/core/rooms.ts
var import_promises10 = __toESM(require("node:fs/promises"), 1);
var import_node_path8 = __toESM(require("node:path"), 1);
var import_node_net = __toESM(require("node:net"), 1);

// electron/core/local-multiplayer.ts
var import_promises9 = __toESM(require("node:fs/promises"), 1);
var import_node_path7 = __toESM(require("node:path"), 1);
async function modFiles(gameDir, ignoredHashes = []) {
  const directory = import_node_path7.default.join(gameDir, "mods");
  let entries;
  try {
    const stat = await import_promises9.default.lstat(directory);
    if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error("\u6A21\u7EC4\u76EE\u5F55\u4E0D\u80FD\u662F\u94FE\u63A5\u6216\u666E\u901A\u6587\u4EF6");
    entries = await import_promises9.default.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
  const result = [];
  for (const entry of entries) {
    if (!entry.name.toLowerCase().endsWith(".jar")) continue;
    const filename = leafSchema.parse(entry.name), file = import_node_path7.default.join(directory, filename), before = await import_promises9.default.lstat(file);
    if (before.isSymbolicLink() || !before.isFile()) throw new Error("\u542F\u7528\u7684\u6A21\u7EC4\u5FC5\u987B\u662F\u666E\u901A JAR \u6587\u4EF6\uFF0C\u4E0D\u80FD\u662F\u94FE\u63A5");
    const sha512 = await hashFile(file, "sha512");
    const after = await import_promises9.default.lstat(file);
    if (before.size !== after.size || before.mtimeMs !== after.mtimeMs) throw new Error("\u6A21\u7EC4\u6B63\u5728\u88AB\u4FEE\u6539\uFF0C\u8BF7\u5173\u95ED\u5176\u4ED6\u7A0B\u5E8F\u540E\u91CD\u8BD5");
    if (!ignoredHashes.includes(sha512)) result.push({ filename, sha512, size: before.size });
    if (result.length > 512) throw new Error("\u5F53\u524D\u8054\u673A\u6821\u9A8C\u6700\u591A\u652F\u6301512\u4E2A\u542F\u7528\u6A21\u7EC4");
  }
  return result.sort((a, b) => a.filename.localeCompare(b.filename));
}
function compareMods(expected, actual) {
  const rest = [...actual];
  const missing = [];
  for (const file of expected) {
    const index = rest.findIndex((item) => item.sha512 === file.sha512 && item.size === file.size);
    if (index < 0) missing.push(file.filename);
    else rest.splice(index, 1);
  }
  return { compatible: !missing.length && !rest.length, missing, extra: rest.map((item) => item.filename) };
}
function versionCompatible(descriptor, instance) {
  return instance.installed && descriptor.gameVersion === instance.gameVersion && descriptor.loader === instance.loader && descriptor.loaderVersion === instance.loaderVersion;
}
function needsLocalEnvironment(instance, actual) {
  const platform = instance.resources.filter((item) => item.kind === "mod" && item.enabled && item.source !== "local");
  return instance.resources.some((item) => item.kind === "mod" && item.enabled && item.source === "local") || actual.some((file) => !platform.some((item) => item.filename === file.filename && item.sha512 === file.sha512)) || platform.some((item) => !actual.some((file) => file.filename === item.filename && file.sha512 === item.sha512));
}

// electron/core/rooms.ts
function tcpAvailable(port, host = "127.0.0.1") {
  return new Promise((resolve) => {
    const socket = import_node_net.default.createConnection({ host, port });
    const finish = (value) => {
      socket.destroy();
      resolve(value);
    };
    socket.setTimeout(1500);
    socket.once("connect", () => finish(true));
    socket.once("error", () => finish(false));
    socket.once("timeout", () => finish(false));
  });
}
var Rooms = class {
  constructor(store, minecraft, mods, sakura, social, bundled) {
    this.store = store;
    this.minecraft = minecraft;
    this.mods = mods;
    this.sakura = sakura;
    this.social = social;
    this.bundled = bundled;
    minecraft.onExit = (id) => {
      if (store.state.room.instanceId === id) void this.stop();
    };
    minecraft.onWorldClosed = minecraft.onExit;
    sakura.onExit = () => {
      if (store.state.room.state === "ready") {
        void this.stop().then(() => {
          store.state.room = { state: "error", detail: "\u6A31\u82B1\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u4E16\u754C\u5DF2\u4ECE\u597D\u53CB\u5217\u8868\u64A4\u4E0B" };
          store.changed();
        });
      }
    };
  }
  controller;
  monitor;
  epoch = 0;
  async host(input, original) {
    if (!["idle", "error"].includes(this.store.state.room.state)) throw new Error("\u8BF7\u5148\u5173\u95ED\u5F53\u524D\u623F\u95F4");
    if (!this.store.state.social.user || !this.store.state.social.connected) throw new Error("\u8BF7\u5148\u8FDE\u63A5\u597D\u53CB\u670D\u52A1\u5E76\u767B\u5F55\u542F\u6E90\u8D26\u53F7");
    const instance = this.store.instance(input.instanceId);
    if (!instance.installed) throw new Error("\u8BF7\u5148\u5B8C\u6210\u6E38\u620F\u5B89\u88C5");
    if (input.mode === "auto" && (instance.loader !== "fabric" || instance.gameVersion !== "1.21.1")) throw new Error("\u81EA\u52A8\u6253\u5F00\u4E16\u754C\u652F\u6301 Fabric 1.21.1\uFF1B\u5176\u4ED6\u7248\u672C\u8BF7\u4F7F\u7528\u5DF2\u5F00\u542F\u7684\u5C40\u57DF\u7F51\u4E16\u754C");
    if (input.mode === "auto" && this.store.state.running.includes(instance.id)) throw new Error("\u81EA\u52A8\u8054\u673A\u9700\u8981\u4ECE\u542F\u52A8\u5668\u542F\u52A8\uFF0C\u8BF7\u5148\u9000\u51FA\u6B64\u5B9E\u4F8B");
    this.controller = new AbortController();
    const epoch = ++this.epoch;
    const context = { ...original, signal: AbortSignal.any([original.signal, this.controller.signal]) };
    const update = (state, detail) => {
      if (epoch !== this.epoch) return;
      this.store.state.room = { ...this.store.state.room, state, detail, instanceId: instance.id };
      this.store.changed();
    };
    try {
      update("preparing", "\u51C6\u5907\u4E16\u754C\u4E0E\u8054\u673A\u7EC4\u4EF6");
      if (input.mode === "auto") {
        if (!input.world) throw new Error("\u8BF7\u9009\u62E9\u5DF2\u6709\u5B58\u6863\u3002\u9996\u6B21\u4F7F\u7528\u8BF7\u5148\u542F\u52A8\u6E38\u620F\u521B\u5EFA\u4E16\u754C\uFF0C\u6216\u5BFC\u5165\u5B58\u6863");
        leafSchema.parse(input.world);
        if (await tcpAvailable(input.localPort)) throw new Error("\u672C\u5730\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u8BF7\u66F4\u6362\u7AEF\u53E3");
        const bridge = import_node_path8.default.join(this.bundled, "qinglan-world-bridge-1.21.1.jar");
        if (!await exists(bridge)) throw new Error("\u7F3A\u5C11\u8054\u673A\u6865\u63A5\u6A21\u7EC4\uFF0C\u8BF7\u91CD\u65B0\u5B89\u88C5\u5B8C\u6574\u7684\u542F\u52A8\u5668\u53D1\u884C\u5305");
        await this.mods.install(instance, "fabric-api", "mod", context);
        await import_promises10.default.copyFile(bridge, import_node_path8.default.join(this.store.instanceDir(instance.id), "mods", "qinglan-world-bridge-1.21.1.jar"));
        await this.minecraft.launch(instance.id, context, { world: input.world, lanPort: input.localPort });
        update("waiting-world", "\u6B63\u5728\u6253\u5F00\u4E16\u754C\u5E76\u81EA\u52A8\u5F00\u653E\u5C40\u57DF\u7F51");
        for (let i = 0; i < 180; i++) {
          context.signal.throwIfAborted();
          if (this.minecraft.lanReady(instance.id) && await tcpAvailable(input.localPort)) break;
          if (!this.store.state.running.includes(instance.id)) throw new Error("\u6E38\u620F\u5DF2\u9000\u51FA\uFF0C\u8BF7\u67E5\u770B\u8FD0\u884C\u65E5\u5FD7");
          if (i === 179) throw new Error("\u7B49\u5F85\u4E16\u754C\u5F00\u653E\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u6E38\u620F\u753B\u9762\u6216\u7248\u672C\u517C\u5BB9\u6027");
          context.update("\u7B49\u5F85\u6E38\u620F\u4E16\u754C\u52A0\u8F7D", 0.45);
          await new Promise((resolve) => setTimeout(resolve, 1e3));
        }
      } else if (!await tcpAvailable(input.localPort)) throw new Error("\u672C\u5730\u5C40\u57DF\u7F51\u7AEF\u53E3\u6CA1\u6709\u54CD\u5E94\uFF0C\u8BF7\u5148\u5728\u6E38\u620F\u4E2D\u6253\u5F00\u5BF9\u5C40\u57DF\u7F51\u5F00\u653E");
      context.signal.throwIfAborted();
      update("connecting", "\u6B63\u5728\u914D\u7F6E\u6A31\u82B1\u96A7\u9053");
      const remote = await this.sakura.prepare(instance.id, input.nodeId, input.localPort, input.tunnelId);
      this.store.state.room.tunnelId = remote.tunnelId;
      await this.sakura.start(remote.tunnelId, context);
      context.signal.throwIfAborted();
      const actual = instance.loader === "fabric" ? await modFiles(this.store.instanceDir(instance.id), await this.ignoredMods()) : [];
      const local = instance.loader === "fabric" && actual.length > 0 && needsLocalEnvironment(instance, actual);
      const mods = local ? [] : instance.resources.filter((r) => instance.loader === "fabric" && r.kind === "mod" && r.enabled && r.source !== "local").map((r) => ({ projectId: r.projectId, versionId: r.versionId }));
      const descriptor = { schema: local ? 2 : 1, name: input.world || instance.name, host: remote.host, port: remote.port, gameVersion: instance.gameVersion, loader: instance.loader, loaderVersion: instance.loaderVersion, expiresAt: Date.now() + 864e5, mods, ...local && actual.length ? { localMods: actual } : {} };
      await this.social.publish(descriptor);
      context.signal.throwIfAborted();
      this.store.state.room = { state: "ready", detail: local ? "\u4E16\u754C\u5DF2\u5F00\u653E\uFF0C\u597D\u53CB\u53EF\u9009\u62E9\u76F8\u540C\u6A21\u7EC4\u7684\u672C\u5730\u5B9E\u4F8B\u5E76\u6821\u9A8C\u52A0\u5165" : "\u597D\u53CB\u73B0\u5728\u53EF\u4EE5\u770B\u5230\u5E76\u52A0\u5165\u4F60\u7684\u4E16\u754C", instanceId: instance.id, tunnelId: remote.tunnelId, address: `${remote.host}:${remote.port}` };
      this.store.changed();
      this.monitor = setInterval(() => {
        void tcpAvailable(input.localPort).then((open) => {
          if (!open && epoch === this.epoch) void this.stop();
        });
      }, 4e3);
      context.update("\u4E16\u754C\u5DF2\u5411\u597D\u53CB\u5F00\u653E", 1);
    } catch (error) {
      await this.stop();
      this.store.state.room = { state: "error", detail: error instanceof Error ? error.message : "\u623F\u95F4\u521B\u5EFA\u5931\u8D25" };
      this.store.changed();
      throw error;
    }
  }
  async stop() {
    ++this.epoch;
    this.controller?.abort();
    this.controller = void 0;
    if (this.monitor) clearInterval(this.monitor);
    this.monitor = void 0;
    this.sakura.stop();
    await this.social.unpublish();
    this.store.state.room = { state: "idle", detail: "" };
    this.store.changed();
  }
  async ignoredMods() {
    const bridge = import_node_path8.default.join(this.bundled, "qinglan-world-bridge-1.21.1.jar");
    return await exists(bridge) ? [await hashFile(bridge, "sha512")] : [];
  }
  async checkLocal(descriptor, instanceId) {
    const instance = this.store.instance(instanceId);
    if (!versionCompatible(descriptor, instance)) return { compatible: false, missing: [], extra: [], reason: "\u8BF7\u9009\u62E9\u5DF2\u5B89\u88C5\u3001\u6E38\u620F\u7248\u672C\u4E0EFabric\u52A0\u8F7D\u5668\u7248\u672C\u76F8\u540C\u7684\u5B9E\u4F8B" };
    if (!descriptor.localMods) return { compatible: false, missing: [], extra: [], reason: "\u597D\u53CB\u623F\u95F4\u672A\u63D0\u4F9B\u672C\u5730\u6A21\u7EC4\u6821\u9A8C\u6E05\u5355" };
    return compareMods(descriptor.localMods, await modFiles(this.store.instanceDir(instanceId), await this.ignoredMods()));
  }
  async join(descriptor, context, localInstanceId) {
    if (descriptor.expiresAt < Date.now()) throw new Error("\u597D\u53CB\u7684\u4E16\u754C\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u5237\u65B0");
    if (descriptor.schema === 2) {
      if (!localInstanceId) throw new Error("\u8BF7\u9009\u62E9\u5DF2\u6709\u7684\u672C\u5730\u6E38\u620F\u5B9E\u4F8B\uFF0C\u6821\u9A8C\u6A21\u7EC4\u540E\u52A0\u5165\u597D\u53CB\u4E16\u754C");
      if (this.store.state.running.includes(localInstanceId)) throw new Error("\u8BF7\u5148\u9000\u51FA\u9009\u4E2D\u7684\u6E38\u620F\u5B9E\u4F8B");
      const check = await this.checkLocal(descriptor, localInstanceId);
      if (!check.compatible) throw new Error(check.reason || `\u6A21\u7EC4\u4E0D\u4E00\u81F4\uFF1A\u7F3A\u5C11\u6216\u7248\u672C\u4E0D\u540C ${check.missing.length} \u9879\uFF0C\u591A\u51FA ${check.extra.length} \u9879\u3002\u8BF7\u6309\u6821\u9A8C\u6E05\u5355\u51C6\u5907\u76F8\u540C\u6587\u4EF6\u540E\u91CD\u8BD5`);
      context.signal.throwIfAborted();
      this.store.state.selectedId = localInstanceId;
      await this.store.save();
      await this.minecraft.launch(localInstanceId, context, { address: `${descriptor.host}:${descriptor.port}` });
      return;
    }
    const fingerprint = (await import("node:crypto")).createHash("sha256").update(JSON.stringify({ gameVersion: descriptor.gameVersion, loader: descriptor.loader, loaderVersion: descriptor.loaderVersion, mods: [...descriptor.mods].sort((a, b) => a.projectId.localeCompare(b.projectId)) })).digest("hex").slice(0, 24);
    const id = `friend-${fingerprint}`;
    let instance = this.store.state.instances.find((item) => item.id === id);
    if (!instance) {
      instance = { ...this.minecraft.newInstance(`\u597D\u53CB\u4E16\u754C \xB7 ${descriptor.gameVersion}`, descriptor.gameVersion, descriptor.loader, descriptor.loaderVersion), id };
      this.store.state.instances.push(instance);
      await this.store.save();
    }
    if (this.store.state.running.includes(id)) throw new Error("\u6B64\u597D\u53CB\u6E38\u620F\u73AF\u5883\u5DF2\u5728\u8FD0\u884C\uFF0C\u8BF7\u5148\u9000\u51FA\u8BE5\u5B9E\u4F8B");
    if (!instance.installed) await this.minecraft.install(instance, context);
    for (const mod of descriptor.mods) if (!instance.resources.some((r) => r.projectId === mod.projectId && r.versionId === mod.versionId && r.enabled)) await this.mods.install(instance, mod.projectId, "mod", context, mod.versionId);
    this.store.state.selectedId = id;
    await this.store.save();
    await this.minecraft.launch(id, context, { address: `${descriptor.host}:${descriptor.port}` });
  }
};

// electron/core/storage.ts
var import_promises11 = __toESM(require("node:fs/promises"), 1);
var import_node_path9 = __toESM(require("node:path"), 1);
var import_node_fs3 = require("node:fs");
var import_node_crypto9 = require("node:crypto");
var marker = ".ols-migration.json";
function overlaps(a, b) {
  const rel = import_node_path9.default.relative(a, b);
  return !rel || !rel.startsWith(`..${import_node_path9.default.sep}`) && rel !== ".." && !import_node_path9.default.isAbsolute(rel);
}
async function storageRoot(userData) {
  const pointer = import_node_path9.default.join(userData, "storage.json");
  if (!await exists(pointer)) return import_node_path9.default.join(userData, "data");
  const value = JSON.parse(await import_promises11.default.readFile(pointer, "utf8"));
  if (value.schema !== 1 || typeof value.root !== "string" || !import_node_path9.default.isAbsolute(value.root)) throw new Error("\u5B58\u50A8\u4F4D\u7F6E\u914D\u7F6E\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5 storage.json");
  const info = await import_promises11.default.lstat(value.root).catch(() => void 0);
  if (!info?.isDirectory() || info.isSymbolicLink() || !await exists(import_node_path9.default.join(value.root, "state.json"))) throw new Error(`\u6E38\u620F\u5B58\u50A8\u4F4D\u7F6E\u4E0D\u53EF\u7528\uFF0C\u8BF7\u8FDE\u63A5\u78C1\u76D8\u540E\u91CD\u8BD5\uFF1A${value.root}`);
  if (await exists(import_node_path9.default.join(value.root, marker))) throw new Error("\u76EE\u6807\u76EE\u5F55\u5305\u542B\u672A\u5B8C\u6210\u7684\u8FC1\u79FB\uFF0C\u8BF7\u4FDD\u7559\u5907\u4EFD\u5E76\u68C0\u67E5\u5B58\u50A8\u4F4D\u7F6E");
  return value.root;
}
async function manifest(root, signal) {
  const result = [];
  const directories2 = [];
  let bytes = 0, nodes = 0;
  async function walk(directory, depth = 0) {
    if (depth > 50) throw new Error("\u6570\u636E\u76EE\u5F55\u5C42\u7EA7\u8FC7\u6DF1");
    for (const entry of await import_promises11.default.readdir(directory, { withFileTypes: true })) {
      signal?.throwIfAborted();
      if (++nodes > 1e6) throw new Error("\u6570\u636E\u6587\u4EF6\u6570\u91CF\u8D85\u8FC7\u8FC1\u79FB\u4E0A\u9650");
      const file = import_node_path9.default.join(directory, entry.name);
      const info = await import_promises11.default.lstat(file);
      if (info.isSymbolicLink()) throw new Error("\u6570\u636E\u76EE\u5F55\u5305\u542B\u94FE\u63A5\uFF0C\u8BF7\u5148\u5904\u7406\u94FE\u63A5\u540E\u518D\u8FC1\u79FB");
      if (info.isDirectory()) {
        directories2.push(import_node_path9.default.relative(root, file));
        await walk(file, depth + 1);
      } else if (info.isFile()) {
        const name = import_node_path9.default.relative(root, file);
        if (name === marker) throw new Error("\u6E90\u76EE\u5F55\u5305\u542B\u672A\u5B8C\u6210\u7684\u8FC1\u79FB\u8BB0\u5F55");
        bytes += info.size;
        result.push({ name, size: info.size, mtime: info.mtimeMs });
      } else throw new Error("\u6570\u636E\u76EE\u5F55\u5305\u542B\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B");
    }
  }
  await walk(root);
  result.sort((a, b) => a.name.localeCompare(b.name));
  directories2.sort();
  return { result, bytes, directories: directories2 };
}
async function validateTarget(source, target) {
  source = await import_promises11.default.realpath(source);
  const parent = await import_promises11.default.realpath(import_node_path9.default.dirname(target));
  target = import_node_path9.default.join(parent, import_node_path9.default.basename(target));
  if (overlaps(source, target) || overlaps(target, source)) throw new Error("\u65B0\u4F4D\u7F6E\u4E0D\u80FD\u4E0E\u5F53\u524D\u6570\u636E\u76EE\u5F55\u76F8\u540C\u6216\u4E92\u76F8\u5D4C\u5957");
  if (await exists(target)) {
    const stat = await import_promises11.default.lstat(target);
    if (!stat.isDirectory() || stat.isSymbolicLink() || (await import_promises11.default.readdir(target)).length) throw new Error("\u76EE\u6807 OLSData \u76EE\u5F55\u5FC5\u987B\u4E3A\u7A7A\uFF0C\u4E0D\u80FD\u8986\u76D6\u5DF2\u6709\u6E38\u620F\u6216\u65E7\u5907\u4EFD");
  }
  return { source, target, parent };
}
async function prepareStorage(source, target) {
  const location = await validateTarget(source, target);
  const data = await manifest(location.source);
  const disk = await import_promises11.default.statfs(location.parent);
  if (Number(disk.bavail) * Number(disk.bsize) < data.bytes + 64 * 1024 * 1024) throw new Error("\u76EE\u6807\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u9700\u8981\u5BB9\u7EB3\u5168\u90E8\u73B0\u6709\u6570\u636E\u53CA64MB\u4F59\u91CF");
  return { id: (0, import_node_crypto9.randomUUID)(), source: location.source, target: location.target, bytes: data.bytes, files: data.result.length, createdAt: Date.now() };
}
async function digest(file, signal) {
  const hash = (0, import_node_crypto9.createHash)("sha256");
  for await (const chunk of (0, import_node_fs3.createReadStream)(file)) {
    signal.throwIfAborted();
    hash.update(chunk);
  }
  return hash.digest("hex");
}
async function migrateStorage(plan, context, commit) {
  const location = await validateTarget(plan.source, plan.target);
  const { result, bytes, directories: directories2 } = await manifest(location.source, context.signal);
  const disk = await import_promises11.default.statfs(location.parent);
  if (Number(disk.bavail) * Number(disk.bsize) < bytes + 64 * 1024 * 1024) throw new Error("\u76EE\u6807\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3");
  context.signal.throwIfAborted();
  await import_promises11.default.mkdir(location.target, { recursive: true });
  const markerFile = import_node_path9.default.join(location.target, marker);
  await atomicWrite(markerFile, JSON.stringify({ source: location.source, status: "copying" }));
  let copied = 0;
  try {
    for (const directory of directories2) {
      context.signal.throwIfAborted();
      await import_promises11.default.mkdir(import_node_path9.default.join(location.target, directory), { recursive: true });
    }
    for (const [index, item] of result.entries()) {
      context.signal.throwIfAborted();
      const source = import_node_path9.default.join(location.source, item.name), destination = import_node_path9.default.join(location.target, item.name);
      const before = await import_promises11.default.lstat(source);
      if (!before.isFile() || before.isSymbolicLink() || before.size !== item.size || before.mtimeMs !== item.mtime) throw new Error("\u6E90\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u5173\u95ED\u5176\u4ED6\u542F\u52A8\u5668\u540E\u91CD\u65B0\u8FC1\u79FB");
      await import_promises11.default.mkdir(import_node_path9.default.dirname(destination), { recursive: true });
      await import_promises11.default.copyFile(source, destination, import_node_fs3.constants.COPYFILE_EXCL);
      if (await digest(source, context.signal) !== await digest(destination, context.signal)) throw new Error(`\u590D\u5236\u6821\u9A8C\u5931\u8D25\uFF1A${item.name}`);
      const after = await import_promises11.default.lstat(source);
      if (after.size !== item.size || after.mtimeMs !== item.mtime) throw new Error("\u8FC1\u79FB\u671F\u95F4\u6E90\u6587\u4EF6\u53D1\u751F\u53D8\u5316");
      copied += item.size;
      context.update(`\u590D\u5236\u5E76\u6821\u9A8C ${index + 1} / ${result.length}`, bytes ? copied / bytes : index / result.length, copied, bytes);
    }
    const latest = await manifest(location.source, context.signal);
    if (JSON.stringify(latest.result) !== JSON.stringify(result) || JSON.stringify(latest.directories) !== JSON.stringify(directories2)) throw new Error("\u6E90\u6570\u636E\u76EE\u5F55\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5");
    context.signal.throwIfAborted();
    context.beginCommit?.();
    context.update("\u6587\u4EF6\u5DF2\u6821\u9A8C\uFF0C\u6B63\u5728\u5207\u6362\u4F4D\u7F6E\uFF08\u6B64\u6B65\u9AA4\u4E0D\u53EF\u53D6\u6D88\uFF09", 0.99);
    await import_promises11.default.rm(markerFile);
    await commit(location.target);
    context.update("\u5B58\u50A8\u4F4D\u7F6E\u5DF2\u5207\u6362\uFF0C\u65E7\u76EE\u5F55\u4FDD\u7559\u4E3A\u5907\u4EFD", 1);
  } catch (error) {
    await atomicWrite(markerFile, JSON.stringify({ source: location.source, status: "incomplete" })).catch(() => {
    });
    throw error;
  }
}

// electron/main.ts
var idInput = external_exports.object({ id: identifier });
var externalHosts = ["modrinth.com", "www.natfrp.com", "natfrp.com", "doc.natfrp.com", "www.minecraft.net", "minecraft.net", "login.microsoftonline.com", "www.microsoft.com", "microsoft.com", "microsoft.com", "aka.ms", "learn.microsoft.com"];
var mainWindow;
var portalWindow;
if (process.env.QINGLAN_DATA_DIR) import_electron2.app.setPath("userData", import_node_path10.default.resolve(process.env.QINGLAN_DATA_DIR));
if (!import_electron2.app.requestSingleInstanceLock()) import_electron2.app.quit();
else {
  import_electron2.app.on("second-instance", () => {
    mainWindow?.show();
    mainWindow?.focus();
  });
  void import_electron2.app.whenReady().then(start).catch((error) => {
    import_electron2.dialog.showErrorBox("OLS \u542F\u52A8\u5668\u65E0\u6CD5\u542F\u52A8", safeMessage(error));
    import_electron2.app.quit();
  });
}
async function start() {
  const storagePointer = import_node_path10.default.join(import_electron2.app.getPath("userData"), "storage.json");
  const store = new Store(await storageRoot(import_electron2.app.getPath("userData")));
  await store.init();
  const jobs = new Jobs(store);
  const auth = new Auth(store);
  const minecraft = new Minecraft(store, auth);
  const mods = new Modrinth(store);
  const sakura = new Sakura(store);
  const social = new Social(store);
  const bundled = import_electron2.app.isPackaged ? import_node_path10.default.join(process.resourcesPath, "bundled") : import_node_path10.default.join(import_electron2.app.getAppPath(), "resources");
  const rooms = new Rooms(store, minecraft, mods, sakura, social, bundled);
  const localScans = /* @__PURE__ */ new Map();
  let scanningLocal = false;
  let storagePlan;
  let migrating = false;
  const requireIdle = () => {
    if (store.state.running.length || !["idle", "error"].includes(store.state.room.state) || store.state.jobs.some((job) => ["queued", "running"].includes(job.status)) || scanningLocal) throw new Error("\u8BF7\u9000\u51FA\u6E38\u620F\u3001\u5173\u95ED\u8054\u673A\u5E76\u7B49\u5F85\u6587\u4EF6\u4EFB\u52A1\u5B8C\u6210\u540E\u8FC1\u79FB");
  };
  mainWindow = new import_electron2.BrowserWindow({
    width: 1380,
    height: 900,
    minWidth: 1e3,
    minHeight: 700,
    title: "OLS \u542F\u52A8\u5668",
    frame: false,
    backgroundColor: "#f4f7f6",
    show: false,
    webPreferences: { preload: import_node_path10.default.join(__dirname, "preload.cjs"), contextIsolation: true, nodeIntegration: false, sandbox: true, webSecurity: true, spellcheck: false }
  });
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  mainWindow.webContents.on("will-navigate", (event) => event.preventDefault());
  mainWindow.webContents.session.setPermissionRequestHandler((_contents, _permission, callback) => callback(false));
  let notification;
  store.onChange = () => {
    if (notification) return;
    notification = setTimeout(() => {
      notification = void 0;
      if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send("qinglan:state", store.state);
    }, 250);
  };
  async function openPortal(page) {
    if (portalWindow && !portalWindow.isDestroyed()) {
      portalWindow.focus();
      return;
    }
    portalWindow = new import_electron2.BrowserWindow({ width: 1080, height: 790, parent: mainWindow, autoHideMenuBar: true, title: page === "checkin" ? "\u6A31\u82B1\u7A7F\u900F \xB7 \u5B98\u65B9\u7B7E\u5230\uFF08\u9A8C\u8BC1\u7531\u4F60\u5B8C\u6210\uFF09" : "\u6A31\u82B1\u7A7F\u900F \xB7 \u5B98\u65B9\u8D26\u6237\u7BA1\u7406", webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, partition: "persist:sakura-official" } });
    portalWindow.webContents.session.setPermissionRequestHandler((_c, _p, cb) => cb(false));
    portalWindow.webContents.on("will-navigate", (event, url) => {
      if (!url.startsWith("https://")) event.preventDefault();
    });
    portalWindow.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith("https://")) void import_electron2.shell.openExternal(url);
      return { action: "deny" };
    });
    const closed = new Promise((resolve) => portalWindow.once("closed", () => {
      portalWindow = void 0;
      resolve();
    }));
    await portalWindow.loadURL(page === "tunnels" ? "https://www.natfrp.com/tunnel/" : "https://www.natfrp.com/user/");
    await closed;
  }
  async function command(command2, raw) {
    if (migrating && !["state", "getBackground", "window", "cancelJob"].includes(command2)) throw new Error("\u6B63\u5728\u8FC1\u79FB\u5B58\u50A8\u4F4D\u7F6E\uFF0C\u8BF7\u7B49\u5F85\u5B8C\u6210\u6216\u5728\u4E0B\u8F7D\u7BA1\u7406\u53D6\u6D88\u4EFB\u52A1");
    switch (command2) {
      case "chooseStorage": {
        requireIdle();
        const result = await import_electron2.dialog.showOpenDialog(mainWindow, { properties: ["openDirectory", "createDirectory"], title: "\u9009\u62E9\u5B58\u50A8\u4F4D\u7F6E\uFF08\u5C06\u5728\u8BE5\u76EE\u5F55\u4E0B\u521B\u5EFA OLSData\uFF09" });
        if (result.canceled || !result.filePaths[0]) return null;
        requireIdle();
        await store.save();
        storagePlan = await prepareStorage(store.root, import_node_path10.default.join(await import_promises12.default.realpath(result.filePaths[0]), "OLSData"));
        return storagePlan;
      }
      case "migrateStorage": {
        const input = external_exports.object({ planId: external_exports.string().uuid() }).parse(raw);
        requireIdle();
        const plan = storagePlan;
        if (!plan || plan.id !== input.planId || Date.now() - plan.createdAt > 6e5) throw new Error("\u8FC1\u79FB\u9884\u89C8\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u4F4D\u7F6E");
        storagePlan = void 0;
        migrating = true;
        auth.cancel();
        return jobs.add("\u8FC1\u79FB\u672C\u5730\u5B58\u50A8\u4F4D\u7F6E", async (context) => {
          try {
            await social.pause();
            await store.flush();
            await migrateStorage(plan, context, async (target) => {
              const javaPath = store.state.settings.javaPath;
              const relJava = javaPath ? import_node_path10.default.relative(plan.source, javaPath) : void 0;
              const remappedJava = relJava && !relJava.startsWith(`..${import_node_path10.default.sep}`) && relJava !== ".." && !import_node_path10.default.isAbsolute(relJava) ? import_node_path10.default.join(target, relJava) : javaPath;
              if (remappedJava !== javaPath) {
                const saved = JSON.parse(await import_promises12.default.readFile(import_node_path10.default.join(target, "state.json"), "utf8"));
                saved.settings.javaPath = remappedJava;
                await atomicWrite(import_node_path10.default.join(target, "state.json"), JSON.stringify(saved, null, 2));
              }
              await atomicWrite(storagePointer, JSON.stringify({ schema: 1, root: target }, null, 2));
              store.root = target;
              store.state.settings = { ...store.state.settings, javaPath: remappedJava };
              store.state.dataDir = target;
              store.changed();
            });
          } finally {
            migrating = false;
            social.start();
          }
        });
      }
      case "state":
        return store.state;
      case "versions":
        return minecraft.versions();
      case "scanLocal": {
        if (scanningLocal) throw new Error("\u6B63\u5728\u8BC6\u522B\u672C\u5730\u6E38\u620F\uFF0C\u8BF7\u7A0D\u5019");
        scanningLocal = true;
        try {
          const result = await import_electron2.dialog.showOpenDialog(mainWindow, { title: "\u9009\u62E9\u6E38\u620F\u76EE\u5F55\u3001.minecraft\u3001\u5177\u4F53\u7248\u672C\u76EE\u5F55\u6216\u6574\u5408\u5305\u5B9E\u4F8B", properties: ["openDirectory"] });
          if (result.canceled || !result.filePaths[0]) return null;
          const scan = await scanLocalFolder(result.filePaths[0]);
          localScans.set(scan.id, scan);
          while (localScans.size > 5) localScans.delete(localScans.keys().next().value);
          return scan;
        } finally {
          scanningLocal = false;
        }
      }
      case "importLocal": {
        const input = external_exports.object({ scanId: external_exports.string().uuid(), profileId: external_exports.string().uuid() }).parse(raw);
        const scan = localScans.get(input.scanId);
        if (!scan || Date.now() - Date.parse(scan.scannedAt) > 30 * 6e4) throw new Error("\u626B\u63CF\u7ED3\u679C\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6E38\u620F\u6587\u4EF6\u5939");
        const profile = scan.profiles.find((profile2) => profile2.id === input.profileId);
        if (!profile?.canImport || !profile.gameVersion || !["vanilla", "fabric"].includes(profile.loader)) throw new Error(profile?.importReason || "\u8FD9\u4E2A\u7248\u672C\u6682\u4E0D\u652F\u6301\u5BFC\u5165");
        const source = profile.versionDir || profile.gameDir;
        const existing = store.state.instances.find((instance2) => instance2.importedFrom === source);
        if (existing && existing.importState !== "failed") throw new Error("\u8FD9\u4E2A\u672C\u5730\u7248\u672C\u5DF2\u7ECF\u6DFB\u52A0\u5230\u6E38\u620F\u5E93\uFF0C\u53EF\u5728\u90A3\u91CC\u67E5\u770B\u6216\u5728\u4E0B\u8F7D\u7BA1\u7406\u7EE7\u7EED\u5BFC\u5165");
        const instance = existing || { ...minecraft.newInstance(profile.name.slice(0, 60), profile.gameVersion, profile.loader === "fabric" ? "fabric" : "vanilla", profile.loaderVersion), importedFrom: source, importState: "copying" };
        if (!existing) store.state.instances.push(instance);
        instance.importCache = { cacheRoot: profile.cacheRoot, versionDir: profile.versionDir };
        store.state.selectedId = instance.id;
        await store.save();
        return jobs.add(`\u5BFC\u5165\u672C\u5730\u6E38\u620F \xB7 ${instance.name}`, async (context) => {
          instance.importState = "copying";
          instance.installed = false;
          await store.save();
          try {
            const resources = await copyLocalContent(profile, store.instanceDir(instance.id), context);
            instance.resources = resources;
            instance.importState = "copied";
            await store.save();
            await minecraft.install(instance, context, { cacheRoot: profile.cacheRoot, versionDir: profile.versionDir });
            store.log(`${instance.name} \u672C\u5730\u6E38\u620F\u5BFC\u5165\u5B8C\u6210\uFF1A${resources.length} \u4E2A\u8D44\u6E90`);
          } catch (error) {
            if (instance.importState === "copying") instance.importState = "failed";
            await store.save();
            throw error;
          }
        });
      }
      case "install": {
        const input = external_exports.object({ name: external_exports.string().trim().min(1).max(60), gameVersion: identifier, loader: external_exports.enum(["vanilla", "fabric"]), loaderVersion: identifier.optional() }).parse(raw);
        const instance = minecraft.newInstance(input.name, input.gameVersion, input.loader, input.loaderVersion);
        store.state.instances.push(instance);
        store.state.selectedId = instance.id;
        await store.save();
        return jobs.add(`\u5B89\u88C5 ${instance.name}`, (context) => minecraft.install(instance, context));
      }
      case "select": {
        const { id } = idInput.parse(raw);
        store.instance(id);
        store.state.selectedId = id;
        await store.save();
        return;
      }
      case "launch": {
        const { id } = idInput.parse(raw);
        return jobs.add(`\u542F\u52A8 ${store.instance(id).name}`, (context) => minecraft.launch(id, context));
      }
      case "repair": {
        const { id } = idInput.parse(raw);
        if (store.state.running.includes(id)) throw new Error("\u8BF7\u5148\u9000\u51FA\u6E38\u620F");
        canRepairImported(store.instance(id));
        return jobs.add(`\u6821\u9A8C\u4E0E\u4FEE\u590D ${store.instance(id).name}`, (context) => minecraft.install(store.instance(id), context));
      }
      case "worlds":
        return minecraft.worlds(idInput.parse(raw).id);
      case "importWorld": {
        const { id } = idInput.parse(raw);
        store.instance(id);
        if (store.state.running.includes(id)) throw new Error("\u8BF7\u5148\u9000\u51FA\u6E38\u620F\u518D\u5BFC\u5165\u4E16\u754C");
        const result = await import_electron2.dialog.showOpenDialog(mainWindow, { title: "\u9009\u62E9\u5305\u542B level.dat \u7684\u5B58\u6863\u6587\u4EF6\u5939\uFF08\u8BF7\u5148\u5173\u95ED\u539F\u6E38\u620F\uFF09", properties: ["openDirectory"] });
        if (result.canceled || !result.filePaths[0]) return null;
        const source = result.filePaths[0];
        if (!await exists(import_node_path10.default.join(source, "level.dat"))) throw new Error("\u6B64\u6587\u4EF6\u5939\u6CA1\u6709 level.dat\uFF0C\u4E0D\u662F\u6709\u6548\u7684\u4E16\u754C\u5B58\u6863");
        const folder = leafSchema.parse(import_node_path10.default.basename(source));
        const destination = under(store.instanceDir(id), "saves", folder);
        if (await exists(destination)) throw new Error("\u540C\u540D\u4E16\u754C\u5DF2\u5B58\u5728\uFF0C\u8BF7\u5148\u5728\u6E90\u6587\u4EF6\u5939\u6539\u540D");
        const check = async (dir) => {
          for (const item of await import_promises12.default.readdir(dir, { withFileTypes: true })) {
            if (item.isSymbolicLink()) throw new Error("\u5BFC\u5165\u7684\u4E16\u754C\u4E0D\u80FD\u5305\u542B\u7B26\u53F7\u94FE\u63A5");
            if (item.isDirectory()) await check(import_node_path10.default.join(dir, item.name));
          }
        };
        await check(source);
        await import_promises12.default.cp(source, destination, { recursive: true, errorOnExist: true, force: false });
        return folder;
      }
      case "search":
        return mods.search(external_exports.object({ query: external_exports.string().max(200), kind: external_exports.enum(["mod", "shader", "resourcepack"]), instanceId: identifier.optional(), offset: external_exports.number().int().min(0).max(1e5).optional(), sort: external_exports.enum(["downloads", "relevance", "updated"]).optional() }).parse(raw));
      case "installResource": {
        const input = external_exports.object({ instanceId: identifier, projectId: identifier, kind: external_exports.enum(["mod", "shader", "resourcepack"]) }).parse(raw);
        return jobs.add("\u5B89\u88C5\u8D44\u6E90\u4E0E\u4F9D\u8D56", (context) => mods.install(store.instance(input.instanceId), input.projectId, input.kind, context));
      }
      case "toggleResource": {
        const input = external_exports.object({ instanceId: identifier, projectId: identifier }).parse(raw);
        return mods.toggle(input.instanceId, input.projectId);
      }
      case "saveSettings": {
        const input = settingsSchema.parse(raw);
        friendsUrl(input.friendsServer);
        if (input.friendsServer !== store.state.settings.friendsServer) {
          await rooms.stop();
          await social.logout();
        }
        store.state.settings = { ...input, backgroundRevision: store.state.settings.backgroundRevision };
        await store.save();
        mainWindow?.setBackgroundColor(input.theme === "dark" ? "#111b1b" : "#f4f7f6");
        return;
      }
      case "chooseBackground": {
        const result = await import_electron2.dialog.showOpenDialog(mainWindow, { properties: ["openFile"], title: "\u9009\u62E9\u80CC\u666F\u56FE\u7247", filters: [{ name: "\u80CC\u666F\u56FE\u7247", extensions: ["png", "jpg", "jpeg", "webp"] }] });
        if (result.canceled || !result.filePaths[0]) return false;
        const source = result.filePaths[0];
        const stat = await import_promises12.default.stat(source);
        if (!stat.isFile() || stat.size > 24 * 1024 * 1024) throw new Error("\u8BF7\u9009\u62E9\u5C0F\u4E8E 24 MB \u7684\u56FE\u7247");
        let image = import_electron2.nativeImage.createFromBuffer(await import_promises12.default.readFile(source));
        const size = image.getSize();
        if (image.isEmpty() || size.width > 16384 || size.height > 16384) throw new Error("\u56FE\u7247\u65E0\u6548\u6216\u5C3A\u5BF8\u8FC7\u5927\uFF0C\u8BF7\u4F7F\u7528 PNG\u3001JPEG \u6216 WebP \u9759\u6001\u56FE\u7247");
        const ratio = Math.min(1, 2560 / Math.max(size.width, size.height));
        if (ratio < 1) image = image.resize({ width: Math.max(1, Math.round(size.width * ratio)), height: Math.max(1, Math.round(size.height * ratio)) });
        await atomicWrite(store.file("appearance", "background.png"), image.toPNG());
        store.state.settings.backgroundRevision = (0, import_node_crypto10.randomUUID)();
        await store.save();
        return true;
      }
      case "getBackground": {
        if (!store.state.settings.backgroundRevision) return null;
        try {
          return `data:image/png;base64,${(await import_promises12.default.readFile(store.file("appearance", "background.png"))).toString("base64")}`;
        } catch {
          return null;
        }
      }
      case "resetBackground": {
        await import_promises12.default.rm(store.file("appearance", "background.png"), { force: true });
        store.state.settings.backgroundRevision = void 0;
        await store.save();
        return;
      }
      case "chooseJava": {
        const result = await import_electron2.dialog.showOpenDialog(mainWindow, { properties: ["openFile"], title: "\u9009\u62E9 java.exe", filters: [{ name: "Java \u8FD0\u884C\u7A0B\u5E8F", extensions: ["exe"] }] });
        return result.canceled ? null : result.filePaths[0];
      }
      case "login":
        return auth.login();
      case "cancelLogin":
        return auth.cancel();
      case "logout":
        return auth.logout();
      case "saveSakura":
        return sakura.saveToken(external_exports.object({ token: external_exports.string().trim().min(8).max(512).regex(/^[a-zA-Z0-9_-]+$/) }).parse(raw).token);
      case "sakuraNodes":
        return sakura.nodes();
      case "sakuraTunnels":
        return sakura.tunnels();
      case "sakuraAccount":
        return sakura.account();
      case "sakuraPortal":
        return openPortal(external_exports.object({ page: external_exports.enum(["account", "checkin", "tunnels"]) }).parse(raw).page);
      case "sakuraLogout":
        await rooms.stop();
        await sakura.logout();
        await import_electron2.session.fromPartition("persist:sakura-official").clearStorageData();
        return;
      case "deleteTunnel":
        return sakura.delete(external_exports.object({ id: external_exports.number().int().positive() }).parse(raw).id);
      case "host": {
        const input = external_exports.object({ instanceId: identifier, world: leafSchema.optional(), nodeId: external_exports.number().int().positive(), localPort: portSchema, mode: external_exports.enum(["auto", "manual"]), tunnelId: external_exports.number().int().positive().optional() }).parse(raw);
        return jobs.add("\u5411\u597D\u53CB\u5F00\u653E\u4E16\u754C", (context) => rooms.host(input, context));
      }
      case "stopRoom":
        return rooms.stop();
      case "decodeInvite":
        return decodeInvite(external_exports.object({ code: external_exports.string().max(24e3) }).parse(raw).code);
      case "join": {
        const descriptor = decodeInvite(external_exports.object({ code: external_exports.string().max(24e3) }).parse(raw).code);
        return jobs.add("\u51C6\u5907\u597D\u53CB\u6E38\u620F\u73AF\u5883", (context) => rooms.join(descriptor, context));
      }
      case "socialLogin":
        return social.login(external_exports.object({ username: external_exports.string().max(24), password: external_exports.string().min(10).max(128), nickname: external_exports.string().max(30).optional(), register: external_exports.boolean() }).parse(raw));
      case "socialLogout":
        await rooms.stop();
        return social.logout();
      case "addFriend":
        return social.add(external_exports.object({ username: external_exports.string().max(24) }).parse(raw).username);
      case "respondFriend": {
        const input = external_exports.object({ id: external_exports.string().uuid(), accept: external_exports.boolean() }).parse(raw);
        return social.respond(input.id, input.accept);
      }
      case "removeFriend":
        return social.remove(external_exports.object({ id: external_exports.string().uuid() }).parse(raw).id);
      case "friendRoom":
        return social.getRoom(external_exports.object({ id: external_exports.string().uuid() }).parse(raw).id);
      case "checkFriendMods": {
        const input = external_exports.object({ id: external_exports.string().uuid(), instanceId: identifier }).parse(raw);
        return rooms.checkLocal(await social.getRoom(input.id), input.instanceId);
      }
      case "joinFriend": {
        const input = external_exports.object({ id: external_exports.string().uuid(), instanceId: identifier.optional() }).parse(raw);
        return jobs.add("\u52A0\u5165\u597D\u53CB\u7684\u4E16\u754C", async (context) => rooms.join(await social.getRoom(input.id), context, input.instanceId));
      }
      case "cancelJob":
        return jobs.cancel(idInput.parse(raw).id);
      case "retryJob": {
        const { id } = idInput.parse(raw);
        if (store.state.jobs.find((job) => job.id === id)?.title === "\u8FC1\u79FB\u672C\u5730\u5B58\u50A8\u4F4D\u7F6E") throw new Error("\u8FC1\u79FB\u5931\u8D25\u6216\u53D6\u6D88\u540E\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u7A7A\u76EE\u5F55\u5E76\u9884\u89C8\u540E\u5F00\u59CB\uFF0C\u4E0D\u80FD\u76F4\u63A5\u91CD\u653E\u65E7\u8FC1\u79FB\u4EFB\u52A1");
        return jobs.retry(id);
      }
      case "openFolder": {
        const input = external_exports.object({ id: identifier.optional(), kind: external_exports.enum(["instance", "mods", "shaderpacks", "resourcepacks", "logs"]).optional() }).parse(raw);
        let directory = store.root;
        if (input.id) {
          store.instance(input.id);
          directory = store.instanceDir(input.id);
        }
        if (input.kind && input.kind !== "instance") directory = under(directory, input.kind);
        await import_promises12.default.mkdir(directory, { recursive: true });
        const error = await import_electron2.shell.openPath(directory);
        if (error) throw new Error(error);
        return;
      }
      case "openExternal": {
        const { url } = external_exports.object({ url: external_exports.string().url().max(1e3) }).parse(raw);
        const parsed = new URL(url);
        if (parsed.protocol !== "https:" || parsed.username || parsed.password || !externalHosts.includes(parsed.hostname)) throw new Error("\u6B64\u94FE\u63A5\u4E0D\u5728\u652F\u6301\u7684\u5B98\u65B9\u7AD9\u70B9\u4E2D");
        await import_electron2.shell.openExternal(url);
        return;
      }
      case "copy":
        import_electron2.clipboard.writeText(external_exports.object({ text: external_exports.string().max(24e3) }).parse(raw).text);
        return;
      case "window": {
        const { action } = external_exports.object({ action: external_exports.enum(["minimize", "maximize", "close"]) }).parse(raw);
        if (action === "minimize") mainWindow?.minimize();
        else if (action === "maximize") mainWindow?.isMaximized() ? mainWindow.unmaximize() : mainWindow?.maximize();
        else mainWindow?.close();
        return;
      }
      default:
        throw new Error("\u4E0D\u652F\u6301\u7684\u64CD\u4F5C");
    }
  }
  import_electron2.ipcMain.handle("qinglan:command", async (event, name, input) => {
    try {
      const frameUrl = event.senderFrame?.url || "";
      const trusted = frameUrl === (0, import_node_url.pathToFileURL)(import_node_path10.default.join(import_electron2.app.getAppPath(), "dist", "index.html")).href || !import_electron2.app.isPackaged && frameUrl === "http://127.0.0.1:5178/";
      if (!trusted || event.sender !== mainWindow?.webContents || event.senderFrame !== event.sender.mainFrame) throw new Error("\u4E0D\u5141\u8BB8\u7684\u8BF7\u6C42\u6765\u6E90");
      return { ok: true, value: await command(name, input) };
    } catch (error) {
      return { ok: false, error: error instanceof external_exports.ZodError ? "\u8F93\u5165\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u5FC5\u586B\u5185\u5BB9" : safeMessage(error) };
    }
  });
  if (process.env.QINGLAN_DEV_URL === "http://127.0.0.1:5178") await mainWindow.loadURL(process.env.QINGLAN_DEV_URL);
  else await mainWindow.loadFile(import_node_path10.default.join(import_electron2.app.getAppPath(), "dist", "index.html"));
  mainWindow.show();
  social.start();
  let quitting = false;
  import_electron2.app.on("before-quit", (event) => {
    if (quitting) return;
    event.preventDefault();
    quitting = true;
    jobs.cancelAll();
    auth.cancel();
    void Promise.allSettled([rooms.stop(), social.shutdown()]).finally(() => import_electron2.app.quit());
    setTimeout(() => import_electron2.app.exit(), 4e3).unref();
  });
  import_electron2.app.on("window-all-closed", () => import_electron2.app.quit());
}
/*! Bundled license information:

smol-toml/dist/error.js:
smol-toml/dist/primitive.js:
smol-toml/dist/date.js:
smol-toml/dist/extract.js:
smol-toml/dist/util.js:
smol-toml/dist/struct.js:
smol-toml/dist/parse.js:
smol-toml/dist/stringify.js:
smol-toml/dist/index.js:
  (*!
   * Copyright (c) Squirrel Chat et al., All rights reserved.
   * SPDX-License-Identifier: BSD-3-Clause
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   *    list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the
   *    documentation and/or other materials provided with the distribution.
   * 3. Neither the name of the copyright holder nor the names of its contributors
   *    may be used to endorse or promote products derived from this software without
   *    specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
   * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
   * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
   * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
   * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *)
*/
//# sourceMappingURL=main.cjs.map
