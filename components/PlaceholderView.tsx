
import React from 'react';

interface PlaceholderViewProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    message?: string;
}

const PlaceholderView: React.FC<PlaceholderViewProps> = ({ icon: Icon, title, message }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] text-gray-500 text-center p-6">
            <div className="p-6 bg-white/5 rounded-full mb-6">
                <Icon className="w-16 h-16 opacity-50" />
            </div>
            <h2 className="text-2xl font-bold text-gray-200 mb-2">{title}</h2>
            <p className="text-gray-400">{message || "This feature is under construction."}</p>
        </div>
    );
};

export default PlaceholderView;
