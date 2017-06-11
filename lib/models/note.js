"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var Note = (function () {
    function Note(obj) {
        if (obj === void 0) { obj = {}; }
        this.type = 'note';
        Object.assign(this, obj);
    }
    Object.defineProperty(Note.prototype, "dirPath", {
        get: function () { return path_1.dirname(this.path); },
        enumerable: true,
        configurable: true
    });
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map