import { Note } from './note';
import { Folder } from './folder';

export class Resource {
  id: string;
  provider: string = 'file';
  rootPath: string = '';
  currentPath: string = '/';
  childrenPaths: string[] = [];
  // childrenStates: { [path: string]: ResourceState } = {};
  childrenEntities: { [path: string]: (Folder | Note)} = {};
  selectedIds: string[] = [];
  openedId: string | null = null;
  loading: boolean = false;
  loaded: boolean = false;

  constructor(obj: any = {}) {
    Object.assign(this, obj);
  }
}

export class ResourceState {
  path: string;
  expanded: boolean = false;
  constructor(obj: any = {}) {
    Object.assign(this, obj);
  }
}
