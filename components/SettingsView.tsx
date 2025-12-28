
import React from 'react';
import { ICONS } from '../constants';

interface ListItemProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    subtitle: string;
    onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ icon: Icon, title, subtitle, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
            <div className="mr-4 text-gray-400">
                <Icon />
            </div>
            <div>
                <p className="font-semibold text-gray-100">{title}</p>
                <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
        </div>
    );
};

interface SettingsViewProps {
    onNavigate: (view: string) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ onNavigate }) => {
    const settingsItems = [
        { icon: ICONS.Palette, title: 'Appearance', subtitle: 'Theme, date & time format', view: 'settings_appearance' },
        { icon: ICONS.Library, title: 'Library', subtitle: 'Categories, global update, chapter swipe', view: 'settings_library' },
        { icon: ICONS.BookOpen, title: 'Reader', subtitle: 'Reading mode, display, navigation', view: 'settings_reader' },
        { icon: ICONS.Download, title: 'Downloads', subtitle: 'Automatic download, download ahead', view: 'settings_downloads' },
        { icon: ICONS.Track, title: 'Tracking', subtitle: 'One-way progress sync, enhanced sync', view: 'settings_tracking' },
        { icon: ICONS.Browse, title: 'Browse', subtitle: 'Sources, extensions, global search', view: 'settings_browse' },
        { icon: ICONS.FolderArchive, title: 'Data and storage', subtitle: 'Manual & automatic backups, storage space', view: 'settings_data_storage' },
        { icon: ICONS.Shield, title: 'Security and privacy', subtitle: 'App lock, secure screen', view: 'settings_security' },
        { icon: ICONS.Code, title: 'Advanced', subtitle: 'Dump crash logs, battery optimizations', view: 'settings_advanced' },
    ];

    const versionInfo = 'OTAKU Sarathi Beta r7480 (5b88f8819)';

    return (
        <div className="container mx-auto p-2">
            <div className="divide-y divide-white/10">
                <div>
                    {settingsItems.map(item => (
                        <ListItem 
                            key={item.title} 
                            icon={item.icon} 
                            title={item.title} 
                            subtitle={item.subtitle} 
                            onClick={() => onNavigate(item.view)} 
                        />
                    ))}
                </div>
                <div className="pt-4 text-center">
                    <p className="text-xs text-gray-500">App version</p>
                    <p className="text-sm text-gray-400">{versionInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
