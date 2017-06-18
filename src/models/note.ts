import { Helper } from '../helper';
export class Note {
  readonly type = 'note';
  id: string;
  path: string;
  body: string;
  get dirPath() { return Helper.dirname(this.path); }
  constructor(obj: any = {}) {
    Object.assign(this, obj);
  }
}

