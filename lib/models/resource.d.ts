import { Note } from './note';
import { Folder } from './folder';
export declare class Resource {
    id: string;
    provider: string;
    rootPath: string;
    currentPath: string;
    childrenPaths: string[];
    childrenEntities: {
        [path: string]: (Folder | Note);
    };
    selectedIds: string[];
    openedId: string | null;
    loading: boolean;
    loaded: boolean;
    constructor(obj?: any);
}
export declare class ResourceState {
    path: string;
    expanded: boolean;
    constructor(obj?: any);
}
