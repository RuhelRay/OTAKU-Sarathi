
import React, { useState, useEffect } from 'react';
import { Manga, NavTab, Source } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import LibraryView from './components/LibraryView';
import UpdatesView from './components/UpdatesView';
import HistoryView from './components/HistoryView';
import BrowseView from './components/BrowseView';
import MoreView from './components/MoreView';
import MangaDetailView from './components/MangaDetailView';
import SearchView from './components/SearchView';
import SourceDetailView from './components/SourceDetailView';
import SetupView from './components/SetupView';
import SettingsView from './components/SettingsView';
import PlaceholderView from './components/PlaceholderView';
import ExtensionReposView from './components/ExtensionReposView';
import { MOCK_MANGA_DATA, ICONS } from './constants';

// Import new Settings views
import AppearanceSettings from './components/settings/Appearance';
import LibrarySettings from './components/settings/Library';
import ReaderSettings from './components/settings/Reader';
import DownloadsSettings from './components/settings/Downloads';
import TrackingSettings from './components/settings/Tracking';
import BrowseSettings from './components/settings/Browse';
import DataStorageSettings from './components/settings/DataStorage';
import SecuritySettings from './components/settings/Security';
import AdvancedSettings from './components/settings/Advanced';

type View = 
  | 'main' 
  | 'search' 
  | 'settings'
  | 'manga_detail'
  | 'source_detail'
  | 'download_queue'
  | 'categories'
  | 'statistics'
  | 'data_storage'
  | 'about'
  | 'help'
  // Settings sub-pages
  | 'settings_appearance'
  | 'settings_library'
  | 'settings_reader'
  | 'settings_downloads'
  | 'settings_tracking'
  | 'settings_browse'
  | 'settings_data_storage'
  | 'settings_security'
  | 'settings_advanced'
  // New views
  | 'extension_repos';

const App: React.FC = () => {
  const [isSetupComplete, setIsSetupComplete] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<NavTab>(NavTab.Library);
  const [currentView, setCurrentView] = useState<View>('main');
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);
  const [selectedSource, setSelectedSource] = useState<Source | null>(null);
  const [library, setLibrary] = useState<Manga[]>([]);

  useEffect(() => {
    const setupStatus = localStorage.getItem('otaku_sarathi_setup_complete');
    setIsSetupComplete(setupStatus === 'true');
    if (setupStatus === 'true') {
        setLibrary(MOCK_MANGA_DATA);
    }
  }, []);

  const handleSetupComplete = () => {
    localStorage.setItem('otaku_sarathi_setup_complete', 'true');
    setIsSetupComplete(true);
    setLibrary(MOCK_MANGA_DATA);
  };
  
  const handleMangaClick = (manga: Manga) => {
    setSelectedManga(manga);
    setCurrentView('manga_detail');
  };

  const handleSourceClick = (source: Source) => {
    setSelectedSource(source);
    setCurrentView('source_detail');
  };

  const handleBack = () => {
    if (currentView === 'extension_repos') {
        setCurrentView('settings_browse');
        return;
    }
    if (currentView.startsWith('settings_')) {
        setCurrentView('settings');
        return;
    }
    if (currentView === 'settings') {
        setCurrentView('main');
        return;
    }
    if (currentView === 'manga_detail' || currentView === 'source_detail') {
        setSelectedManga(null);
        setSelectedSource(null);
        setCurrentView('main');
        return;
    }
    // Default fallback
    setCurrentView('main');
  };

  const renderContent = () => {
    switch (currentView) {
        case 'manga_detail':
            return <MangaDetailView manga={selectedManga!} onMangaClick={handleMangaClick} />;
        case 'source_detail':
            return <SourceDetailView source={selectedSource!} onMangaClick={handleMangaClick} />;
        case 'search':
            return <SearchView onMangaClick={handleMangaClick} />;
        case 'settings':
            return <SettingsView onNavigate={(view) => setCurrentView(view as View)} />;
        
        // Settings Sub-pages
        case 'settings_appearance':
            return <AppearanceSettings />;
        case 'settings_library':
            return <LibrarySettings />;
        case 'settings_reader':
            return <ReaderSettings />;
        case 'settings_downloads':
            return <DownloadsSettings />;
        case 'settings_tracking':
            return <TrackingSettings />;
        case 'settings_browse':
            return <BrowseSettings onNavigate={(view) => setCurrentView(view as View)} />;
        case 'settings_data_storage':
        case 'data_storage':
            return <DataStorageSettings />;
        case 'settings_security':
            return <SecuritySettings />;
        case 'settings_advanced':
            return <AdvancedSettings />;

        case 'extension_repos':
            return <ExtensionReposView />;
            
        // More Tab Items
        case 'download_queue':
            return <PlaceholderView icon={ICONS.Download} title="Download Queue" message="No downloads in progress" />;
        case 'categories':
            return <PlaceholderView icon={ICONS.FolderKanban} title="Categories" message="Manage your library categories here" />;
        case 'statistics':
            return <PlaceholderView icon={ICONS.BarChart} title="Statistics" message="Track your reading habits" />;
        case 'about':
            return <PlaceholderView icon={ICONS.Info} title="About" message="OTAKU Sarathi v1.0.0" />;
        case 'help':
            return <PlaceholderView icon={ICONS.HelpCircle} title="Help" message="Guides and FAQ" />;
            
        case 'main':
        default:
            switch (activeTab) {
                case NavTab.Library:
                    return <LibraryView library={library} onMangaClick={handleMangaClick} />;
                case NavTab.Updates:
                    return <UpdatesView onMangaClick={handleMangaClick} />;
                case NavTab.History:
                    return <HistoryView onMangaClick={handleMangaClick} />;
                case NavTab.Browse:
                    return <BrowseView onSourceClick={handleSourceClick} />;
                case NavTab.More:
                    return <MoreView onNavigate={(view) => setCurrentView(view as View)} />;
                default:
                    return <LibraryView library={library} onMangaClick={handleMangaClick} />;
            }
    }
  };

  const getHeaderTitle = () => {
    if (currentView === 'manga_detail' && selectedManga) return selectedManga.title;
    if (currentView === 'source_detail' && selectedSource) return selectedSource.name;
    if (currentView === 'search') return "Global Search";
    if (currentView === 'settings') return "Settings";
    
    // Titles for new views
    if (currentView === 'settings_appearance') return "Appearance";
    if (currentView === 'settings_library') return "Library";
    if (currentView === 'settings_reader') return "Reader";
    if (currentView === 'settings_downloads') return "Downloads";
    if (currentView === 'settings_tracking') return "Tracking";
    if (currentView === 'settings_browse') return "Browse";
    if (currentView === 'settings_data_storage' || currentView === 'data_storage') return "Data and storage";
    if (currentView === 'settings_security') return "Security and privacy";
    if (currentView === 'settings_advanced') return "Advanced";
    
    if (currentView === 'extension_repos') return "Extension repos";

    if (currentView === 'download_queue') return "Download Queue";
    if (currentView === 'categories') return "Categories";
    if (currentView === 'statistics') return "Statistics";
    if (currentView === 'about') return "About";
    if (currentView === 'help') return "Help";
    return activeTab;
  };

  if (isSetupComplete === null) {
      return null;
  }

  if (!isSetupComplete) {
      return <SetupView onComplete={handleSetupComplete} />;
  }

  const showBackButton = currentView !== 'main';
  const showBottomNav = currentView === 'main';

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title={getHeaderTitle()} 
        onBack={showBackButton ? handleBack : undefined} 
        showActions={currentView === 'main' && activeTab === NavTab.Library}
        onSearchClick={() => setCurrentView('search')}
      />
      <main className="flex-grow pb-20 pt-16">
        {renderContent()}
      </main>
      {showBottomNav && <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
};

export default App;
