
import React from 'react';
import { ICONS } from '../constants';

export const SettingsHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="px-4 pb-2 pt-6 text-sm font-bold text-[#32d365] uppercase tracking-wide">
        {children}
    </h3>
);

interface SettingsItemProps {
    title: string;
    subtitle?: string;
    onClick?: () => void;
    rightElement?: React.ReactNode;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SettingsItem: React.FC<SettingsItemProps> = ({ title, subtitle, onClick, rightElement, icon: Icon }) => (
    <div onClick={onClick} className={`px-4 py-3.5 flex items-center justify-between hover:bg-white/5 transition-colors ${onClick ? 'cursor-pointer' : ''}`}>
        <div className="flex items-center min-w-0 flex-1 mr-4">
            {Icon && <Icon className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />}
            <div className="min-w-0">
                <p className="text-base font-normal text-gray-100 truncate">{title}</p>
                {subtitle && <p className="text-sm text-gray-400 mt-0.5 break-words line-clamp-2">{subtitle}</p>}
            </div>
        </div>
        {rightElement && <div className="flex-shrink-0">{rightElement}</div>}
    </div>
);

interface SettingsToggleProps extends Omit<SettingsItemProps, 'rightElement' | 'onClick'> {
    value: boolean;
    onToggle: (val: boolean) => void;
}

export const SettingsToggle: React.FC<SettingsToggleProps> = ({ title, subtitle, value, onToggle, icon }) => (
    <SettingsItem
        title={title}
        subtitle={subtitle}
        icon={icon}
        onClick={() => onToggle(!value)}
        rightElement={
            <div className={`relative w-12 h-7 rounded-full transition-colors ${value ? 'bg-[#32d365]' : 'bg-gray-600'}`}>
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${value ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
        }
    />
);

export const SettingsInfoBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="mx-4 my-2 p-4 bg-white/5 rounded-lg flex items-start gap-3">
        <ICONS.Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-300 leading-relaxed">{children}</p>
    </div>
);

interface SettingsSliderProps {
    title: string;
    subtitle?: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (val: number) => void;
    label?: string; // e.g. "5" or "0%"
}

export const SettingsSlider: React.FC<SettingsSliderProps> = ({ title, subtitle, value, min, max, step = 1, onChange, label }) => (
    <div className="px-4 py-3.5">
         <div className="flex justify-between items-baseline mb-2">
             <div>
                <p className="text-base font-normal text-gray-100">{title}</p>
                {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
             </div>
             {label && <span className="text-sm font-mono text-[#32d365]">{label}</span>}
         </div>
         <input 
            type="range" 
            min={min} 
            max={max} 
            step={step} 
            value={value} 
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#32d365]"
         />
    </div>
);
