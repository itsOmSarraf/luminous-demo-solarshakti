// components/layout/mobile-container.tsx
import React from 'react';

export function MobileContainer({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center">
            <div className="w-full max-w-md bg-white min-h-screen relative">
                {children}
            </div>
        </div>
    );
}