
import React, { useState } from 'react';
import { SettingsHeader, SettingsItem, SettingsToggle } from '../SettingsShared';

const Library: React.FC = () => {
    const [perCategorySort, setPerCategorySort] = useState(false);
    const [autoRefreshMeta, setAutoRefreshMeta] = useState(false);
    const [showUnreadCount, setShowUnreadCount] = useState(true);

    return (
        <div className="pb-10">
            <SettingsHeader>Categories</SettingsHeader>
            <SettingsItem title="Edit categories" subtitle="0 categories" />
            <SettingsItem title="Default category" subtitle="Always ask" />
            <SettingsToggle 
                title="Per-category settings for sort" 
                value={perCategorySort} 
                onToggle={setPerCategorySort} 
            />

            <SettingsHeader>Global update</SettingsHeader>
            <SettingsItem title="Automatic updates" subtitle="Off" />
            <SettingsItem title="Categories" subtitle="Include: All, Exclude: None" />
            <SettingsToggle 
                title="Automatically refresh metadata" 
                subtitle="Check for new cover and details when updating library"
                value={autoRefreshMeta} 
                onToggle={setAutoRefreshMeta} 
            />
            <SettingsItem 
                title="Smart update" 
                subtitle='Skip entries with unread chapter(s), Skip entries with "Completed" status, Skip unstarted entries, Predict next release time'
            />

             <SettingsHeader>Appearance</SettingsHeader>
             <SettingsToggle 
                title="Show unread count on Updates icon" 
                value={showUnreadCount} 
                onToggle={setShowUnreadCount} 
            />

            <SettingsHeader>Behavior</SettingsHeader>
            <SettingsItem title="Chapter on swipe to left" subtitle="Bookmark chapter" />
            <SettingsItem title="Chapter on swipe to right" subtitle="Mark as read" />
            <SettingsItem title="Mark duplicate read chapter as read" subtitle="None" />
        </div>
    );
};

export default Library;
