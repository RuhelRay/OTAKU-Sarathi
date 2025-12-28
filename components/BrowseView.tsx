
import React, { useState, useMemo } from 'react';
import { MOCK_SOURCES_DATA } from '../constants';
import { Source } from '../types';
import { ICONS } from '../constants';

type ActionType = 'install' | 'uninstall' | 'update' | 'trust';

interface SourceItemProps {
    source: Source;
    installedVersion?: string;
    action: ActionType;
    onAction: (e: React.MouseEvent) => void;
    onClick?: () => void;
}

const SourceItem: React.FC<SourceItemProps> = ({ source, installedVersion, action, onAction, onClick }) => {
    const getButton = () => {
        switch (action) {
            case 'install':
                return <button onClick={onAction} className="ml-4 px-4 py-2 text-sm font-semibold rounded-md transition-colors flex-shrink-0 text-[#32d365] border border-[#32d365]/50 hover:bg-[#32d365]/10">Install</button>;
            case 'uninstall':
                return <button onClick={onAction} className="ml-4 px-4 py-2 text-sm font-semibold rounded-md transition-colors flex-shrink-0 text-red-400 border border-red-400/50 hover:bg-red-400/10">Uninstall</button>;
            case 'update':
                return <button onClick={onAction} className="ml-4 px-4 py-2 text-sm font-semibold rounded-md transition-colors flex-shrink-0 text-green-400 border border-green-400/50 hover:bg-green-400/10">Update</button>;
            case 'trust':
                return <button onClick={onAction} className="ml-4 px-4 py-2 text-sm font-semibold rounded-md transition-colors flex-shrink-0 text-yellow-400 border border-yellow-400/50 hover:bg-yellow-400/10">Trust</button>;
            default:
                return null;
        }
    };
    
    const versionText = action === 'update' 
        ? `v${installedVersion} \u2192 v${source.updatedVersion}`
        : `v${installedVersion || source.version}`;

    return (
        <div onClick={onClick} className={`flex items-center p-4 bg-[#2a2d30] rounded-lg transition-colors ${onClick ? 'cursor-pointer hover:bg-white/5' : ''}`}>
            <div className="p-2 bg-black/20 rounded-full mr-4 flex-shrink-0">
               <ICONS.Globe />
            </div>
            <div className="flex-grow min-w-0">
                <div className="flex items-center space-x-2">
                    <p className="font-semibold text-gray-100 truncate">{source.name}</p>
                    <span className="text-xs bg-gray-600 text-gray-200 px-2 py-0.5 rounded-full flex-shrink-0">{source.lang}</span>
                    {source.isNsfw && <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full flex-shrink-0">18+</span>}
                </div>
                <p className="text-sm text-gray-400">{versionText}</p>
            </div>
            {getButton()}
        </div>
    );
};

const LocalSourceItem: React.FC = () => {
    return (
        <div className="flex items-center p-4 bg-[#2a2d30] rounded-lg cursor-pointer hover:bg-white/5">
             <div className="p-2 bg-black/20 rounded-full mr-4 flex-shrink-0">
               <ICONS.Folder className="w-10 h-10 text-gray-400" />
            </div>
             <div className="flex-grow min-w-0">
                <p className="font-semibold text-gray-100 truncate">Local source</p>
                <p className="text-sm text-gray-400">Other</p>
            </div>
            <div>
                 <p className="text-sm font-semibold text-[#32d365]">Latest</p>
            </div>
        </div>
    );
};


type Tab = 'sources' | 'extensions' | 'migrate';

interface BrowseViewProps {
    onSourceClick: (source: Source) => void;
}

type InstalledState = { version: string; trusted: boolean };

const BrowseView: React.FC<BrowseViewProps> = ({ onSourceClick }) => {
  const [activeTab, setActiveTab] = useState<Tab>('sources');
  const [installedExtensions, setInstalledExtensions] = useState(() => new Map<number, InstalledState>([
      [1, { version: '1.4.29', trusted: true }], 
      [2, { version: '1.2.14', trusted: false }]
  ]));
  
  const handleAction = (source: Source, action: ActionType, e: React.MouseEvent) => {
    e.stopPropagation();
    setInstalledExtensions(prev => {
        const newMap = new Map(prev);
        const current = newMap.get(source.id);
        
        switch(action) {
            case 'install':
                newMap.set(source.id, { version: source.version, trusted: false });
                break;
            case 'uninstall':
                newMap.delete(source.id);
                break;
            case 'update':
                if (source.updatedVersion) {
                    newMap.set(source.id, { version: source.updatedVersion, trusted: true });
                }
                break;
            case 'trust':
                if (current) {
                    newMap.set(source.id, { ...current, trusted: true });
                }
                break;
        }
        return newMap;
    });
  };
  
  const { sources, extensions, updatesCount } = useMemo(() => {
    const repoSources = MOCK_SOURCES_DATA;

    const trustedSources: Source[] = [];
    const extensionItems: { source: Source, action: ActionType }[] = [];
    
    repoSources.forEach(source => {
        const installed = installedExtensions.get(source.id);
        
        if (installed) {
            if (installed.trusted) {
                const hasUpdate = source.updatedVersion && source.updatedVersion > installed.version;
                if (hasUpdate) {
                    extensionItems.push({ source, action: 'update' });
                } else {
                    trustedSources.push(source);
                }
            } else { 
                extensionItems.push({ source, action: 'trust' });
            }
        } else { 
            extensionItems.push({ source, action: 'install' });
        }
    });

    const updatesCount = extensionItems.filter(item => item.action === 'update').length;

    return { sources: trustedSources, extensions: extensionItems, updatesCount };
  }, [installedExtensions]);

  const renderContent = () => {
      switch(activeTab) {
          case 'sources':
              return (
                  <div className="space-y-4">
                      <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-2 px-2">Other</h2>
                        <LocalSourceItem />
                      </div>
                      <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-2 px-2">Trusted</h2>
                        <div className="space-y-2">
                          {sources.map(source => (
                              <SourceItem 
                                  key={source.id} 
                                  source={source}
                                  installedVersion={installedExtensions.get(source.id)?.version}
                                  action="uninstall"
                                  onAction={(e) => handleAction(source, 'uninstall', e)}
                                  onClick={() => onSourceClick(source)}
                              />
                          ))}
                        </div>
                      </div>
                  </div>
              );
          case 'extensions':
               return (
                  <div className="space-y-2">
                      {extensions.map(({source, action}) => (
                          <SourceItem 
                              key={source.id} 
                              source={source}
                              installedVersion={installedExtensions.get(source.id)?.version}
                              action={action}
                              onAction={(e) => handleAction(source, action, e)}
                          />
                      ))}
                  </div>
              );
          case 'migrate':
              return <div className="text-center py-10 text-gray-500">Migration feature is not implemented.</div>;
          default:
              return null;
      }
  };

  return (
    <div className="container mx-auto p-4">
       <div className="mb-4 border-b border-white/10">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button 
                onClick={() => setActiveTab('sources')}
                className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'sources' 
                    ? 'border-[#32d365] text-[#32d365]' 
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                }`}
            >
                Sources
            </button>
            <button 
                onClick={() => setActiveTab('extensions')}
                className={`relative whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'extensions' 
                    ? 'border-[#32d365] text-[#32d365]' 
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                }`}
            >
                Extensions
                {updatesCount > 0 && (
                    <span className="absolute top-1 -right-3 h-5 w-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {updatesCount}
                    </span>
                )}
            </button>
            <button 
                onClick={() => setActiveTab('migrate')}
                className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'migrate' 
                    ? 'border-[#32d365] text-[#32d365]' 
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                }`}
            >
                Migrate
            </button>
          </nav>
        </div>
        {renderContent()}
    </div>
  );
};

export default BrowseView;
