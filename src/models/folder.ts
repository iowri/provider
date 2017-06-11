import { Note } from './note';

export class Folder {
  readonly type = 'folder';
  id: string;
  name: string;
  path: string;
  constructor(obj: any = {}) {
    Object.assign(this, obj);
  }

  get dirPath(): string { return this.path; }
}
