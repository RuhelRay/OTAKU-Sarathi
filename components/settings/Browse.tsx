
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle, SettingsInfoBox } from '../SettingsShared';
import { MOCK_REPOSITORIES } from '../../constants';

interface BrowseProps {
    onNavigate: (view: string) => void;
}

const Browse: React.FC<BrowseProps> = ({ onNavigate }) => {
    const [hideLibrary, setHideLibrary] = useState(false);
    const [showNsfw, setShowNsfw] = useState(true);

    return (
        <div className="pb-10">
            <SettingsHeader>Sources</SettingsHeader>
            <SettingsToggle 
                title="Hide entries already in library" 
                value={hideLibrary} 
                onToggle={setHideLibrary} 
            />

            <SettingsItem 
                title="Extension repos" 
                subtitle={`${MOCK_REPOSITORIES.length} repo${MOCK_REPOSITORIES.length !== 1 ? 's' : ''}`} 
                onClick={() => onNavigate('extension_repos')}
            />

            <SettingsHeader>NSFW (18+) sources</SettingsHeader>
            <SettingsToggle 
                title="Show in sources and extensions lists" 
                subtitle="Requires app restart to take effect"
                value={showNsfw} 
                onToggle={setShowNsfw} 
            />
            <SettingsInfoBox>
                This does not prevent unofficial or potentially incorrectly flagged extensions from surfacing NSFW (18+) content within the app.
            </SettingsInfoBox>
        </div>
    );
};

export default Browse;
