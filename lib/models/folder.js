"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Folder = (function () {
    function Folder(obj) {
        if (obj === void 0) { obj = {}; }
        this.type = 'folder';
        Object.assign(this, obj);
    }
    Object.defineProperty(Folder.prototype, "dirPath", {
        get: function () { return this.path; },
        enumerable: true,
        configurable: true
    });
    return Folder;
}());
exports.Folder = Folder;
//# sourceMappingURL=folder.js.map