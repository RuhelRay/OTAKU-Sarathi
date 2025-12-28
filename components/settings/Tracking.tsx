
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle, SettingsInfoBox } from '../SettingsShared';

const Tracking: React.FC = () => {
    const [updateAfterReading, setUpdateAfterReading] = useState(true);

    const trackers = [
        { name: 'MyAnimeList', color: 'bg-[#2e51a2]' },
        { name: 'AniList', color: 'bg-[#3db4f2]' },
        { name: 'Kitsu', color: 'bg-[#dd5143]' },
        { name: 'MangaUpdates', color: 'bg-[#f69322]' },
        { name: 'Shikimori', color: 'bg-[#333333]' },
        { name: 'Bangumi', color: 'bg-[#f09199]' },
    ];

    return (
        <div className="pb-10">
            <SettingsToggle 
                title="Update progress after reading" 
                value={updateAfterReading} 
                onToggle={setUpdateAfterReading} 
            />
            <SettingsItem title="Update progress when marked as read" subtitle="Always" />

            <SettingsHeader>Trackers</SettingsHeader>
            {trackers.map(tracker => (
                <SettingsItem
                    key={tracker.name}
                    title={tracker.name}
                    icon={(props) => (
                        <div className={`w-8 h-8 rounded-md ${tracker.color} flex items-center justify-center text-white font-bold text-xs`}>
                           {/* Simplified icon representation */}
                           {tracker.name[0]}
                        </div>
                    )}
                />
            ))}

            <SettingsInfoBox>
                One-way sync to update the chapter progress in external tracker services. Set up tracking for individual entries from their tracking button.
            </SettingsInfoBox>

            <SettingsHeader>Enhanced trackers</SettingsHeader>
            <SettingsInfoBox>
                Provides enhanced features for specific sources. Entries are automatically tracked when added to your library.
                <br/><br/>
                Available but source not installed: Komga, Kavita, Suwayomi
            </SettingsInfoBox>
        </div>
    );
};

export default Tracking;
