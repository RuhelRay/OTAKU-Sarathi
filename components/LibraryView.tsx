
import React from 'react';
import { ICONS } from '../constants';
import { Manga } from '../types';

const MangaCard: React.FC<{ manga: Manga, onClick: () => void }> = ({ manga, onClick }) => {
  return (
    <div className="group relative" onClick={onClick} role="button" tabIndex={0}>
      <div className="aspect-[3/4] bg-[#2a2d30] rounded-md overflow-hidden transition-transform group-hover:scale-105">
        <img src={manga.coverUrl} alt={manga.title} className="w-full h-full object-cover" />
      </div>
      {manga.unreadChapters > 0 && (
         <div className="absolute top-1 left-1 bg-[#32d365] text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
           {manga.unreadChapters}
         </div>
      )}
      <h3 className="mt-2 text-sm font-semibold text-gray-200 truncate">{manga.title}</h3>
      <p className="text-xs text-gray-400 truncate">{manga.author}</p>
    </div>
  );
};

interface LibraryViewProps {
    library: Manga[];
    onMangaClick: (manga: Manga) => void;
}

const LibraryView: React.FC<LibraryViewProps> = ({ library, onMangaClick }) => {
  if (library.length === 0) {
    return (
       <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center py-20">
            <div className="text-6xl font-mono tracking-tighter">(> __ &lt;)</div>
            <p className="mt-4 text-lg">Your library is empty</p>
            <button className="mt-4 text-[#32d365] font-semibold flex items-center gap-2">
                <ICONS.HelpCircle className="w-5 h-5"/>
                <span>Getting started guide</span>
            </button>
        </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-6">
        {library.map((manga) => (
          <MangaCard key={manga.id} manga={manga} onClick={() => onMangaClick(manga)} />
        ))}
      </div>
    </div>
  );
};

export default LibraryView;
