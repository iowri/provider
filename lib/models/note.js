import { Helper } from '../helper';
export class Note {
    constructor(obj = {}) {
        this.type = 'note';
        Object.assign(this, obj);
    }
    get dirPath() { return Helper.dirname(this.path); }
}
//# sourceMappingURL=note.js.map