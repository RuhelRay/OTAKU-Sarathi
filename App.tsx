
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
import { MOCK_MANGA_DATA } from './constants';

type View = 
  | 'main' 
  | 'search' 
  | 'settings'
  | 'manga_detail'
  | 'source_detail';

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
    if (currentView === 'manga_detail' || currentView === 'source_detail') {
        setSelectedManga(null);
        setSelectedSource(null);
        setCurrentView('main');
    } else if (currentView === 'search' || currentView === 'settings') {
        setCurrentView('main');
    }
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
            return <SettingsView />;
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
                    return <MoreView onNavigate={setCurrentView} />;
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
