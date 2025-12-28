
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle, SettingsInfoBox } from '../SettingsShared';

const DataStorage: React.FC = () => {
    const [clearCacheOnLaunch, setClearCacheOnLaunch] = useState(false);

    return (
        <div className="pb-10">
            <SettingsHeader>Storage location</SettingsHeader>
            <div className="px-4 py-2 mb-4">
                 <p className="text-sm text-gray-400">/storage/emulated/0/Mihon</p>
            </div>
            
            <SettingsInfoBox>
                Used for automatic backups, chapter downloads, and local source.
            </SettingsInfoBox>

            <SettingsHeader>Backup and restore</SettingsHeader>
            <div className="flex gap-4 px-4 my-2">
                <button className="flex-1 bg-[#2a2d30] hover:bg-white/10 text-white font-medium py-2 px-4 rounded-full border border-gray-600">Create backup</button>
                <button className="flex-1 bg-[#2a2d30] hover:bg-white/10 text-white font-medium py-2 px-4 rounded-full border border-gray-600">Restore backup</button>
            </div>

            <SettingsHeader>Automatic backup frequency</SettingsHeader>
            <SettingsItem title="Every 12 hours" />

            <SettingsInfoBox>
                You should keep copies of backups in other places as well. Backups may contain sensitive data including any stored passwords; be careful if sharing.
                <br/><br/>
                Last automatically backed up: Never
            </SettingsInfoBox>

            <SettingsHeader>Storage usage</SettingsHeader>
            <div className="px-4 py-2 space-y-4">
                <div>
                    <p className="text-gray-300 text-sm mb-1">/storage/emulated/0</p>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden flex">
                         <div className="h-full bg-[#32d365] w-[40%]"></div>
                         <div className="h-full bg-gray-500 w-[60%]"></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Available: 93.28 GB / Total: 244 GB</p>
                </div>
                <div>
                     <p className="text-gray-300 text-sm mb-1">/storage/9C33-6BBD</p>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden flex">
                         <div className="h-full bg-[#32d365] w-[70%]"></div>
                         <div className="h-full bg-gray-500 w-[30%]"></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Available: 95.75 GB / Total: 128 GB</p>
                </div>
            </div>

            <SettingsHeader>Clear chapter cache</SettingsHeader>
            <SettingsItem title="Used: 31 B" />
            <SettingsToggle 
                title="Clear chapter cache on app launch" 
                value={clearCacheOnLaunch} 
                onToggle={setClearCacheOnLaunch} 
            />

            <SettingsHeader>Export</SettingsHeader>
            <SettingsItem title="Library List" />
        </div>
    );
};

export default DataStorage;
