
import React, { useState, useMemo, useEffect } from 'react';
import { Manga, Source } from '../types';
import { MOCK_MANGA_DATA, ICONS } from '../constants';

const MangaCard: React.FC<{ manga: Manga, onClick: () => void }> = ({ manga, onClick }) => {
  return (
    <div className="group relative" onClick={onClick} role="button" tabIndex={0}>
      <div className="aspect-[3/4] bg-[#2a2d30] rounded-md overflow-hidden transition-transform group-hover:scale-105">
        <img src={manga.coverUrl} alt={manga.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-2 text-sm font-semibold text-gray-200 truncate">{manga.title}</h3>
      <p className="text-xs text-gray-400 truncate">{manga.author}</p>
    </div>
  );
};

type FilterType = 'popular' | 'latest';

interface SourceDetailViewProps {
    source: Source;
    onMangaClick: (manga: Manga) => void;
}

const SourceDetailView: React.FC<SourceDetailViewProps> = ({ source, onMangaClick }) => {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState<FilterType>('popular');
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading content from the source
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, [source, filter]);


    const sourceManga = useMemo(() => {
        // Simulate different sorting
        const baseData = MOCK_MANGA_DATA.filter(m => m.sourceName === source.name);
        if (filter === 'latest') {
            return [...baseData].reverse();
        }
        // 'popular' is default
        return baseData;
    }, [source.name, filter]);

    const filteredManga = useMemo(() => {
        if (!query) return sourceManga;
        const lowercasedQuery = query.toLowerCase();
        return sourceManga.filter(m => 
            m.title.toLowerCase().includes(lowercasedQuery) ||
            m.author.toLowerCase().includes(lowercasedQuery)
        );
    }, [query, sourceManga]);

    const renderContent = () => {
        if (isLoading) {
             return <div className="flex justify-center items-center h-60"><p className="text-gray-400">Loading from {source.name}...</p></div>;
        }
        if (filteredManga.length === 0) {
            return <div className="flex justify-center items-center h-60"><p className="text-gray-400">No results found in {source.name}</p></div>;
        }
        return (
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-6">
                {filteredManga.map((manga) => (
                    <MangaCard key={manga.id} manga={manga} onClick={() => onMangaClick(manga)} />
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto p-4">
            <div className="relative mb-4">
                 <ICONS.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={`Search in ${source.name}...`}
                    className="w-full bg-[#2a2d30] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:ring-2 focus:ring-[#32d365] focus:outline-none"
                />
            </div>

            <div className="flex items-center gap-2 mb-4">
                <button 
                    onClick={() => setFilter('popular')}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-2 ${filter === 'popular' ? 'bg-[#32d365] text-black' : 'bg-[#2a2d30] text-gray-300 hover:bg-white/10'}`}
                >
                    <ICONS.TrendingUp className="w-4 h-4" />
                    Popular
                </button>
                <button 
                    onClick={() => setFilter('latest')}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-2 ${filter === 'latest' ? 'bg-[#32d365] text-black' : 'bg-[#2a2d30] text-gray-300 hover:bg-white/10'}`}
                >
                    <ICONS.History className="w-4 h-4" />
                    Latest
                </button>
            </div>
            
            {renderContent()}
        </div>
    );
};

export default SourceDetailView;
