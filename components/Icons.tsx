import React from 'react';

export const ChatIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export const NLogoIcon: React.FC = () => (
    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-gray-700 shadow-lg">
        <span className="text-white font-extrabold text-xl italic -mt-1">N</span>
    </div>
);

// FIX: Update GptIcon to accept a color prop and apply it as text color for the SVG.
export const GptIcon: React.FC<{ className?: string; color: string; }> = ({ className, color }) => (
    <svg className={className} style={{ color }} width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM26.968 25.184L25.136 23.328C24.32 24.144 23.168 24.64 21.824 24.64C19.648 24.64 17.84 22.832 17.84 20.656C17.84 18.48 19.648 16.672 21.824 16.672C23.168 16.672 24.32 17.168 25.136 17.984L26.968 16.128C25.648 14.808 23.864 14 21.824 14C18.336 14 15.488 16.848 15.488 20.336C15.488 23.824 18.336 26.672 21.824 26.672C23.864 26.672 25.648 25.896 26.968 25.184Z" fill="currentColor"/>
    </svg>
);
  
// FIX: Update ClaudeIcon to accept a color prop and use it for the background color, improving visual consistency.
export const ClaudeIcon: React.FC<{ className?: string; color: string; }> = ({ className, color }) => (
    <div className={`font-bold text-lg flex items-center justify-center w-6 h-6 rounded-md text-white ${className}`} style={{ backgroundColor: color }}>
      A
    </div>
);
  
// FIX: Update GeminiIcon to accept a color prop and apply it as the fill color for the SVG.
export const GeminiIcon: React.FC<{ className?: string; color: string; }> = ({ className, color }) => (
    <svg className={className} style={{ color }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5L14.65 8.35L21 9.25L16.5 13.5L17.8 19.5L12 16.5L6.2 19.5L7.5 13.5L3 9.25L9.35 8.35L12 2.5Z" />
    </svg>
);

// FIX: Update DefaultIcon to accept a color prop and use it for the background color, fixing a bug where it was always gray.
export const DefaultIcon: React.FC<{ className?: string; color: string; }> = ({ className, color }) => (
    <div className={`w-6 h-6 rounded-full ${className}`} style={{ backgroundColor: color }} />
);
