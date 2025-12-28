
import React from 'react';
import { MOCK_UPDATES } from '../constants';
import { UpdateItem, Manga } from '../types';
import { format, isToday, isYesterday } from 'date-fns';

const UpdateCard: React.FC<{ item: UpdateItem, onClick: () => void }> = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <img src={item.manga.coverUrl} alt={item.manga.title} className="w-12 h-16 object-cover rounded-md mr-4 flex-shrink-0" />
            <div className="flex-grow min-w-0">
                <p className="font-semibold text-gray-100 truncate">{item.manga.title}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <p>Chapter {item.chapter.chapterNumber}</p>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <p className="truncate">{item.chapter.scanlationGroup}</p>
                </div>
            </div>
        </div>
    );
};

interface UpdatesViewProps {
    onMangaClick: (manga: Manga) => void;
}

const UpdatesView: React.FC<UpdatesViewProps> = ({ onMangaClick }) => {
    const groupedUpdates = MOCK_UPDATES.reduce((acc, item) => {
        let dayLabel: string;
        if (isToday(item.updateDate)) {
            dayLabel = 'Today';
        } else if (isYesterday(item.updateDate)) {
            dayLabel = 'Yesterday';
        } else {
            dayLabel = format(item.updateDate, 'EEEE, MMM d');
        }

        if (!acc[dayLabel]) {
            acc[dayLabel] = [];
        }
        acc[dayLabel].push(item);
        return acc;
    }, {} as Record<string, UpdateItem[]>);

  return (
    <div className="container mx-auto p-4">
        <div className="space-y-4">
            {Object.entries(groupedUpdates).map(([day, items]) => (
                <div key={day}>
                    <h2 className="text-lg font-bold text-white mb-2 px-2">{day}</h2>
                    <div className="space-y-1">
                        {items.map(item => <UpdateCard key={item.id} item={item} onClick={() => onMangaClick(item.manga)} />)}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default UpdatesView;
