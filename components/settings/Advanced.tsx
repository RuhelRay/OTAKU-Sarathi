
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle } from '../SettingsShared';

const Advanced: React.FC = () => {
    const [legacyDecoder, setLegacyDecoder] = useState(false);
    const [updateLibTitles, setUpdateLibTitles] = useState(false);
    const [disallowNonAscii, setDisallowNonAscii] = useState(false);
    const [verboseLogging, setVerboseLogging] = useState(false);

    return (
        <div className="pb-10">
            {/* Simulating the middle of the screenshot list based on provided images */}
            
            <SettingsHeader>Data</SettingsHeader>
            <SettingsItem title="Reindex downloads" subtitle="Force app to recheck downloaded chapters" />
            <SettingsItem title="Clear database" subtitle="Delete history for entries that are not saved in your library" />

            <SettingsHeader>Networking</SettingsHeader>
            <SettingsItem title="Clear cookies" />
            <SettingsItem title="Clear WebView data" />
            <SettingsItem title="DNS over HTTPS (DoH)" subtitle="Disabled" />
            <SettingsItem title="Default user agent string" subtitle="Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36" />

            <SettingsHeader>Library</SettingsHeader>
            <SettingsItem title="Refresh library covers" />
            <SettingsItem title="Reset per-series reader settings" subtitle="Resets reading mode and orientation of all series" />
            <SettingsToggle 
                title="Update library manga titles to match source" 
                subtitle="Warning: if a manga is renamed, it will be removed from the download queue (if present)."
                value={updateLibTitles} 
                onToggle={setUpdateLibTitles} 
            />
            <SettingsToggle 
                title="Disallow non-ASCII filenames" 
                subtitle="Ensures compatibility with certain storage media that don't support Unicode. When this is enabled, you'll need to manually rename source and manga folders by replacing non-ASCII characters with their lowercase UTF-8 hexadecimal representations. Chapter files don't need to be renamed."
                value={disallowNonAscii} 
                onToggle={setDisallowNonAscii} 
            />

            <SettingsHeader>Reader</SettingsHeader>
            <SettingsItem title="Custom hardware bitmap threshold" subtitle="If reader loads a blank image incrementally reduce the threshold. Selected: Default (16383)" />
            <SettingsToggle 
                title="Use legacy decoder for long strip reader" 
                subtitle="Affects performance. Only enable if reducing bitmap threshold doesn't fix blank image issues"
                value={legacyDecoder} 
                onToggle={setLegacyDecoder} 
            />
            <SettingsItem title="Custom display profile" />

            <SettingsHeader>Extensions</SettingsHeader>
            <SettingsItem title="Installer" subtitle="PackageInstaller" />
            <SettingsItem title="Revoke trusted unknown extensions" />

            <SettingsHeader>Other</SettingsHeader>
            <SettingsItem title="Share crash logs" subtitle="Saves error logs to a file for sharing with the developer" />
            <SettingsToggle title="Verbose logging" subtitle="Print verbose logs to system log (reduces app performance)" value={verboseLogging} onToggle={setVerboseLogging} />
            <SettingsItem title="Debug info" />
            <SettingsItem title="Onboarding guide" />
            <SettingsItem title="Manage notifications" />
            <SettingsItem title="Background activity" />
            <SettingsItem title="Disable battery optimization" subtitle="Helps with background library updates and backups" />
            <SettingsItem title="Don't kill my app!" subtitle="Some manufacturers have additional app restrictions that kill background services. This website has more info on how to fix it." />
        </div>
    );
};

export default Advanced;
