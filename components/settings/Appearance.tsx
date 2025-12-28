
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle } from '../SettingsShared';
import { ICONS } from '../../constants';

const Appearance: React.FC = () => {
    const [themeMode, setThemeMode] = useState<'System' | 'Light' | 'Dark'>('System');
    const [appTheme, setAppTheme] = useState<'Default' | 'Dynamic' | 'Catppuccin'>('Dynamic');
    const [pureBlack, setPureBlack] = useState(false);
    const [relativeTime, setRelativeTime] = useState(true);
    const [renderImages, setRenderImages] = useState(true);

    return (
        <div className="pb-10">
            <SettingsHeader>Theme</SettingsHeader>
            <div className="px-4 py-2">
                <div className="flex bg-[#2a2d30] rounded-full p-1 mb-6">
                    {(['System', 'Light', 'Dark'] as const).map(m => (
                         <button 
                            key={m} 
                            onClick={() => setThemeMode(m)}
                            className={`flex-1 py-2 text-sm font-medium rounded-full transition-colors ${themeMode === m ? 'bg-[#32d365] text-black shadow-md' : 'text-gray-400'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                     {(['Default', 'Dynamic', 'Catppuccin'] as const).map(t => (
                        <div key={t} onClick={() => setAppTheme(t)} className={`relative group cursor-pointer`}>
                            <div className={`aspect-[9/16] rounded-xl border-2 transition-colors overflow-hidden relative bg-[#181a1b] ${appTheme === t ? 'border-[#32d365]' : 'border-gray-700'}`}>
                                {/* UI Mockup inside card */}
                                <div className="absolute top-2 left-2 right-2 h-4 bg-gray-700 rounded-full opacity-50"></div>
                                <div className={`absolute top-8 left-2 w-8 h-8 rounded-lg ${t === 'Dynamic' ? 'bg-[#32d365]' : t === 'Catppuccin' ? 'bg-[#cba6f7]' : 'bg-blue-500'}`}></div>
                                <div className="absolute top-10 left-12 right-2 h-3 bg-gray-700 rounded opacity-30"></div>
                                <div className={`absolute bottom-2 left-2 right-2 h-8 rounded-full ${t === 'Dynamic' ? 'bg-[#32d365]/20' : 'bg-gray-700/20'}`}></div>
                                
                                {appTheme === t && (
                                    <div className="absolute top-2 right-2 bg-[#32d365] rounded-full p-0.5">
                                        <ICONS.CheckCircle className="w-4 h-4 text-black" fill="currentColor" />
                                    </div>
                                )}
                            </div>
                            <p className={`text-center text-xs mt-2 font-medium ${appTheme === t ? 'text-[#32d365]' : 'text-gray-500'}`}>{t}</p>
                        </div>
                    ))}
                </div>
            </div>

            <SettingsToggle 
                title="Pure black dark mode" 
                value={pureBlack} 
                onToggle={setPureBlack} 
            />

            <SettingsHeader>Display</SettingsHeader>
            <SettingsItem title="App language" />
            <SettingsItem title="Tablet UI" subtitle="Auto" />

            <SettingsHeader>Date format</SettingsHeader>
            <SettingsItem title="Date format" subtitle="Default (12/28/25)" />
            <SettingsToggle 
                title="Relative timestamps" 
                subtitle='"Today" instead of "12/28/25"' 
                value={relativeTime} 
                onToggle={setRelativeTime} 
            />
            
            <SettingsToggle 
                title="Render images in manga descriptions" 
                value={renderImages} 
                onToggle={setRenderImages} 
            />
        </div>
    );
};

export default Appearance;
