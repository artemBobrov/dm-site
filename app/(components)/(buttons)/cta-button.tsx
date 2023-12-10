import Link from 'next/link';
import React from 'react';

interface CtaButtonProps {
  text: string;
  size?: 'xl' | 'm';
}

const CtaButton: React.FC<CtaButtonProps> = ({ text, size = 'm' }) => {
    const paddingClass = size === 'xl' ? 'p-5' : 'p-4';

    return (
        <button className={`${paddingClass} text-white font-medium rounded bg-cta-blue shadow-solid hover:shadow-hover-solid active:shadow-active-solid transition-shadow`}>
            {text}
        </button>
    );
};

export default CtaButton;
