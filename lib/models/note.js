import { dirname } from 'path';
export class Note {
    constructor(obj = {}) {
        this.type = 'note';
        Object.assign(this, obj);
    }
    get dirPath() { return dirname(this.path); }
}
//# sourceMappingURL=note.js.map