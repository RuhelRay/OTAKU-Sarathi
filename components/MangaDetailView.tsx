
import React from 'react';
import { Manga, Chapter } from '../types';
import { MOCK_CHAPTERS, MOCK_MANGA_DATA, ICONS } from '../constants';


const ChapterItem: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
    return (
        <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg cursor-pointer">
            <div>
                <p className={`font-medium ${chapter.isRead ? 'text-gray-400' : 'text-gray-100'}`}>Chapter {chapter.chapterNumber}</p>
                <p className="text-xs text-gray-400">{chapter.date} &bull; {chapter.scanlationGroup}</p>
            </div>
            <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10">
                <ICONS.Download />
            </button>
        </div>
    );
};

interface MangaDetailViewProps {
    manga: Manga;
    onMangaClick: (manga: Manga) => void;
}

const MangaDetailView: React.FC<MangaDetailViewProps> = ({ manga }) => {
    // Find other manga from the same author to show as recommendations
    const relatedManga = MOCK_MANGA_DATA.filter(m => m.author === manga.author && m.id !== manga.id).slice(0, 4);

    return (
        <div>
            <div className="relative h-60 bg-slate-800">
                <img src={manga.coverUrl} alt="" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181a1b] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end space-x-4">
                    <img src={manga.coverUrl} alt={manga.title} className="w-28 h-auto aspect-[3/4] object-cover rounded-md shadow-lg" />
                    <div>
                        <h2 className="text-2xl font-bold text-white">{manga.title}</h2>
                        <p className="text-sm text-gray-300">{manga.author}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-xs text-[#32d365] font-semibold">{manga.status}</p>
                          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          <p className="text-xs text-gray-400">{manga.sourceName}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="flex items-center space-x-2 mb-4">
                    <button className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2">
                        <ICONS.Bookmark />
                        <span>In library</span>
                    </button>
                </div>

                <p className="text-sm text-gray-300 mb-4">
                    {manga.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {manga.tags?.map(tag => (
                        <span key={tag} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{MOCK_CHAPTERS.length} Chapters</h3>
                <div className="space-y-1">
                    {MOCK_CHAPTERS.map(chapter => (
                        <ChapterItem key={chapter.id} chapter={chapter} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MangaDetailView;
