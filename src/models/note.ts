export class Note {
  readonly type = 'note';
  id: string;
  path: string;
  body: string;
  constructor(obj: any = {}) {
    Object.assign(this, obj);
  }
}
