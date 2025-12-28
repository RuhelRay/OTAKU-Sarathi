
export enum NavTab {
  Library = 'Library',
  Updates = 'Updates',
  History = 'History',
  Browse = 'Browse',
  More = 'More'
}

export interface Manga {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  unreadChapters: number;
  description?: string;
  status?: string;
  tags?: string[];
  sourceName?: string;
}

export interface Source {
  id: number;
  name: string;
  lang: string;
  version: string;
  updatedVersion?: string;
  isNsfw: boolean;
  repoId: number;
}

export interface Repository {
    id: number;
    name: string;
    url: string;
    sourceCount: number;
}

export interface Chapter {
    id: string;
    chapterNumber: string;
    title: string;
    scanlationGroup: string;
    date: string;
    isRead: boolean;
}

export interface UpdateItem {
    id: number;
    manga: Manga;
    chapter: Chapter;
    updateDate: Date;
}

export interface HistoryItem {
    id: number;
    manga: Manga;
    chapter: Chapter;
    readAt: Date;
}
