"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultLookup = void 0;
var abstract_1 = require("./abstract");
var ResultLookup = /** @class */ (function (_super) {
    __extends(ResultLookup, _super);
    function ResultLookup(error, data) {
        var _this = _super.call(this) || this;
        _this.error = error;
        _this.data = data;
        return _this;
    }
    return ResultLookup;
}(abstract_1.ResultAbstract));
exports.ResultLookup = ResultLookup;
