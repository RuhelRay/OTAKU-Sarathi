
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle, SettingsSlider } from '../SettingsShared';

const Downloads: React.FC = () => {
    const [wifiOnly, setWifiOnly] = useState(true);
    const [saveCbz, setSaveCbz] = useState(true);
    const [splitTall, setSplitTall] = useState(true);
    const [concurrSource, setConcurrSource] = useState(5);
    const [concurrPage, setConcurrPage] = useState(5);
    
    const [delAfterReadManual, setDelAfterReadManual] = useState(false);
    const [delBookmarked, setDelBookmarked] = useState(false);
    
    const [dlNewChapters, setDlNewChapters] = useState(false);

    return (
        <div className="pb-10">
            <SettingsToggle title="Only on Wi-Fi" value={wifiOnly} onToggle={setWifiOnly} />
            <SettingsToggle title="Save as CBZ archive" value={saveCbz} onToggle={setSaveCbz} />
            <SettingsToggle title="Split tall images" subtitle="Improves reader performance" value={splitTall} onToggle={setSplitTall} />
            
            <SettingsSlider 
                title="Concurrent source downloads" 
                value={concurrSource} 
                min={1} max={10} 
                onChange={setConcurrSource} 
                label={concurrSource.toString()} 
            />
             <SettingsSlider 
                title="Concurrent page downloads" 
                subtitle="Pages downloaded simultaneously per source"
                value={concurrPage} 
                min={1} max={10} 
                onChange={setConcurrPage} 
                label={concurrPage.toString()} 
            />

            <SettingsHeader>Delete chapters</SettingsHeader>
            <SettingsToggle title="After manually marked as read" value={delAfterReadManual} onToggle={setDelAfterReadManual} />
            <SettingsItem title="After reading automatically delete" subtitle="Disabled" />
            <SettingsToggle title="Allow deleting bookmarked chapters" value={delBookmarked} onToggle={setDelBookmarked} />
            <SettingsItem title="Excluded categories" subtitle="None" />

            <SettingsHeader>Auto-download</SettingsHeader>
            <SettingsToggle title="Download new chapters" value={dlNewChapters} onToggle={setDlNewChapters} />
            
            <SettingsHeader>Download ahead</SettingsHeader>
            <SettingsItem title="Auto download while reading" subtitle="Disabled" />
        </div>
    );
};

export default Downloads;
