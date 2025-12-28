
import React from 'react';
import { ICONS } from '../constants';

interface HeaderProps {
    title: string;
    onBack?: () => void;
    showActions?: boolean;
    onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, showActions = true, onSearchClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#181a1b]/80 backdrop-blur-sm shadow-md z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
            {onBack && (
                <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors flex-shrink-0">
                    <ICONS.ChevronLeft />
                </button>
            )}
            <h1 className="text-xl font-bold text-gray-100 truncate">{title}</h1>
        </div>
        {showActions && (
          <div className="flex items-center space-x-2">
            <button onClick={onSearchClick} className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <ICONS.Search />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <ICONS.Filter />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
