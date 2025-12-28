
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface ListItemProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    subtitle?: string;
    onClick?: () => void;
    isToggle?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ icon: Icon, title, subtitle, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
            <div className="mr-4 text-gray-400">
                <Icon />
            </div>
            <div>
                <p className="font-semibold text-gray-100">{title}</p>
                {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
            </div>
        </div>
    );
};

const ToggleItem: React.FC<Omit<ListItemProps, 'isToggle'>> = ({ icon: Icon, title, subtitle }) => {
    const [isOn, setIsOn] = useState(false);
    return (
         <div onClick={() => setIsOn(!isOn)} className="flex items-center p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
            <div className="mr-4 text-gray-400">
                <Icon />
            </div>
            <div className="flex-grow">
                <p className="font-semibold text-gray-100">{title}</p>
                {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
            </div>
             <div className={`relative w-12 h-7 rounded-full transition-colors ${isOn ? 'bg-[#32d365]' : 'bg-gray-600'}`}>
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${isOn ? 'transform translate-x-5' : ''}`}></div>
            </div>
        </div>
    );
};

interface MoreViewProps {
  onNavigate: (view: 'settings') => void;
}

const MoreView: React.FC<MoreViewProps> = ({ onNavigate }) => {
    
  return (
    <div className="container mx-auto p-2">
        <div className="divide-y divide-white/10">
            <div>
                <ToggleItem icon={ICONS.CloudOff} title="Downloaded only" subtitle="Filters all entries in your library" />
                <ToggleItem icon={ICONS.Glasses} title="Incognito mode" subtitle="Pauses reading history" />
            </div>
            <div className="pt-2">
                 <ListItem icon={ICONS.Download} title="Download queue" />
                 <ListItem icon={ICONS.FolderKanban} title="Categories" />
                 <ListItem icon={ICONS.BarChart} title="Statistics" />
                 <ListItem icon={ICONS.FolderArchive} title="Data and storage" />
            </div>
             <div className="pt-2">
                 <ListItem icon={ICONS.Settings} title="Settings" onClick={() => onNavigate('settings')} />
                 <ListItem icon={ICONS.Info} title="About" />
                 <ListItem icon={ICONS.HelpCircle} title="Help" />
            </div>
        </div>
    </div>
  );
};

export default MoreView;
