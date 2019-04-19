"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function typeOf(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}
var MainImplements = /** @class */ (function () {
    function MainImplements() {
        this.storage = window.localStorage;
    }
    return MainImplements;
}());
var Local = /** @class */ (function (_super) {
    __extends(Local, _super);
    function Local() {
        return _super.call(this) || this;
    }
    Local.prototype.clear = function (key) {
        return this.storage.clear();
    };
    Local.prototype.getItem = function (key) {
        // @ts-ignore
        if (!Object.is(typeOf(key), 'string')) {
            throw Error('key must be a string');
            return false;
        }
        try {
            return JSON.parse(this.storage.getItem(key));
        }
        catch (error) {
            if (error) {
                return this.storage.getItem(key);
            }
        }
    };
    Local.prototype.remove = function (key) {
        return this.storage.removeItem(key);
    };
    Local.prototype.setItem = function (key, value) {
        // @ts-ignore
        Object.is(typeOf(value), 'object') || Object.is(typeOf(value), 'array') ? this.storage.setItem(key, JSON.stringify(value)) : this.storage.setItem(key, value);
        return this;
    };
    return Local;
}(MainImplements));
var Session = /** @class */ (function (_super) {
    __extends(Session, _super);
    function Session() {
        var _this = _super.call(this) || this;
        _this.storage = window.sessionStorage;
        return _this;
    }
    return Session;
}(Local));
var session = new Session();
exports.session = session;
var local = new Local();
exports.local = local;
exports.default = new Local();
