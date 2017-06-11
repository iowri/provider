import { Note } from '../models/note';
import { Folder } from '../models/folder';
import { Resource } from '../models/resource';

export interface IResourceProvider {
  load(): Promise<(Folder | Note)[]>;
  open(path: string): Promise<Note>;
  save(path: string, body: string): Promise<Note>;
  removeNote(path: string): Promise<boolean>;
  removeFolder(path: string): Promise<boolean>;
  renameNote(note: Note, name:string): Promise<Note>;
  renameFolder(folder: Folder, name:string): Promise<Folder>;
}

export interface IResourceError {
  message: string;
}
