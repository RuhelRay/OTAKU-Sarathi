
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle, SettingsInfoBox } from '../SettingsShared';

const Security: React.FC = () => {
    const [requireUnlock, setRequireUnlock] = useState(false);
    const [hideNotification, setHideNotification] = useState(false);
    const [sendCrashLogs, setSendCrashLogs] = useState(true);
    const [allowAnalytics, setAllowAnalytics] = useState(true);

    return (
        <div className="pb-10">
            <SettingsHeader>Security</SettingsHeader>
            <SettingsToggle title="Require unlock" value={requireUnlock} onToggle={setRequireUnlock} />
            <SettingsToggle title="Hide notification content" value={hideNotification} onToggle={setHideNotification} />

            <SettingsHeader>Secure screen</SettingsHeader>
            <SettingsItem title="Incognito mode" />
            
            <SettingsInfoBox>
                Secure screen hides app contents when switching apps and block screenshots
            </SettingsInfoBox>

            <SettingsHeader>Analytics and Crash logs</SettingsHeader>
            <SettingsToggle 
                title="Send crash logs" 
                subtitle="Send anonymized crash logs to the developers."
                value={sendCrashLogs} 
                onToggle={setSendCrashLogs} 
            />
            <SettingsToggle 
                title="Allow analytics" 
                subtitle="Send anonymized usage data to improve app features."
                value={allowAnalytics} 
                onToggle={setAllowAnalytics} 
            />

            <SettingsInfoBox>
                Sending crash logs and analytics will allow us to identify and fix issues, improve performance, and make future updates more relevant to your needs
            </SettingsInfoBox>
        </div>
    );
};

export default Security;
