import React from 'react';

export const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const DurgaEyeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-white" }) => (
  <svg viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left Eye */}
    <path
      d="M3 13C8 6 16 6 21 13C16 20 8 20 3 13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="3.2" fill="currentColor" />
    <path d="M5 8C9 4 15 4 19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

    {/* Right Eye */}
    <path
      d="M23 13C28 6 36 6 41 13C36 20 28 20 23 13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="13" r="3.2" fill="currentColor" />
    <path d="M25 6C29 4 35 4 39 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

    {/* Sacred Third Eye (Trinayan) Center Tilak */}
    <path
      d="M22 3.5C20.5 7.5 20.5 10 22 13C23.5 10 23.5 7.5 22 3.5Z"
      fill="currentColor"
    />
    <circle cx="22" cy="2" r="1.2" fill="currentColor" />
  </svg>
);
