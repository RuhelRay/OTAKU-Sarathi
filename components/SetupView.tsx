
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface SetupViewProps {
    onComplete: () => void;
}

enum SetupStep {
  Storage,
  Theme,
  Permissions,
  Finish,
}

const SetupView: React.FC<SetupViewProps> = ({ onComplete }) => {
    const [step, setStep] = useState<SetupStep>(SetupStep.Storage);
    
    const nextStep = () => {
        if (step === SetupStep.Finish) {
            onComplete();
        } else {
            setStep(s => s + 1);
        }
    };
    
    const prevStep = () => {
        if (step > SetupStep.Storage) {
            setStep(s => s - 1);
        }
    };

    const renderStep = () => {
        switch(step) {
            case SetupStep.Storage: return <StorageStep />;
            case SetupStep.Theme: return <ThemeStep />;
            case SetupStep.Permissions: return <PermissionsStep />;
            case SetupStep.Finish: return <FinishStep />;
            default: return <StorageStep />;
        }
    };

    const getButtonText = () => {
        switch(step) {
            case SetupStep.Finish: return "Get started";
            default: return "Next";
        }
    };

    return (
        <div className="flex flex-col min-h-screen p-6 bg-[#181a1b] text-gray-200">
            <header className="flex items-center gap-4">
                <ICONS.Rocket className="w-8 h-8 text-[#32d365]" />
                <div>
                    <h1 className="text-3xl font-bold">Welcome!</h1>
                    <p className="text-gray-400">Let's set some things up first.</p>
                </div>
            </header>
            
            <main className="flex-grow flex flex-col justify-center py-8">
                {renderStep()}
            </main>
            
            <footer className="flex items-center justify-between">
                {step > SetupStep.Storage && (
                    <button onClick={prevStep} className="font-semibold text-gray-400 hover:text-white transition-colors">
                        Back
                    </button>
                )}
                <div className="flex-grow" />
                <button onClick={nextStep} className="bg-[#32d365] text-black font-bold py-3 px-8 rounded-full transition-transform hover:scale-105">
                    {getButtonText()}
                </button>
            </footer>
        </div>
    );
};

const StorageStep = () => {
    const [folder, setFolder] = useState("No storage location set");
    return (
        <div className="space-y-6">
            <div>
                <p className="mb-2">Select a folder where OTAKU Sarathi will store chapter downloads, backups, and more.</p>
                <p className="text-sm text-gray-400">A dedicated folder is recommended.</p>
                <div className="mt-4 p-4 bg-black/20 rounded-lg">
                    <span className="text-xs text-gray-400">Selected folder:</span>
                    <p>{folder}</p>
                </div>
                 <button onClick={() => setFolder("/OTAKU Sarathi/ (simulated)")} className="w-full bg-[#32d365]/20 text-[#32d365] font-bold py-3 px-4 rounded-lg mt-2 transition-colors hover:bg-[#32d365]/30">
                    Select a folder
                </button>
            </div>
            <div className="h-px bg-white/10"></div>
            <div>
                 <p className="mb-2">Updating from an older version and not sure what to select?</p>
                 <button className="w-full bg-[#32d365]/20 text-[#32d365] font-bold py-3 px-4 rounded-lg transition-colors hover:bg-[#32d365]/30">
                    Storage guide
                </button>
            </div>
        </div>
    );
};

const ThemeStep = () => {
    const [mode, setMode] = useState<'System' | 'Light' | 'Dark'>('System');
    const [theme, setTheme] = useState<'Default' | 'Dynamic' | 'Catppuccin'>('Dynamic');
    
    return (
        <div>
            <div className="flex items-center justify-center p-1 bg-black/20 rounded-full mb-6">
                {(['System', 'Light', 'Dark'] as const).map(m => (
                    <button key={m} onClick={() => setMode(m)} className={`flex-1 py-2 text-sm font-semibold rounded-full transition-colors ${mode === m ? 'bg-[#32d365] text-black' : 'text-gray-300'}`}>
                        {m}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
                 {(['Default', 'Dynamic', 'Catppuccin'] as const).map(t => (
                    <div key={t} onClick={() => setTheme(t)} className={`relative p-2 border-2 rounded-lg cursor-pointer transition-colors ${theme === t ? 'border-[#32d365]' : 'border-gray-600'}`}>
                        {/* Fake UI preview */}
                        <div className="h-20 bg-gray-700/50 rounded-md p-2 space-y-1">
                           <div className="h-4 bg-gray-500/50 rounded w-3/4"></div>
                           <div className="h-8 bg-gray-500/50 rounded w-1/2"></div>
                           <div className="h-3 bg-gray-500/50 rounded w-full"></div>
                        </div>
                        <p className="text-center text-sm mt-2">{t}</p>
                         {theme === t && <ICONS.CheckCircle className="absolute top-1 right-1 w-5 h-5 text-[#32d365]" fill="#181a1b" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

const PermissionItem: React.FC<{ title: string; description: string; isToggle?: boolean }> = ({ title, description, isToggle = false }) => {
    const [granted, setGranted] = useState(false);
    
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="font-semibold text-gray-100">{title}</p>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
            {isToggle ? (
                <div onClick={() => setGranted(!granted)} className={`relative w-12 h-7 rounded-full transition-colors cursor-pointer ${granted ? 'bg-[#32d365]' : 'bg-gray-600'}`}>
                    <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${granted ? 'transform translate-x-5' : ''}`}></div>
                </div>
            ) : (
                <button onClick={() => setGranted(true)} className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors ${granted ? 'bg-gray-600 text-gray-300' : 'bg-[#32d365]/20 text-[#32d365] border border-[#32d365]/50'}`}>
                    {granted ? 'Granted' : 'Grant'}
                </button>
            )}
        </div>
    );
};


const PermissionsStep = () => {
    return (
        <div className="space-y-6">
            <PermissionItem title="Install apps permission" description="To install source extensions." />
            <PermissionItem title="Notification permission" description="Get notified for library updates and more." />
            <PermissionItem title="Background battery usage" description="Avoid interruptions to library updates." />
            <div className="h-px bg-white/10"></div>
            <PermissionItem title="Send crash logs" description="Send anonymized crash logs to developers." isToggle />
            <PermissionItem title="Allow analytics" description="Send anonymized usage data to improve app." isToggle />
        </div>
    );
};

const FinishStep = () => {
     return (
        <div className="space-y-6">
            <div>
                <p className="mb-2">New to OTAKU Sarathi? We recommend checking out the getting started guide.</p>
                <button className="w-full flex items-center justify-center gap-2 bg-[#32d365]/20 text-[#32d365] font-bold py-3 px-4 rounded-lg mt-2 transition-colors hover:bg-[#32d365]/30">
                    <ICONS.FileText /> Getting started guide
                </button>
            </div>
            <div className="h-px bg-white/10"></div>
            <div>
                 <p className="mb-2">Reinstalling OTAKU Sarathi?</p>
                 <button className="w-full flex items-center justify-center gap-2 bg-[#32d365]/20 text-[#32d365] font-bold py-3 px-4 rounded-lg transition-colors hover:bg-[#32d365]/30">
                    <ICONS.Repeat /> Restore backup
                </button>
            </div>
        </div>
    );
};


export default SetupView;
