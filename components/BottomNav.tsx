
import React from 'react';
import { NavTab } from '../types';
import { ICONS } from '../constants';

interface BottomNavProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

const navItems = [
  { tab: NavTab.Library, icon: ICONS.Library },
  { tab: NavTab.Updates, icon: ICONS.Updates },
  { tab: NavTab.History, icon: ICONS.History },
  { tab: NavTab.Browse, icon: ICONS.Browse },
  { tab: NavTab.More, icon: ICONS.More }
];

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#212426]/80 backdrop-blur-sm border-t border-white/10 z-10">
      <nav className="container mx-auto px-2 h-20 flex justify-around items-center">
        {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-[#32d365]' : 'text-gray-400 hover:text-gray-200'}`}
              >
                <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
                    <item.icon />
                </div>
                <span className="text-[10px] font-medium">{item.tab}</span>
                {isActive && <div className="absolute top-0 w-12 h-0.5 bg-[#32d365] rounded-full shadow-[0_0_10px_rgba(50,211,101,0.5)]" />}
              </button>
            );
        })}
      </nav>
    </footer>
  );
};

export default BottomNav;
