export class Resource {
    constructor(obj = {}) {
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
}
export class ResourceState {
    constructor(obj = {}) {
        this.expanded = false;
        Object.assign(this, obj);
    }
}
//# sourceMappingURL=resource.js.map