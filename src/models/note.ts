import { dirname } from 'path';

export class Note {
  readonly type = 'note';
  id: string;
  path: string;
  get dirPath(): string { return dirname(this.path); }
  body: string;
  constructor(obj: any = {}) {
    Object.assign(this, obj);
  }
}
