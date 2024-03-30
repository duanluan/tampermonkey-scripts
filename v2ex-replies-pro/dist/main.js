/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Store)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 存储
 */
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
  }
  return _createClass(Store, null, [{
    key: "get",
    value:
    /**
     * 获取
     * @param key 键
     */
    function get(key) {
      return GM_getValue(key);
    }

    /**
     * 设置
     * @param key 键
     * @param value 值
     */
  }, {
    key: "set",
    value: function set(key, value) {
      GM_setValue(key, value);
    }
  }]);
}();


/***/ }),

/***/ 197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var _api_V2ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(569);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Reply = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Reply() {
    _classCallCheck(this, Reply);
  }
  return _createClass(Reply, null, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var selector, $body, $head, $allReplies, $repliesNumber, $opUserName, repliesNumber, opUserName, replies, i, JsStore, loadWorkerScript, connection, _i, reply, replyId, created, created1, createdFormat, createdAgo, member, username, avatar, replyDivId, $replyDivId, $fade, fadeHtml, contentRendered, atSearchStartIndex, atSearchStr, atLinkIndex, atUsername, replaceStr, html, inserted, rows, _iterator, _step, row, showTaSay;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(location.href.indexOf('v2ex.com/t/') === -1)) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              _context4.next = 4;
              return V2ex.checkToken();
            case 4:
              if (_context4.sent) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return");
            case 6:
              selector = {
                // 回复列表
                repliesBox: '#Main .box:eq(1)',
                // 所有回复
                allReplies: '#Main .box:eq(1) .cell:not(:eq(0))',
                // 回复数
                repliesNumber: '#Main .box:eq(1) .gray',
                // OP 名
                opUserName: '.header .gray a:eq(0)',
                // @ 链接
                atLink: '.at-link',
                // 右侧内容
                taSay: '.ta-say'
              }, $body = $(document.body), $head = $(document.head), $allReplies = $(selector.allReplies), $repliesNumber = $(selector.repliesNumber), $opUserName = $(selector.opUserName); // 添加弹窗样式
              $head.append("<style>\n      .winbox".concat(selector.taSay, " {\n        border-shadow: 0 14px 12px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%) !important;\n      }\n      .winbox").concat(selector.taSay, " .wb-drag {\n        background-color: #e2e2e2;\n        color: #666;\n      }\n    </style>"));

              // 隐藏原回复
              $allReplies.hide();
              // 获取回复数
              repliesNumber = $repliesNumber.text().substring(0, $repliesNumber.text().indexOf('条')); // 获取 OP 名
              opUserName = $opUserName.text(); // 获取所有回复
              replies = [];
              i = 1;
            case 13:
              if (!(i <= Math.ceil(Number(repliesNumber) / 20))) {
                _context4.next = 25;
                break;
              }
              _context4.t0 = replies.push;
              _context4.t1 = replies;
              _context4.t2 = _toConsumableArray;
              _context4.next = 19;
              return V2ex.getReplies(topicId, i);
            case 19:
              _context4.t3 = _context4.sent;
              _context4.t4 = (0, _context4.t2)(_context4.t3);
              _context4.t0.apply.call(_context4.t0, _context4.t1, _context4.t4);
            case 22:
              i++;
              _context4.next = 13;
              break;
            case 25:
              (function () {
                "use strict";

                var e = {
                    d: function d(t, n) {
                      for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: n[o]
                      });
                    },
                    o: function o(e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t);
                    },
                    r: function r(e) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                      }), Object.defineProperty(e, "__esModule", {
                        value: !0
                      });
                    }
                  },
                  t = {};
                e.r(t), e.d(t, {
                  API: function API() {
                    return r;
                  },
                  CONNECTION_STATUS: function CONNECTION_STATUS() {
                    return p;
                  },
                  Connection: function Connection() {
                    return b;
                  },
                  DATA_TYPE: function DATA_TYPE() {
                    return o;
                  },
                  ERROR_TYPE: function ERROR_TYPE() {
                    return l;
                  },
                  EVENT: function EVENT() {
                    return i;
                  },
                  IDB_MODE: function IDB_MODE() {
                    return u;
                  },
                  OCCURENCE: function OCCURENCE() {
                    return a;
                  },
                  QUERY_OPTION: function QUERY_OPTION() {
                    return s;
                  },
                  WORKER_STATUS: function WORKER_STATUS() {
                    return n;
                  },
                  forObj: function forObj() {
                    return q;
                  },
                  promise: function promise() {
                    return d;
                  },
                  promiseAll: function promiseAll() {
                    return v;
                  },
                  promiseResolve: function promiseResolve() {
                    return f;
                  }
                });
                var n,
                  o,
                  r,
                  i,
                  s,
                  u,
                  a,
                  p,
                  c = function () {
                    function e(e, t) {
                      this.type = e, this._info = t, this.message = this.getMsg();
                    }
                    return e.prototype["throw"] = function () {
                      throw this;
                    }, e.prototype.log = function (e) {
                      this.status && console.log(e);
                    }, e.prototype.logError = function () {
                      console.error(this.get());
                    }, e.prototype.logWarning = function () {
                      console.warn(this.get());
                    }, e.prototype.get = function () {
                      return {
                        message: this.message,
                        type: this.type
                      };
                    }, e.prototype.getMsg = function () {
                      return this.type, this.message;
                    }, e;
                  }(),
                  l = {
                    InvalidUpdateColumn: "invalid_update_column",
                    UndefinedColumn: "undefined_column",
                    UndefinedValue: "undefined_value",
                    UndefinedColumnName: "undefined_column_name",
                    UndefinedDbName: "undefined_database_name",
                    UndefinedColumnValue: "undefined_column_value",
                    NotArray: "not_array",
                    NoValueSupplied: "no_value_supplied",
                    ColumnNotExist: "column_not_exist",
                    NoIndexFound: "no_index_found",
                    InvalidOp: "invalid_operator",
                    NullValue: "null_value",
                    WrongDataType: "wrong_data_type",
                    TableNotExist: "table_not_exist",
                    DbNotExist: "db_not_exist",
                    ConnectionAborted: "connection_aborted",
                    ConnectionClosed: "connection_closed",
                    NotObject: "not_object",
                    InvalidConfig: "invalid_config",
                    DbBlocked: "Db_blocked",
                    IndexedDbNotSupported: "indexeddb_not_supported",
                    NullValueInWhere: "null_value_in_where",
                    InvalidJoinQuery: "invalid_join_query",
                    InvalidQuery: "invalid_query",
                    ImportScriptsFailed: "import_scripts_failed",
                    MethodNotExist: "method_not_exist",
                    Unknown: "unknown",
                    InvalidMiddleware: "invalid_middleware"
                  };
                (function (e) {
                  e.Registered = "registerd", e.Failed = "failed", e.NotStarted = "not_started";
                })(n || (n = {})), function (e) {
                  e.String = "string", e.Object = "object", e.Array = "array", e.Number = "number", e.Boolean = "boolean", e.Null = "null", e.DateTime = "date_time";
                }(o || (o = {})), function (e) {
                  e.InitDb = "init_db", e.MapGet = "map_get", e.MapSet = "map_set", e.MapHas = "map_has", e.MapDelete = "map_delete", e.Select = "select", e.Insert = "insert", e.Update = "update", e.Remove = "remove", e.OpenDb = "open_db", e.Clear = "clear", e.DropDb = "drop_db", e.Count = "count", e.ChangeLogStatus = "change_log_status", e.Terminate = "terminate", e.Transaction = "transaction", e.CloseDb = "close_db", e.Union = "union", e.Intersect = "intersect", e.ImportScripts = "import_scripts", e.Middleware = "middleware";
                }(r || (r = {})), function (e) {
                  e.RequestQueueEmpty = "requestQueueEmpty", e.RequestQueueFilled = "requestQueueFilled", e.Upgrade = "upgrade", e.Create = "create", e.Open = "open";
                }(i || (i = {})), function (e) {
                  e.Where = "where", e.Like = "like", e.Regex = "regex", e.In = "in", e.Equal = "=", e.Between = "-", e.GreaterThan = ">", e.LessThan = "<", e.GreaterThanEqualTo = ">=", e.LessThanEqualTo = "<=", e.NotEqualTo = "!=", e.Aggregate = "aggregate", e.Max = "max", e.Min = "min", e.Avg = "avg", e.Count = "count", e.Sum = "sum", e.List = "list", e.Or = "or", e.Skip = "skip", e.Limit = "limit", e.And = "and", e.IgnoreCase = "ignoreCase", e.Then = "then";
                }(s || (s = {})), function (e) {
                  e.ReadOnly = "readonly", e.ReadWrite = "readwrite";
                }(u || (u = {})), function (e) {
                  e.First = "f", e.Last = "l", e.Any = "a";
                }(a || (a = {})), function (e) {
                  e.Connected = "connected", e.Closed = "closed", e.NotStarted = "not_started", e.UnableToStart = "unable_to_start", e.ClosedByJsStore = "closed_by_jsstore";
                }(p || (p = {}));
                var _h,
                  d = function d(e) {
                    return new Promise(e);
                  },
                  f = function f(e) {
                    return Promise.resolve(e);
                  },
                  _ = function () {
                    function e(e) {
                      this._events = {}, this._ctx = e;
                    }
                    return e.prototype.on = function (e, t) {
                      return null == this._events[e] && (this._events[e] = []), this._events[e].push(t), this;
                    }, e.prototype.off = function (e, t) {
                      if (this._events[e]) if (t) {
                        var n = this._events[e].indexOf(t);
                        this._events[e].splice(n, 1);
                      } else this._events[e] = [];
                    }, e.prototype.emit = function (e) {
                      for (var t = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                      var r = this._events[e] || [],
                        i = 0,
                        s = r.length,
                        u = [];
                      return new Promise(function (e) {
                        var o = function o() {
                          i < s ? function () {
                            var e = r[i++];
                            if (e) {
                              var o = e.call.apply(e, function (e, t, n) {
                                if (n || 2 === arguments.length) for (var o, r = 0, i = t.length; r < i; r++) !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
                                return e.concat(o || Array.prototype.slice.call(t));
                              }([t._ctx], n, !1));
                              return o && o.then ? o : Promise.resolve(o);
                            }
                          }().then(function (e) {
                            u.push(e), o();
                          }) : e(u);
                        };
                        o();
                      });
                    }, e.prototype.destroy = function () {
                      this._events = null, this._ctx = null;
                    }, e;
                  }(),
                  y = function () {
                    function e(e) {
                      this.isConOpened_ = !1, this.isDbIdle_ = !0, this.requestQueue_ = [], this.isCodeExecuting_ = !1, this.inactivityTimer_ = -1e3, this.middlewares = [], this.eventBus_ = new _(this), this.whiteListApi_ = [r.InitDb, r.OpenDb, r.MapGet, r.MapSet, r.MapHas, r.MapDelete, r.ChangeLogStatus, r.Terminate, r.DropDb], this.isWorker = !0, this.logger = new c(null), e ? (this.worker_ = e, this.worker_.onmessage = this.onMessageFromWorker_.bind(this)) : (this.isWorker = !1, this.initQueryManager_());
                    }
                    return Object.defineProperty(e.prototype, "jsstoreWorker", {
                      get: function get() {
                        return this.$worker || self.JsStoreWorker;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), e.prototype.initQueryManager_ = function () {
                      var e = this.jsstoreWorker;
                      e && (this.queryManager = new e.QueryManager(this.processFinishedQuery_.bind(this)));
                    }, e.prototype.onMessageFromWorker_ = function (e) {
                      this.processFinishedQuery_(e.data);
                    }, e.prototype.processFinishedQuery_ = function (e) {
                      var t = this.requestQueue_.shift();
                      if (t) {
                        if (this.logger.log("request ".concat(t.name, " finished")), e.error) t.onError(e.error);else {
                          switch (t.name) {
                            case r.OpenDb:
                            case r.InitDb:
                              this.isConOpened_ = !0;
                              break;
                            case r.Terminate:
                              this.isConOpened_ = !1, !0 === this.isWorker && this.worker_.terminate();
                            case r.DropDb:
                              this.isConOpened_ = !1, this.requestQueue_ = [], this.isDbIdle_ = !0;
                              break;
                            case r.CloseDb:
                              this.isDbIdle_ = !0, this.eventBus_.emit(i.RequestQueueEmpty, []), this.requestQueue_.length > 0 && this.openDb_(!1);
                          }
                          t.onSuccess(e.result);
                        }
                        this.isCodeExecuting_ = !1, this.executeQry_();
                      }
                    }, e.prototype.openDb_ = function (e) {
                      void 0 === e && (e = !0);
                      var t = {
                        name: r.OpenDb,
                        query: {
                          name: this.database.name,
                          version: this.database.version
                        },
                        onSuccess: function onSuccess() {},
                        onError: function onError(e) {
                          console.error(e);
                        }
                      };
                      e ? this.prcoessExecutionOfQry_(t, 0) : this.requestQueue_.splice(0, 0, t);
                    }, e.prototype.executeMiddleware_ = function (e) {
                      var t = this;
                      return d(function (n) {
                        var o = 0,
                          r = t.middlewares.length - 1,
                          i = function i() {
                            if (o <= r) {
                              var s = t.middlewares[o++](e);
                              s && s.then || (s = f(s)), s.then(function (e) {
                                i();
                              });
                            } else n();
                          };
                        i();
                      });
                    }, e.prototype.callResultMiddleware = function (e, t) {
                      return d(function (n) {
                        var o = 0,
                          r = e.length - 1,
                          i = function i() {
                            if (o <= r) {
                              var s = e[o++](t);
                              s.then || (s = f(s)), s.then(function (e) {
                                t = e, i();
                              });
                            } else n(t);
                          };
                        i();
                      });
                    }, e.prototype.pushApi = function (e) {
                      var t = this;
                      return new Promise(function (n, o) {
                        var s = [];
                        e.onResult = function (e) {
                          s.push(function (t) {
                            return e(t);
                          });
                        }, t.executeMiddleware_(e).then(function () {
                          e.onSuccess = function (o) {
                            t.callResultMiddleware(s, o).then(function (e) {
                              n(e);
                            })["catch"](function (t) {
                              e.onError(t);
                            });
                          }, e.onError = function (e) {
                            s = [], o(e);
                          }, 0 === t.requestQueue_.length && (t.eventBus_.emit(i.RequestQueueFilled, []), t.isDbIdle_ && t.isConOpened_ && ([r.InitDb, r.CloseDb, r.DropDb, r.OpenDb, r.Terminate].indexOf(e.name) >= 0 || t.openDb_()), clearTimeout(t.inactivityTimer_)), t.prcoessExecutionOfQry_(e);
                        })["catch"](o);
                      });
                    }, e.prototype.prcoessExecutionOfQry_ = function (e, t) {
                      this.isDbIdle_ = !1, null != t ? this.requestQueue_.splice(t, 0, e) : this.requestQueue_.push(e), this.logger.log("request pushed: " + e.name), this.executeQry_();
                    }, e.prototype.executeQry_ = function () {
                      var e = this,
                        t = this.requestQueue_.length;
                      if (!this.isCodeExecuting_ && t > 0) {
                        if (!0 === this.isConOpened_) return void this.sendRequestToWorker_(this.requestQueue_[0]);
                        var n = this.requestQueue_.findIndex(function (t) {
                          return e.whiteListApi_.indexOf(t.name) >= 0;
                        });
                        n >= 0 && (this.requestQueue_.splice(0, 0, this.requestQueue_.splice(n, 1)[0]), this.sendRequestToWorker_(this.requestQueue_[0]));
                      } else 0 === t && !1 === this.isDbIdle_ && this.isConOpened_ && (this.inactivityTimer_ = setTimeout(function () {
                        e.prcoessExecutionOfQry_({
                          name: r.CloseDb,
                          onSuccess: function onSuccess() {},
                          onError: function onError(e) {
                            console.error(e);
                          }
                        });
                      }, 100));
                    }, e.prototype.sendRequestToWorker_ = function (e) {
                      this.isCodeExecuting_ = !0, this.logger.log("request executing: " + e.name);
                      var t = {
                        name: e.name,
                        query: e.query
                      };
                      !0 === this.isWorker ? this.worker_.postMessage(t) : this.queryManager.run(t);
                    }, e;
                  }(),
                  m = function () {
                    function e(e) {
                      this.con = e;
                    }
                    return e.prototype.get = function (e) {
                      return this.con.pushApi({
                        name: r.MapGet,
                        query: e
                      });
                    }, e.prototype.has = function (e) {
                      return this.con.pushApi({
                        name: r.MapHas,
                        query: e
                      });
                    }, e.prototype.set = function (e, t) {
                      return this.con.pushApi({
                        name: r.MapSet,
                        query: {
                          key: e,
                          value: t
                        }
                      });
                    }, e.prototype["delete"] = function (e) {
                      return this.con.pushApi({
                        name: r.MapDelete,
                        query: e
                      });
                    }, e;
                  }(),
                  g = (_h = function h(e, t) {
                    return _h = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (e, t) {
                      e.__proto__ = t;
                    } || function (e, t) {
                      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }, _h(e, t);
                  }, function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                      this.constructor = e;
                    }
                    _h(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
                  }),
                  b = function (e) {
                    function t(t) {
                      var n = e.call(this, t) || this;
                      return n.Map = new m(n), n;
                    }
                    return g(t, e), t.prototype.initDb = function (e) {
                      var t = this;
                      return this.database = e, this.pushApi({
                        name: r.InitDb,
                        query: e
                      }).then(function (e) {
                        var n,
                          o = e.database;
                        return e.isCreated && (n = e.oldVersion ? t.eventBus_.emit(i.Upgrade, o, e.oldVersion, e.newVersion) : t.eventBus_.emit(i.Create, o)), (n || f()).then(function (e) {
                          return t.eventBus_.emit(i.Open, o);
                        }).then(function (t) {
                          return e.isCreated;
                        });
                      });
                    }, t.prototype.dropDb = function () {
                      return this.pushApi({
                        name: r.DropDb
                      });
                    }, t.prototype.select = function (e) {
                      return this.pushApi({
                        name: r.Select,
                        query: e
                      });
                    }, t.prototype.count = function (e) {
                      return this.pushApi({
                        name: r.Count,
                        query: e
                      });
                    }, t.prototype.insert = function (e) {
                      return this.pushApi({
                        name: r.Insert,
                        query: e
                      });
                    }, t.prototype.update = function (e) {
                      return this.pushApi({
                        name: r.Update,
                        query: e
                      });
                    }, t.prototype.remove = function (e) {
                      return this.pushApi({
                        name: r.Remove,
                        query: e
                      });
                    }, t.prototype.clear = function (e) {
                      return this.pushApi({
                        name: r.Clear,
                        query: e
                      });
                    }, Object.defineProperty(t.prototype, "logStatus", {
                      set: function set(e) {
                        this.logger.status = e, this.pushApi({
                          name: r.ChangeLogStatus,
                          query: e
                        });
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.openDb = function (e, t) {
                      var n = this;
                      return this.pushApi({
                        name: r.OpenDb,
                        query: {
                          version: t,
                          name: e
                        }
                      }).then(function (e) {
                        return n.database = e, e;
                      });
                    }, t.prototype.getDbList = function () {
                      return console.warn("Api getDbList is recommended to use for debugging only. Do not use in code."), indexedDB.databases();
                    }, t.prototype.get = function (e) {
                      return console.warn("This API is obsolete, please use Map"), this.Map.get(e);
                    }, t.prototype.set = function (e, t) {
                      return console.warn("This API is obsolete, please use Map"), this.Map.set(e, t);
                    }, t.prototype.terminate = function () {
                      return this.pushApi({
                        name: r.Terminate
                      });
                    }, t.prototype.transaction = function (e) {
                      return this.pushApi({
                        name: r.Transaction,
                        query: e
                      });
                    }, t.prototype.on = function (e, t) {
                      this.eventBus_.on(e, t);
                    }, t.prototype.off = function (e, t) {
                      this.eventBus_.off(e, t);
                    }, t.prototype.union = function (e) {
                      return this.pushApi({
                        name: r.Union,
                        query: e
                      });
                    }, t.prototype.intersect = function (e) {
                      return this.pushApi({
                        name: r.Intersect,
                        query: e
                      });
                    }, t.prototype.addPlugin = function (e, t) {
                      return e.setup(this, t);
                    }, t.prototype.addMiddleware = function (e, t) {
                      return t ? this.pushApi({
                        name: r.Middleware,
                        query: e
                      }) : (this.middlewares.push(e), Promise.resolve());
                    }, t.prototype.importScripts = function () {
                      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                      return this.pushApi({
                        name: r.ImportScripts,
                        query: e
                      });
                    }, t;
                  }(y),
                  v = function v(e) {
                    return Promise.all(e);
                  },
                  q = function q(e, t) {
                    for (var n in e) t(n, e[n]);
                  };
                JsStore = t;
              })();
              /**
               * 加载 JsStore Worker 脚本为 blob URL
               */
              loadWorkerScript = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                          var xhr = new XMLHttpRequest();
                          xhr.open('GET', 'https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.worker.min.js', true);
                          xhr.responseType = 'blob';
                          xhr.onload = function () {
                            if (this.status === 200) {
                              resolve(URL.createObjectURL(this.response));
                            } else {
                              reject(new Error('Failed to load worker script'));
                            }
                          };
                          xhr.send();
                        }));
                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function loadWorkerScript() {
                  return _ref.apply(this, arguments);
                };
              }(); // 使用 Blob URL 创建 Worker
              _context4.t5 = JsStore.Connection;
              _context4.t6 = Worker;
              _context4.next = 31;
              return loadWorkerScript();
            case 31:
              _context4.t7 = _context4.sent;
              _context4.t8 = new _context4.t6(_context4.t7);
              connection = new _context4.t5(_context4.t8);
              _context4.next = 36;
              return connection.initDb({
                name: 'v2ex-replies-pro',
                tables: [{
                  name: 'rendered_replies',
                  columns: {
                    replyId: {
                      primaryKey: true,
                      dataType: 'number'
                    },
                    username: {
                      dataType: 'string'
                    },
                    created: {
                      dataType: 'number'
                    },
                    html: {
                      dataType: 'string'
                    },
                    contentRendered: {
                      dataType: 'string'
                    }
                  }
                }]
              });
            case 36:
              _context4.next = 38;
              return connection.clear('rendered_replies');
            case 38:
              _i = 0;
            case 39:
              if (!(_i < replies.length)) {
                _context4.next = 61;
                break;
              }
              reply = replies[_i], replyId = reply.id, created = reply.created, created1 = Number(created + '000'), createdFormat = moment(created1).format('YYYY-MM-DD HH:mm:ss'), createdAgo = moment(created1).fromNow(), member = reply.member, username = member.username, avatar = member.avatar, replyDivId = 'r_' + replyId, $replyDivId = $('#' + replyDivId), $fade = $replyDivId.find('.fade'), fadeHtml = $fade.length === 0 ? '' : $fade.prop('outerHTML'); // 删除原回复
              $replyDivId.remove();
              contentRendered = reply.content_rendered, atSearchStartIndex = 0; // 可能会 @ 多个人
              atSearchStr = '@<a href=\"/member/';
            case 44:
              if (false) {}
              atLinkIndex = contentRendered.indexOf(atSearchStr, atSearchStartIndex);
              if (!(atLinkIndex === -1)) {
                _context4.next = 48;
                break;
              }
              return _context4.abrupt("break", 54);
            case 48:
              // 获取 @ 的用户名
              atUsername = contentRendered.substring(atLinkIndex + atSearchStr.length, contentRendered.indexOf('">', atLinkIndex)); // 回复内容，其中 @ 链接添加了 class 和 @ 的用户名传递
              replaceStr = "@<a class=\"".concat(selector.atLink.substring(1), "\" data-reply-div-id=\"").concat(replyDivId, "\" data-username=\"").concat(atUsername, "\" data-created=\"").concat(created, "\" onclick=\"return false;\" href=\"/member/").concat(atUsername);
              contentRendered = contentRendered.replaceAll("@<a href=\"/member/".concat(atUsername), replaceStr);
              atSearchStartIndex = atLinkIndex + replaceStr.length;
              _context4.next = 44;
              break;
            case 54:
              html = "\n          <!-- \u6B64\u5904\u7684 style \u4E3A\u6A21\u4EFF .cell \u6837\u5F0F -->\n          <div id=\"".concat(replyDivId, "\" style=\"font-size: 14px; line-height: 150%; border-bottom: 1px solid #e2e2e2\">\n            <div style=\"display: flex;\">\n              <div style=\"display: flex; flex-direction: column; align-items: center; background-color: #fafbfc; padding: 12px 0 10px 0\">\n                ").concat(username === opUserName ? "\n                  <div style=\"height: 0\">\n                    <div style=\"position: relative; left: 44px; top: -12px; background-image: linear-gradient(225deg, #558bf6 23px, #fafbfc 0); width: 32px; height: 32px;\">\n                      <div class=\"badges\" style=\"color: white; transform: rotate(45deg); position: relative; top: -1px; right: -5px\">OP</div>\n                    </div>\n                  </div>\n                " : '', "\n                <img src=\"").concat(avatar, "\" class=\"avatar\" alt=\"").concat(username, "\" style=\"width: 48px\">\n                <div style=\"width: 120px;\">\n                  <a href=\"/member/").concat(username, "\" class=\"dark\">").concat(username, "</a>\n                </div>\n              </div>\n              <div style=\"padding: 10px 10px 10px 12px; width: 100%\">\n                <div style=\"display: flex; justify-content: space-between\">\n                  <div>\n                    &nbsp;<span class=\"ago\" title=\"").concat(createdFormat, "\">").concat(createdAgo, "</span>&nbsp;").concat(fadeHtml, "\n                  </div>\n                  <div>\n                    <!-- \u6B64\u5904\u4E3A\u539F\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8 -->\n                    <div id=\"thank_area_").concat(replyId, "\" class=\"thank_area\"><a href=\"#;\" onclick=\"if (confirm('\u786E\u8BA4\u8981\u4E0D\u518D\u663E\u793A\u6765\u81EA @").concat(username, " \u7684\u8FD9\u6761\u56DE\u590D\uFF1F')) { ignoreReply(").concat(replyId, ", ").concat(once, "); }\" class=\"thank\" style=\"color: #ccc;\">\u9690\u85CF</a> &nbsp; &nbsp; <a href=\"#;\" onclick=\"if (confirm('\u786E\u8BA4\u82B1\u8D39 10 \u4E2A\u94DC\u5E01\u5411 @").concat(username, " \u7684\u8FD9\u6761\u56DE\u590D\u53D1\u9001\u611F\u8C22\uFF1F')) { thankReply(").concat(replyId, "); }\" class=\"thank\">\u611F\u8C22\u56DE\u590D\u8005</a></div> &nbsp; <a href=\"#;\" onclick=\"replyOne('").concat(username, "');\"><img src=\"/static/img/reply_neue.png\" align=\"absmiddle\" border=\"0\" alt=\"Reply\" width=\"20\"></a> &nbsp;&nbsp; <span class=\"no\">1</span>\n                  </div>\n                </div>\n                <div style=\"text-align: left\">\n                  <span>").concat(contentRendered, "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        "); // 保存已渲染的回复
              _context4.next = 57;
              return connection.insert({
                into: 'rendered_replies',
                validation: false,
                skipDataCheck: false,
                values: [{
                  replyId: replyId,
                  username: username,
                  created: created,
                  html: html,
                  contentRendered: contentRendered
                }]
              });
            case 57:
              inserted = _context4.sent;
            case 58:
              _i++;
              _context4.next = 39;
              break;
            case 61:
              _context4.next = 63;
              return connection.select({
                from: 'rendered_replies',
                order: {
                  by: 'created',
                  type: 'asc'
                }
              });
            case 63:
              rows = _context4.sent;
              _iterator = _createForOfIteratorHelper(rows);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  row = _step.value;
                  $(selector.repliesBox).append(row.html);
                }

                // 给 @ 链接添加点击事件
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              $body.on('click', selector.atLink, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var $this;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      $this = $(this);
                      _context2.next = 3;
                      return showTaSay(connection, $this.data('replyDivId'), $this.data('username'), $this.data('created'));
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              })));
              // endregion

              /**
               * 展示 TA 说了什么
               * @param connection 数据库连接
               * @param replyDivId 回复的 div id
               * @param username 用户名
               * @param created 创建时间
               */
              showTaSay = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(connection, replyDivId, username, created) {
                  var $reply, html, isGeByPrev, isHighlighted, rows, _i2, row, borderStyle;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        // 关闭弹窗
                        if (Reply.winbox) {
                          Reply.winbox.close();
                        }

                        // 高亮点击 @ 链接的那条回复
                        $reply = $('#' + replyDivId);
                        $reply.css('border', '2px solid');
                        // 跳转到高亮回复
                        $('html,body').animate({
                          scrollTop: $reply.offset().top - $(window).height() / 2
                        }, 500);
                        html = '', isGeByPrev = true, isHighlighted = false;
                        _context3.next = 7;
                        return connection.select({
                          from: 'rendered_replies',
                          where: {
                            username: username
                          }
                        });
                      case 7:
                        rows = _context3.sent;
                        for (_i2 = 0; _i2 < rows.length; _i2++) {
                          row = rows[_i2];
                          borderStyle = 'border-bottom: 1px solid #e2e2e2;'; // 在点击回复所在位置高亮
                          if (!(created > row.created) && isGeByPrev) {
                            borderStyle += 'border-top: 2px solid';
                            isHighlighted = true;
                          } else if (_i2 === rows.length - 1 && !isHighlighted) {
                            borderStyle = 'border-bottom: 2px solid';
                          }
                          html += "\n          <div style=\"".concat(borderStyle, "\">\n            ").concat($(row.html).find('.ago').parent().prop('outerHTML'), "\n            <div style=\"padding-bottom: 5px\">").concat(row.contentRendered, "</div>\n          </div>\n        ");
                          // 当前条是否为之前的回复，用于下一条判断是否需要高亮
                          isGeByPrev = created > row.created;
                        }
                        Reply.winbox = new WinBox({
                          "class": selector.taSay.substring(1),
                          title: username + ' 说了什么？',
                          x: localStorage.getItem('ta_say_x') || 'right',
                          y: localStorage.getItem('ta_say_y') || 'bottom',
                          width: localStorage.getItem('ta_say_width') || '540px',
                          height: localStorage.getItem('ta_say_height') || '70%',
                          html: "<div style=\"padding: 10px; font-size: 14px\">".concat(html, "</div>"),
                          onresize: function onresize(width, height) {
                            // 改变窗口大小时记录窗口大小
                            localStorage.setItem('ta_say_width', width + 'px');
                            localStorage.setItem('ta_say_height', height + 'px');
                          },
                          onmove: function onmove(x, y) {
                            // 移动窗口时记录窗口位置
                            localStorage.setItem('ta_say_x', x);
                            localStorage.setItem('ta_say_y', y);
                          },
                          onclose: function onclose() {
                            // 关闭弹窗时取消回复高亮
                            $reply.css('border', 'none');
                            $reply.css('border-bottom', '1px solid #e2e2e2');
                            Reply.winbox = null;
                          }
                        });
                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function showTaSay(_x, _x2, _x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }();
            case 68:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function run() {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }]);
}()));


/***/ }),

/***/ 952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Options)
});

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(915);
;// CONCATENATED MODULE: ./utils/src/gm/MenuCmd.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 选项菜单
 */
var MenuCmd = /*#__PURE__*/function () {
  function MenuCmd() {
    _classCallCheck(this, MenuCmd);
  }
  return _createClass(MenuCmd, null, [{
    key: "register",
    value:
    /**
     * 注册
     * @param name 名称
     * @param fn 点击菜单时执行的函数
     */
    function register(name, fn) {
      return GM_registerMenuCommand(name, fn);
    }

    /**
     * 注销
     * @param menuCmdId 注册时返回的 ID
     */
  }, {
    key: "unregister",
    value: function unregister(menuCmdId) {
      GM_unregisterMenuCommand(menuCmdId);
    }
  }]);
}();

;// CONCATENATED MODULE: ./utils/src/CommonOptions.ts
function CommonOptions_typeof(o) { "@babel/helpers - typeof"; return CommonOptions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CommonOptions_typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CommonOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function CommonOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CommonOptions_toPropertyKey(descriptor.key), descriptor); } }
function CommonOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommonOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommonOptions_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function CommonOptions_toPropertyKey(t) { var i = CommonOptions_toPrimitive(t, "string"); return "symbol" == CommonOptions_typeof(i) ? i : i + ""; }
function CommonOptions_toPrimitive(t, r) { if ("object" != CommonOptions_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CommonOptions_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/**
 * 选项菜单
 */
var CommonOptions = /*#__PURE__*/function () {
  function CommonOptions() {
    CommonOptions_classCallCheck(this, CommonOptions);
  }
  return CommonOptions_createClass(CommonOptions, null, [{
    key: "registerBoolOption",
    value:
    // /**
    //  * 选项 Key
    //  */
    // protected static Keys = {
    //   // xxx: 'xxx'
    // }
    //
    // /**
    //  * 选项
    //  * @private
    //  */
    // protected static options = [
    //   // {label: '', name: this.Keys.xxx, version: 1, value: false, menuCmdId: null},
    // ];

    /**
     * 注册 bool 类型的选项
     * @param option 选项
     */
    function registerBoolOption(option) {
      var _this = this;
      var val = option.value,
        valIsBool = typeof val === 'boolean';
      if (!valIsBool) {
        return;
      }
      // 注册选项
      var currentMenuCmdId = MenuCmd.register((val ? '☑️ ' : '🔲 ') + option.label, function () {
        // 点击值取反
        option.value = !option.value;
        Store/* default */.A.set(option.name, JSON.stringify(option));

        // 取消注册
        MenuCmd.unregister(currentMenuCmdId);
        // 重新注册
        _this.registerBoolOption(option);
        // 刷新页面
        window.location.reload();
      });

      // 保存选项 ID
      option.menuCmdId = currentMenuCmdId;
      Store/* default */.A.set(option.name, JSON.stringify(option));
    }

    /**
     * 注册所有选项
     * @param url 设置页面 URL
     * @param options
     */
  }, {
    key: "registerAll",
    value: function registerAll(url, options) {
      MenuCmd.register('更多设置', function () {
        window.open(url, '_blank');
      });
      var _iterator = _createForOfIteratorHelper(options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          // TODO 【调试】不保留选项的值，每次都从 Store 中获取
          // Store.set(option.name, null);

          var storeOption = Store/* default */.A.get(option.name) ? JSON.parse(Store/* default */.A.get(option.name)) : null;
          // 如果选项不存在 || 版本不一致 时重置选项
          if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
            Store/* default */.A.set(option.name, JSON.stringify(option));
            storeOption = option;
          }
          this.registerBoolOption(storeOption);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * 在页面中加载选项
     */
  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork(scriptId, loadOptionContentFn) {
      if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/' + scriptId) == -1) {
        return;
      }
      var selector = {
        scriptLinks: '#script-links',
        scriptOptions: '#script-options',
        scriptContent: '#script-content'
      };
      var $body = $(document.body),
        $scriptLinks = $(selector.scriptLinks),
        $scriptContent = $(selector.scriptContent);

      // 添加脚本设置的选项卡
      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>");
      // 脚本设置选项点击事件
      $body.on('click', selector.scriptOptions, function () {
        // 移除已选中选项的样式
        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current');

        // 添加选中选项的样式
        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.parent().addClass('current');
        loadOptionContentFn($scriptContent);
      });
    }
  }]);
}();

;// CONCATENATED MODULE: ./v2ex-replies-pro/src/Options.ts
var _Options;
function Options_typeof(o) { "@babel/helpers - typeof"; return Options_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Options_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Options_toPropertyKey(descriptor.key), descriptor); } }
function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = Options_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Options_toPropertyKey(t) { var i = Options_toPrimitive(t, "string"); return "symbol" == Options_typeof(i) ? i : i + ""; }
function Options_toPrimitive(t, r) { if ("object" != Options_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Options_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Options = /*#__PURE__*/function () {
  function Options() {
    Options_classCallCheck(this, Options);
  }
  return Options_createClass(Options, null, [{
    key: "registerAll",
    value:
    /**
     * 注册所有选项
     */
    function registerAll() {
      CommonOptions.registerAll('https://www.v2ex.com/settings', this.options);
    }

    /**
     * 在页面中加载选项
     */
  }, {
    key: "loadInV2ex",
    value: function loadInV2ex() {
      var _this = this;
      if (location.href.indexOf('v2ex.com/settings') == -1) {
        return;
      }
      var selector = {
          menuTab: 'a.tab',
          currentMenuTab: 'a.tab_current',
          scriptOptions: '#script-options',
          scriptContent: '#Main .box',
          v2exTokenInput: 'input[name="v2exToken"]',
          saveOptionsBtn: '#save-options'
        },
        $body = $(document.body),
        $menuTab = $(selector.menuTab);

      // 添加脚本设置的选项卡
      $menuTab.parent().append("<a id=\"script-options\" class=\"tab\" href=\"javascript:void(0);\">\u811A\u672C\u8BBE\u7F6E</a>");
      // 脚本设置选项点击事件
      $body.on('click', selector.scriptOptions, function () {
        // 移除已选中选项的样式
        var $currentMenuTab = $(selector.currentMenuTab);
        $currentMenuTab.removeClass('tab_current');
        $currentMenuTab.addClass('tab');

        // 添加选中选项的样式
        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.removeClass('tab');
        $scriptOptions.addClass('tab_current');

        // 添加脚本设置的内容
        $(selector.scriptContent + ' div:gt(1)').remove();
        $(selector.scriptContent).append("\n        <form>\n          <div class=\"inner\">\n            <div class=\"topic_content markdown_body\">\n              <!--<p><a href=\"https://www.v2ex.com/settings/tokens\" target=\"_blank\">\u83B7\u53D6 V2EX Token</a></p>          -->\n            </div>\n            <div class=\"sep20\"></div>\n            <div class=\"social-settings-form\">\n              <div>\n                <div><a href=\"https://www.v2ex.com/settings/tokens\" target=\"_blank\">V2EX Token</a>\uFF1A</div>\n                <input type=\"password\" class=\"sl\" name=\"v2exToken\" value=\"".concat(JSON.parse(Store/* default */.A.get(_this.Keys.v2exToken)).value, "\">\n              </div>\n            </div>\n          </div>\n          <div class=\"cell_ops\">\n            <input id=\"save-options\" type=\"submit\" class=\"super normal button\" value=\"Save\">\n          </div>\n        </form>\n      "));
        $body.on('click', selector.saveOptionsBtn, function () {
          var token = $(selector.v2exTokenInput).val();
          Store/* default */.A.set(_this.Keys.v2exToken, JSON.stringify(_objectSpread(_objectSpread({}, JSON.parse(Store/* default */.A.get(_this.Keys.v2exToken))), {
            value: token
          })));
          layer.msg('保存成功');
          return false;
        });
      });
    }
  }]);
}();
_Options = Options;
/**
 * 选项 Key
 */
_defineProperty(Options, "Keys", {
  v2exToken: 'v2exToken'
});
/**
 * 选项
 * @private
 */
_defineProperty(Options, "options", [{
  label: 'V2EX Token',
  name: _Options.Keys.v2exToken,
  version: 1,
  value: '',
  menuCmdId: null
}]);


/***/ }),

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Reply)
/* harmony export */ });
/* harmony import */ var _api_V2ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(569);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Reply = /*#__PURE__*/function () {
  function Reply() {
    _classCallCheck(this, Reply);
  }
  return _createClass(Reply, null, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var selector, $body, $head, $repliesNumber, $atLinks, atLinkReg, atLinkMatcher, atLinkAllMatcher, repliesNumber, replies, i, userAndAtUserReplyHtml, _iterator, _step, _loop, _iterator2, _step2, _loop2;
        return _regeneratorRuntime().wrap(function _callee$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(location.href.indexOf('v2ex.com/t/') === -1)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _context3.next = 4;
              return _api_V2ex__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkToken();
            case 4:
              if (_context3.sent) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              selector = {
                // 回复数
                repliesNumber: '#Main > .box:eq(1) .gray',
                // 回复
                repliesDiv: '#Main > .box:eq(1) div[id^="r_"]',
                // @ 链接
                atLinks: '.reply_content a[href^="/member/"]',
                // 点击的回复
                clickedReply: '.clicked-reply',
                // 讨论弹窗
                taSay: '.ta-say',
                // 讨论弹窗的标题
                taSayDrag: '.ta-say .wb-drag',
                // 讨论弹窗的内容
                taSayBody: '.ta-say .wb-body',
                // 讨论弹窗的回复
                taSayRepliesDiv: '.ta-say .wb-body div[id^="r_"]'
              }, $body = $(document.body), $head = $(document.head), $repliesNumber = $(selector.repliesNumber), $atLinks = $(selector.atLinks), atLinkReg = '@<a href="\\/member\\/.+?">(.+?)<\\/a>', atLinkMatcher = new RegExp(atLinkReg), atLinkAllMatcher = new RegExp(atLinkReg, 'g'); // 根据回复数获取所有回复
              repliesNumber = $repliesNumber.text().substring(0, $repliesNumber.text().indexOf('条'));
              replies = [];
              i = 1;
            case 10:
              if (!(i <= Math.ceil(Number(repliesNumber) / 20))) {
                _context3.next = 22;
                break;
              }
              _context3.t0 = replies.push;
              _context3.t1 = replies;
              _context3.t2 = _toConsumableArray;
              _context3.next = 16;
              return _api_V2ex__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getReplies(topicId, i);
            case 16:
              _context3.t3 = _context3.sent;
              _context3.t4 = (0, _context3.t2)(_context3.t3);
              _context3.t0.apply.call(_context3.t0, _context3.t1, _context3.t4);
            case 19:
              i++;
              _context3.next = 10;
              break;
            case 22:
              // 最后一个回复加上底边框
              $(selector.repliesDiv + ':eq(-1)').css('border-bottom', $(selector.repliesDiv + ':eq(-2)').css('border-bottom'));

              // 用户和 @用户的回复的 HTML：{'用户名': ['用户的回复 HTML', '@用户的回复 HTML']}
              userAndAtUserReplyHtml = {}; // 循环 @用户名，获取他的回复和艾特他的回复
              _iterator = _createForOfIteratorHelper($atLinks.toArray());
              _context3.prev = 25;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var atLink, username, _i, _replies, _reply$content_render, reply, replyId, replyHtml, $replyHtml;
                return _regeneratorRuntime().wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      atLink = _step.value;
                      username = $(atLink).text();
                      userAndAtUserReplyHtml[username] = [];
                      _i = 0, _replies = replies;
                    case 4:
                      if (!(_i < _replies.length)) {
                        _context.next = 16;
                        break;
                      }
                      reply = _replies[_i];
                      if (!(reply.member.username != username && !((_reply$content_render = reply.content_rendered.match(atLinkAllMatcher)) !== null && _reply$content_render !== void 0 && _reply$content_render.some(function (item) {
                        var _item$match;
                        return ((_item$match = item.match(atLinkMatcher)) === null || _item$match === void 0 ? void 0 : _item$match[1]) == username;
                      })))) {
                        _context.next = 8;
                        break;
                      }
                      return _context.abrupt("continue", 13);
                    case 8:
                      replyId = reply.id;
                      replyHtml = $('#r_' + replyId).prop('outerHTML'), $replyHtml = $(replyHtml); // 修改 html 的 id，追加 _1
                      $replyHtml.attr('id', $replyHtml.attr('id') + '_1');
                      // 如果 html 中的 a 链接没有 target 属性或 target 属性不为 _blank，则添加 target="_blank"
                      $replyHtml.find('a').each(function (i, a) {
                        if (!a.target || a.target !== '_blank') {
                          a.target = '_blank';
                        }
                      });
                      userAndAtUserReplyHtml[username].push($replyHtml.prop('outerHTML'));
                    case 13:
                      _i++;
                      _context.next = 4;
                      break;
                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }, _loop);
              });
              _iterator.s();
            case 28:
              if ((_step = _iterator.n()).done) {
                _context3.next = 32;
                break;
              }
              return _context3.delegateYield(_loop(), "t5", 30);
            case 30:
              _context3.next = 28;
              break;
            case 32:
              _context3.next = 37;
              break;
            case 34:
              _context3.prev = 34;
              _context3.t6 = _context3["catch"](25);
              _iterator.e(_context3.t6);
            case 37:
              _context3.prev = 37;
              _iterator.f();
              return _context3.finish(37);
            case 40:
              // 添加弹窗样式
              $head.append("<style>\n      ".concat(selector.clickedReply, " {\n        border: 2px solid !important;      \n      }\n      ").concat(selector.taSay, " {\n        border-shadow: 0 14px 12px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%) !important\n      }\n      ").concat(selector.taSayDrag, " {\n        background-color: #e2e2e2 !important;\n        color: #666\n      }\n      ").concat(selector.taSayBody, " {\n        padding-bottom: 10px\n      }\n    </style>"));

              // 循环 @用户名
              _iterator2 = _createForOfIteratorHelper($atLinks.toArray());
              _context3.prev = 42;
              _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                var atLink, $atLink;
                return _regeneratorRuntime().wrap(function _loop2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      atLink = _step2.value;
                      $atLink = $(atLink); // @用户名点击时显示讨论弹窗
                      $atLink.on('click', function (e) {
                        e.preventDefault();

                        // 如果已经打开了讨论弹窗，跳过

                        // 移除之前加粗的回复的边框
                        $(selector.clickedReply).removeClass(selector.clickedReply.substring(1));
                        // 加粗点击 @用户名的那条回复的边框
                        var $cell = $atLink.parents('.cell');
                        $cell.addClass(selector.clickedReply.substring(1));
                        // 跳转到那条回复
                        $('html,body').animate({
                          scrollTop: $cell.offset().top - $(window).height() / 2
                        }, 500);
                        var username = $atLink.text();
                        if (Reply.winbox) {
                          Reply.winbox.close();
                        }
                        Reply.winbox = new WinBox({
                          "class": selector.taSay.substring(1),
                          title: "".concat(username, " \u5728\u8BA8\u8BBA\u2026\u2026"),
                          x: localStorage.getItem('ta_say_x') || 'right',
                          y: localStorage.getItem('ta_say_y') || 'bottom',
                          width: localStorage.getItem('ta_say_width') || '540px',
                          height: localStorage.getItem('ta_say_height') || '70%',
                          html: "".concat(userAndAtUserReplyHtml[username].join('')),
                          onresize: function onresize(width, height) {
                            // 改变窗口大小时记录窗口大小
                            localStorage.setItem('ta_say_width', width + 'px');
                            localStorage.setItem('ta_say_height', height + 'px');
                          },
                          onmove: function onmove(x, y) {
                            // 移动窗口时记录窗口位置
                            localStorage.setItem('ta_say_x', x);
                            localStorage.setItem('ta_say_y', y);
                          }
                        });

                        // 弹窗中加粗点击 @用户名的那条回复的边框
                        var $cell1 = $("#".concat($cell.attr('id'), "_1"));
                        $cell1.addClass(selector.clickedReply.substring(1));
                        // 跳转到那条回复
                        $(selector.taSayBody).animate({
                          scrollTop: $cell1.offset().top - $(selector.taSayBody).offset().top - $(selector.taSayBody).height() / 2
                        }, 500);
                      });
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }, _loop2);
              });
              _iterator2.s();
            case 45:
              if ((_step2 = _iterator2.n()).done) {
                _context3.next = 49;
                break;
              }
              return _context3.delegateYield(_loop2(), "t7", 47);
            case 47:
              _context3.next = 45;
              break;
            case 49:
              _context3.next = 54;
              break;
            case 51:
              _context3.prev = 51;
              _context3.t8 = _context3["catch"](42);
              _iterator2.e(_context3.t8);
            case 54:
              _context3.prev = 54;
              _iterator2.f();
              return _context3.finish(54);
            case 57:
              layer.msg('回复增强成功', {
                icon: 1 /*, offset: 'rb'*/
              });
            case 58:
            case "end":
              return _context3.stop();
          }
        }, _callee, null, [[25, 34, 37, 40], [42, 51, 54, 57]]);
      }));
      function run() {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }]);
}();


/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ V2ex)
});

;// CONCATENATED MODULE: ./utils/src/gm/enum/HttpDataType.ts
var HttpDataType = /*#__PURE__*/function (HttpDataType) {
  HttpDataType["JSON"] = "JSON";
  return HttpDataType;
}({});
;// CONCATENATED MODULE: ./utils/src/gm/Request.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Request = /*#__PURE__*/function () {
  function Request() {
    _classCallCheck(this, Request);
  }
  return _createClass(Request, null, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
        var onload1;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              option['method'] = 'GET';

              // 同步时返回 Promise
              if (!option.synchronous) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                GM_xmlhttpRequest(_objectSpread(_objectSpread({}, option), {}, {
                  onload: function onload(response) {
                    resolve(option.dataType === HttpDataType.JSON ? JSON.parse(response.responseText) : response.responseText);
                  },
                  onerror: function onerror(error) {
                    reject(error);
                  }
                }));
              }));
            case 5:
              onload1 = function onload1(details) {
                var response;
                if (option.dataType === HttpDataType.JSON) {
                  response = JSON.parse(details.responseText);
                } else {
                  response = details.response;
                }
                option.onload(response);
              };
              GM_xmlhttpRequest(_objectSpread(_objectSpread({}, option), {}, {
                onload: onload1
              }));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function get(_x) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }]);
}();

;// CONCATENATED MODULE: ./utils/src/gm/Info.ts
function Info_typeof(o) { "@babel/helpers - typeof"; return Info_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Info_typeof(o); }
function Info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Info_toPropertyKey(descriptor.key), descriptor); } }
function Info_createClass(Constructor, protoProps, staticProps) { if (protoProps) Info_defineProperties(Constructor.prototype, protoProps); if (staticProps) Info_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Info_toPropertyKey(t) { var i = Info_toPrimitive(t, "string"); return "symbol" == Info_typeof(i) ? i : i + ""; }
function Info_toPrimitive(t, r) { if ("object" != Info_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Info_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 获取脚本信息
 */
var Info = /*#__PURE__*/function () {
  function Info() {
    Info_classCallCheck(this, Info);
  }
  return Info_createClass(Info, null, [{
    key: "get",
    value: function get() {
      return GM_info.script;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.get().name;
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return this.get().version;
    }
  }]);
}();

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(915);
// EXTERNAL MODULE: ./v2ex-replies-pro/src/Options.ts + 2 modules
var Options = __webpack_require__(952);
;// CONCATENATED MODULE: ./v2ex-replies-pro/src/api/V2ex.ts
function V2ex_typeof(o) { "@babel/helpers - typeof"; return V2ex_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, V2ex_typeof(o); }
function V2ex_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ V2ex_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == V2ex_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(V2ex_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function V2ex_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function V2ex_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function V2ex_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, V2ex_toPropertyKey(descriptor.key), descriptor); } }
function V2ex_createClass(Constructor, protoProps, staticProps) { if (protoProps) V2ex_defineProperties(Constructor.prototype, protoProps); if (staticProps) V2ex_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function V2ex_defineProperty(obj, key, value) { key = V2ex_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function V2ex_toPropertyKey(t) { var i = V2ex_toPrimitive(t, "string"); return "symbol" == V2ex_typeof(i) ? i : i + ""; }
function V2ex_toPrimitive(t, r) { if ("object" != V2ex_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != V2ex_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var V2ex = /*#__PURE__*/function () {
  function V2ex() {
    V2ex_classCallCheck(this, V2ex);
  }
  return V2ex_createClass(V2ex, null, [{
    key: "checkToken",
    value: (
    /**
     * 检查 Token 是否有效
     */
    function () {
      var _checkToken = V2ex_asyncToGenerator( /*#__PURE__*/V2ex_regeneratorRuntime().mark(function _callee() {
        var token, result;
        return V2ex_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              token = JSON.parse(Store/* default */.A.get(Options/* default */.A.Keys.v2exToken)).value;
              if (!(!token && location.href.indexOf('v2ex.com/settings') == -1)) {
                _context.next = 4;
                break;
              }
              layer.msg('请先在“脚本设置”中填写 Token！', {
                icon: 4,
                offset: 'rb'
              }, function () {
                window.open('https://www.v2ex.com/settings', '_blank');
              });
              return _context.abrupt("return", false);
            case 4:
              _context.next = 6;
              return Request.get({
                url: this.BASE_URL + 'token',
                dataType: HttpDataType.JSON,
                synchronous: true,
                headers: {
                  'Authorization': 'Bearer ' + token
                }
              });
            case 6:
              result = _context.sent;
              if (result['success']) {
                _context.next = 10;
                break;
              }
              layer.msg(Info.getName() + "：" + result['message'], {
                icon: 2,
                offset: 'rb',
                time: 5000
              });
              return _context.abrupt("return", false);
            case 10:
              return _context.abrupt("return", true);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function checkToken() {
        return _checkToken.apply(this, arguments);
      }
      return checkToken;
    }()
    /**
     * 获取主题回复
     * @param topicId 主题 ID
     * @param page 页码
     */
    )
  }, {
    key: "getReplies",
    value: (function () {
      var _getReplies = V2ex_asyncToGenerator( /*#__PURE__*/V2ex_regeneratorRuntime().mark(function _callee2(topicId, page) {
        var result;
        return V2ex_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Request.get({
                url: this.BASE_URL + 'topics/' + topicId + '/replies' + (page ? '?p=' + page : ''),
                dataType: HttpDataType.JSON,
                synchronous: true,
                headers: {
                  'Authorization': 'Bearer ' + JSON.parse(Store/* default */.A.get(Options/* default */.A.Keys.v2exToken)).value
                }
              });
            case 2:
              result = _context2.sent;
              if (result['success']) {
                _context2.next = 6;
                break;
              }
              console.warn(Info.getName() + "：" + result['message']);
              return _context2.abrupt("return");
            case 6:
              return _context2.abrupt("return", result['result']);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getReplies(_x, _x2) {
        return _getReplies.apply(this, arguments);
      }
      return getReplies;
    }())
  }]);
}();
V2ex_defineProperty(V2ex, "BASE_URL", 'https://www.v2ex.com/api/v2/');


/***/ }),

/***/ 423:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Reply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(688);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(952);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ==UserScript==
// @name         V2EX 主题回复增强
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  增强 V2EX 主题的回复。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.v2ex.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/locale/zh-cn.min.js
// @require      https://cdn.jsdelivr.net/npm/winbox@0.2.82/dist/winbox.bundle.min.js
// @resource css https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/layer.min.css
// @require      https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==



_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  'use strict';

  // 加载 CSS
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        GM_addStyle(GM_getResourceText('css'));
        // layer 图标未知原因失效，手动添加样式
        $(document.head).append("<style>\n    .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}\n    .layui-layer-ico1{background-position:-30px 0}\n    .layui-layer-ico2{background-position:-60px 0}\n    .layui-layer-ico3{background-position:-90px 0}\n    .layui-layer-ico4{background-position:-120px 0}\n    .layui-layer-ico5{background-position:-150px 0}\n    .layui-layer-ico6{background-position:-180px 0}\n  </style>");
        _Options__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.registerAll();
        _Options__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.loadInV2ex();
        _Reply__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.run();
      case 5:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(688);
/******/ 	__webpack_require__(952);
/******/ 	__webpack_require__(197);
/******/ 	var __webpack_exports__ = __webpack_require__(423);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map