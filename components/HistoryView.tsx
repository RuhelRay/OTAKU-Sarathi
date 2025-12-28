
import React from 'react';
import { MOCK_HISTORY } from '../constants';
import { HistoryItem, Manga } from '../types';
import { formatDistanceToNow } from 'date-fns';

const HistoryCard: React.FC<{ item: HistoryItem, onClick: () => void }> = ({ item, onClick }) => {
    const timeAgo = formatDistanceToNow(item.readAt, { addSuffix: true });

    return (
        <div onClick={onClick} className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <img src={item.manga.coverUrl} alt={item.manga.title} className="w-12 h-16 object-cover rounded-md mr-4 flex-shrink-0" />
            <div className="flex-grow min-w-0">
                <p className="font-semibold text-gray-100 truncate">{item.manga.title}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <p>Chapter {item.chapter.chapterNumber}</p>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <p>{timeAgo}</p>
                </div>
            </div>
        </div>
    );
};

interface HistoryViewProps {
    onMangaClick: (manga: Manga) => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onMangaClick }) => {
  return (
    <div className="container mx-auto p-4">
        <div className="space-y-2">
            {MOCK_HISTORY.map(item => <HistoryCard key={item.id} item={item} onClick={() => onMangaClick(item.manga)} />)}
        </div>
    </div>
  );
};

export default HistoryView;
