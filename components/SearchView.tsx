
import React, { useState, useEffect, useRef } from 'react';
import { Manga } from '../types';
import { MOCK_MANGA_DATA, ICONS } from '../constants';

const SearchResultCard: React.FC<{ manga: Manga, onClick: () => void }> = ({ manga, onClick }) => {
  return (
    <div className="group relative" onClick={onClick} role="button" tabIndex={0}>
      <div className="aspect-[3/4] bg-[#2a2d30] rounded-md overflow-hidden transition-transform group-hover:scale-105">
        <img src={manga.coverUrl} alt={manga.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 flex flex-col justify-end">
        <h3 className="text-sm font-bold text-white truncate">{manga.title}</h3>
        <p className="text-xs text-gray-300">{manga.sourceName}</p>
      </div>
    </div>
  );
};

// Simulate a network request
const searchMangaFromSources = (query: string): Promise<Manga[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (!query) {
                resolve([]);
                return;
            }
            const lowercasedQuery = query.toLowerCase();
            const results = MOCK_MANGA_DATA.filter(manga => 
                manga.title.toLowerCase().includes(lowercasedQuery) ||
                manga.author.toLowerCase().includes(lowercasedQuery)
            );
            resolve(results);
        }, 500); // 500ms delay
    });
};


interface SearchViewProps {
    onMangaClick: (manga: Manga) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ onMangaClick }) => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<Manga[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Auto-focus the input field when the component mounts
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (query) {
                setIsLoading(true);
                searchMangaFromSources(query).then(data => {
                    setResults(data);
                    setIsLoading(false);
                });
            } else {
                setResults([]);
            }
        }, 300); // Debounce search input

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    return (
        <div className="container mx-auto p-4">
            <div className="relative mb-4">
                <ICONS.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search all sources..."
                    className="w-full bg-[#2a2d30] border border-white/10 rounded-lg py-2 pl-10 pr-10 text-white focus:ring-2 focus:ring-[#32d365] focus:outline-none"
                />
                {query && (
                    <button 
                        onClick={() => setQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                        <ICONS.Close className="w-5 h-5" />
                    </button>
                )}
            </div>
            
            {isLoading && (
                 <div className="flex justify-center items-center h-40">
                    <p className="text-gray-400">Searching...</p>
                 </div>
            )}
            
            {!isLoading && query && results.length === 0 && (
                <div className="flex justify-center items-center h-40">
                    <p className="text-gray-400">No results found for "{query}"</p>
                 </div>
            )}

            {!isLoading && results.length > 0 && (
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-6">
                    {results.map((manga) => (
                        <SearchResultCard key={`${manga.id}-${manga.sourceName}`} manga={manga} onClick={() => onMangaClick(manga)} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchView;
