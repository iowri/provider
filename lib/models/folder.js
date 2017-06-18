export class Folder {
    constructor(obj = {}) {
        this.type = 'folder';
        Object.assign(this, obj);
    }
    get dirPath() { return this.path; }
}
//# sourceMappingURL=folder.js.map