
import React from 'react';
import { Manga, Source, Chapter, UpdateItem, HistoryItem, Repository } from './types';

export const MOCK_REPOSITORIES: Repository[] = [
    { id: 1, name: 'Keiyoushi', url: 'https://keiyoushi.github.io/extensions/index.json', sourceCount: 8 },
    { id: 2, name: 'ThePBone', url: 'https://raw.githubusercontent.com/ThePBone/tachiyomi-extensions-revived/repo/index.json', sourceCount: 0 }
];

export const MOCK_MANGA_DATA: Manga[] = [
  { id: 1, title: 'Jujutsu Kaisen', author: 'Gege Akutami', coverUrl: 'https://picsum.photos/seed/jjk/500/700', unreadChapters: 5, description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.", status: 'Ongoing', tags: ['Action', 'Supernatural', 'Shonen'], sourceName: 'MangaDex' },
  { id: 2, title: 'One Piece', author: 'Eiichiro Oda', coverUrl: 'https://picsum.photos/seed/onepiece/500/700', unreadChapters: 12, description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.", status: 'Ongoing', tags: ['Action', 'Adventure', 'Comedy', 'Shonen'], sourceName: 'Comick' },
  { id: 3, title: 'My Hero Academia', author: 'Kohei Horikoshi', coverUrl: 'https://picsum.photos/seed/mha/500/700', unreadChapters: 0, description: "In a world where people with superpowers (known as 'Quirks') are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk.", status: 'Ongoing', tags: ['Action', 'Comedy', 'School', 'Shonen'], sourceName: 'MangaSee' },
  { id: 4, title: 'Chainsaw Man', author: 'Tatsuki Fujimoto', coverUrl: 'https://picsum.photos/seed/csm/500/700', unreadChapters: 3, description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debt.", status: 'Ongoing', tags: ['Action', 'Supernatural', 'Shonen'], sourceName: 'MangaDex' },
  { id: 5, title: 'Spy x Family', author: 'Tatsuya Endo', coverUrl: 'https://picsum.photos/seed/spy/500/700', unreadChapters: 1, description: "A spy on an undercover mission gets married and adopts a child, not realizing that his wife and daughter are a mix of assassin and telepath.", status: 'Ongoing', tags: ['Action', 'Comedy', 'Shonen'], sourceName: 'Bato.to' },
  { id: 6, title: 'Attack on Titan', author: 'Hajime Isayama', coverUrl: 'https://picsum.photos/seed/aot/500/700', unreadChapters: 0, description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.", status: 'Finished', tags: ['Action', 'Drama', 'Fantasy', 'Horror'], sourceName: 'MangaSee' },
  { id: 7, title: 'Demon Slayer', author: 'Koyoharu Gotouge', coverUrl: 'https://picsum.photos/seed/ds/500/700', unreadChapters: 8, description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.", status: 'Finished', tags: ['Action', 'Supernatural', 'Shonen'], sourceName: 'Comick' },
  { id: 8, title: 'Berserk', author: 'Kentaro Miura', coverUrl: 'https://picsum.photos/seed/berserk/500/700', unreadChapters: 22, description: "Guts, a former mercenary now known as the 'Black Swordsman,' is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything taken away from him when this person takes everything important to Guts in order to fulfill his own desires.", status: 'Ongoing', tags: ['Action', 'Adventure', 'Dark Fantasy', 'Seinen'], sourceName: 'MangaDex' },
  { id: 9, title: 'Vinland Saga', author: 'Makoto Yukimura', coverUrl: 'https://picsum.photos/seed/vinland/500/700', unreadChapters: 0, description: "A young man named Thorfinn finds himself in a quest for revenge against the man who murdered his father.", status: 'Ongoing', tags: ['Action', 'Adventure', 'Drama', 'Historical', 'Seinen'], sourceName: 'MangaSee' },
  { id: 10, title: 'Kagurabachi', author: 'Takeru Hokazono', coverUrl: 'https://picsum.photos/seed/kagura/500/700', unreadChapters: 4, description: "Young Chihiro spends his days training under his famous swordsmith father. One day he hopes to be a great sword-maker himself. The goofy father and his serious son--they thought these days would last forever. But suddenly, tragedy strikes. A dark day soaked in blood. Chihiro and his sword live only for revenge.", status: 'Ongoing', tags: ['Action', 'Shonen'], sourceName: 'AsuraScans' },
  { id: 11, title: 'Dandadan', author: 'Yukinobu Tatsu', coverUrl: 'https://picsum.photos/seed/dandadan/500/700', unreadChapters: 1, description: "A girl who believes in ghosts and a boy who believes in aliens meet. A story of occult battles in a new dimension begins!", status: 'Ongoing', tags: ['Action', 'Comedy', 'Sci-Fi', 'Supernatural'], sourceName: 'Flame Scans' },
  { id: 12, title: 'Oshi no Ko', author: 'Aka Akasaka', coverUrl: 'https://picsum.photos/seed/oshino/500/700', unreadChapters: 9, description: "A doctor and his recently-deceased patient are reborn as twins to a famous Japanese musical idol and navigate the highs and lows of the Japanese entertainment industry as they grow up together through their lives.", status: 'Ongoing', tags: ['Drama', 'Supernatural', 'Seinen'], sourceName: 'Luminous Scans' }
];

export const MOCK_SOURCES_DATA: Source[] = [
    { id: 1, name: 'MangaDex', lang: 'EN', version: '1.4.29', updatedVersion: '1.5.0', isNsfw: false, repoId: 1 },
    { id: 2, name: 'Comick', lang: 'EN', version: '1.2.14', isNsfw: false, repoId: 1 },
    { id: 3, name: 'Bato.to', lang: 'EN', version: '1.4.45', updatedVersion: '1.4.50', isNsfw: true, repoId: 1 },
    { id: 4, name: 'MangaSee', lang: 'EN', version: '1.2.94', isNsfw: false, repoId: 1 },
    { id: 5, name: 'AsuraScans', lang: 'EN', version: '1.3.6', isNsfw: false, repoId: 1 },
    { id: 6, name: 'Flame Scans', lang: 'EN', version: '1.0.3', isNsfw: false, repoId: 1 },
    { id: 7, name: 'Luminous Scans', lang: 'EN', version: '2.0.11', isNsfw: false, repoId: 1 },
    { id: 8, name: 'Reaper Scans', lang: 'EN', version: '2.0.125', updatedVersion: '2.1.0', isNsfw: false, repoId: 1 }
];

export const MOCK_CHAPTERS: Chapter[] = Array.from({ length: 25 }, (_, i) => ({
    id: `ch-${25 - i}`,
    chapterNumber: `${25 - i}`,
    title: `The Story of Chapter ${25 - i}`,
    scanlationGroup: 'Fan Translators',
    date: `${i + 1} day(s) ago`,
    isRead: i > 5
}));

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

export const MOCK_UPDATES: UpdateItem[] = [
    { id: 1, manga: MOCK_MANGA_DATA[0], chapter: { id: 'jjk-250', chapterNumber: '250', title: 'Inhuman Makyo Shinjuku Showdown, Part 22', scanlationGroup: 'TCB Scans', date: '2 hours ago', isRead: false }, updateDate: today },
    { id: 2, manga: MOCK_MANGA_DATA[1], chapter: { id: 'op-1120', chapterNumber: '1120', title: 'The Sound of Liberation', scanlationGroup: 'TCB Scans', date: '5 hours ago', isRead: false }, updateDate: today },
    { id: 3, manga: MOCK_MANGA_DATA[9], chapter: { id: 'kgb-40', chapterNumber: '40', title: 'Decision', scanlationGroup: 'Viz', date: '1 day ago', isRead: true }, updateDate: yesterday },
    { id: 4, manga: MOCK_MANGA_DATA[3], chapter: { id: 'mha-420', chapterNumber: '420', title: 'From Class A', scanlationGroup: 'TCB Scans', date: '2 days ago', isRead: false }, updateDate: yesterday }
];

export const MOCK_HISTORY: HistoryItem[] = [
    { id: 1, manga: MOCK_MANGA_DATA[9], chapter: { id: 'kgb-40', chapterNumber: '40', title: 'Decision', scanlationGroup: 'Viz', date: '1 day ago', isRead: true }, readAt: new Date(today.getTime() - 2 * 60 * 60 * 1000) },
    { id: 2, manga: MOCK_MANGA_DATA[4], chapter: { id: 'csm-150', chapterNumber: '150', title: 'Afterschool Devil Hunters Club', scanlationGroup: 'MangaPlus', date: '3 days ago', isRead: true }, readAt: new Date(today.getTime() - 26 * 60 * 60 * 1000) }
];


const iconProps: React.SVGProps<SVGSVGElement> = {
  className: "w-6 h-6",
  strokeWidth: 2,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const ICONS = {
    Library: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><path d="M14 2v6h6"/><path d="M2 17h.01"/><path d="M2 13h.01"/><path d="M2 9h.01"/></svg>,
    Updates: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M8 3v3a5 5 0 0 0 5 5h3"/><path d="M21 12A9 9 0 1 1 3.24 10.24"/><path d="M21 3 15 9"/></svg>,
    History: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>,
    Browse: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 1.5 0 0 0 0 20 14.5 1.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
    More: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>,
    Search: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
    Filter: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>,
    Globe: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} className="w-10 h-10 text-gray-400" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    ChevronLeft: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="m15 18-6-6 6-6" /></svg>,
    Bookmark: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>,
    Download: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>,
    Palette: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    BookOpen: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    Info: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
    Close: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
    PackagePlus: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M16 16h6"/><path d="M21 12v6"/><path d="M12 12v6"/><path d="M12 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"/><path d="m12 12-4-2-8 4 8 4 8-4-4-2Z"/><path d="M16 5h6"/><path d="M19 2v6"/></svg>,
    Trash: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>,
    TrendingUp: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    ArrowUpCircle: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" /></svg>,
    Folder: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16z"></path></svg>,
    Shield: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    ShieldCheck: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    Bell: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
    Rocket: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.2-.86-3.18.05Z"/><path d="m12 15-3-3a9 9 0 0 1 3-12 9 9 0 0 1 12 3l-3 3"/></svg>,
    CheckCircle: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    FileText: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>,
    Repeat: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>,
    CloudOff: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="m2.6 2.6 18.8 18.8"/><path d="M22 17a5 5 0 0 0-5-5h-1.26a8 8 0 0 0-7.05-6M5 12.55a4.6 4.6 0 0 0 0 5.9"/></svg>,
    Glasses: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="m21.5 13-2.5-6c-.7-1.3-1.4-2-3-2"/></svg>,
    Settings: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
    Code: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    HelpCircle: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    BarChart: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
    FolderArchive: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M22 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v8Z"/><path d="M12 10v6"/><path d="m15 13-3 3-3-3"/></svg>,
    FolderKanban: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M22 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2Z"/><path d="M8 14v-2"/><path d="M12 14v-4"/><path d="M16 14v-6"/></svg>,
    Track: (props: React.SVGProps<SVGSVGElement>) => <svg {...iconProps} {...props}><path d="M2.7 10.3a2.4 2.4 0 0 1 0 3.4 2.4 2.4 0 0 1-3.4 0l-1-1 .1-.1c.3-.3.7-.7.9-1"/><path d="m10.3 2.7 1 1a2.4 2.4 0 0 1 0 3.4 2.4 2.4 0 0 1-3.4 0"/><path d="M2.7 13.7a2.4 2.4 0 0 1 3.4 0l1 1c.9.8 1.4 1.9 1.4 3s-.5 2.2-1.4 3l-1 1a2.4 2.4 0 0 1-3.4 0 2.4 2.4 0 0 1 0-3.4"/><path d="m13.7 2.7 1 1a2.4 2.4 0 0 1 3.4 0 2.4 2.4 0 0 1 0 3.4l-1 1"/><path d="M12 12 7 7"/></svg>
};
