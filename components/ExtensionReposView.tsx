
import React, { useState } from 'react';
import { ICONS, MOCK_REPOSITORIES } from '../constants';
import { Repository } from '../types';

const ExtensionReposView: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>(MOCK_REPOSITORIES);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [newRepoUrl, setNewRepoUrl] = useState('');

    const handleAddRepo = () => {
        if (!newRepoUrl) return;
        const newRepo: Repository = {
            id: Date.now(),
            name: 'New Repo', // Simplified for now
            url: newRepoUrl,
            sourceCount: 0
        };
        setRepos([...repos, newRepo]);
        setNewRepoUrl('');
        setShowAddDialog(false);
    };

    const handleDeleteRepo = (id: number) => {
        setRepos(repos.filter(r => r.id !== id));
    };

    return (
        <div className="container mx-auto p-4 min-h-[calc(100vh-80px)] relative">
            {repos.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <div className="text-6xl text-gray-600 mb-4">.·´¯`(>▂&lt;)´¯`·.</div>
                    <p className="text-gray-400">You have no repos set.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {repos.map(repo => (
                        <div key={repo.id} className="bg-[#2a2d30] p-4 rounded-lg flex items-center justify-between">
                            <div className="min-w-0">
                                <h3 className="font-semibold text-gray-100 truncate">{repo.name}</h3>
                                <p className="text-xs text-gray-400 truncate">{repo.url}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => handleDeleteRepo(repo.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                                    <ICONS.Trash className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <button 
                onClick={() => setShowAddDialog(true)}
                className="fixed bottom-6 right-6 bg-[#32d365] text-black font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 z-50"
            >
                <ICONS.Plus className="w-5 h-5" /> Add
            </button>

            {showAddDialog && (
                <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
                    <div className="bg-[#2a2d30] w-full max-w-md rounded-xl p-6">
                        <h2 className="text-xl font-bold text-gray-100 mb-2">Add repo</h2>
                        <p className="text-sm text-gray-400 mb-4">
                            Add additional repos to Mihon. This should be a URL that ends with "index.min.json".
                        </p>
                        
                        <div className="relative mb-6">
                            <label className="absolute -top-2 left-3 bg-[#2a2d30] px-1 text-xs text-[#32d365]">Repo URL</label>
                            <input 
                                type="text" 
                                value={newRepoUrl}
                                onChange={(e) => setNewRepoUrl(e.target.value)}
                                className="w-full bg-transparent border-2 border-[#32d365] rounded-lg p-3 text-white focus:outline-none"
                                autoFocus
                            />
                            <p className="text-xs text-gray-500 mt-1">*required</p>
                        </div>

                        <div className="flex justify-end gap-4">
                            <button onClick={() => setShowAddDialog(false)} className="text-[#32d365] font-semibold">Cancel</button>
                            <button onClick={handleAddRepo} className="text-[#32d365] font-semibold opacity-50 hover:opacity-100">Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExtensionReposView;
