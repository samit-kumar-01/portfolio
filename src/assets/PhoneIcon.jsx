import React from 'react';

const PhoneIcon = ({ className = 'w-6 h-6 text-white' }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h2a1 1 0 011 1v3a1 1 0 01-.29.71l-1.42 1.42a16 16 0 006.36 6.36l1.42-1.42A1 1 0 0116 14h3a1 1 0 011 1v2a2 2 0 01-2 2A17 17 0 013 5z"
      />
    </svg>
  );
};

export default PhoneIcon;
