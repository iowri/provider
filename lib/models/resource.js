"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resource = (function () {
    function Resource(obj) {
        if (obj === void 0) { obj = {}; }
        this.provider = 'file';
        this.rootPath = '';
        this.currentPath = '/';
        this.childrenPaths = [];
        // childrenStates: { [path: string]: ResourceState } = {};
        this.childrenEntities = {};
        this.selectedIds = [];
        this.openedId = null;
        this.loading = false;
        this.loaded = false;
        Object.assign(this, obj);
    }
    return Resource;
}());
exports.Resource = Resource;
var ResourceState = (function () {
    function ResourceState(obj) {
        if (obj === void 0) { obj = {}; }
        this.expanded = false;
        Object.assign(this, obj);
    }
    return ResourceState;
}());
exports.ResourceState = ResourceState;
//# sourceMappingURL=resource.js.map