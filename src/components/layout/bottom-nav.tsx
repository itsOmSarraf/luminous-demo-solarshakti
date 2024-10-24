// components/layout/bottom-nav.tsx
"use client";

import { Home, BarChart2, Bell, Settings, Power } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        {
            icon: Home,
            label: "Home",
            href: "/",
        },
        {
            icon: BarChart2,
            label: "Statistics",
            href: "/statistics",
        },
        {
            icon: Power,
            label: "Appliances",
            href: "/appliances",
        },
        {
            icon: Bell,
            label: "Notification",
            href: "/notifications",
        },
        {
            icon: Settings,
            label: "Settings",
            href: "/settings",
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t">
            <div className="flex justify-around p-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex flex-col items-center gap-1"
                        >
                            <Icon
                                className={`w-6 h-6 ${isActive ? 'text-green-500' : 'text-gray-400'
                                    } transition-colors`}
                            />
                            <span
                                className={`text-xs ${isActive ? 'text-green-500' : 'text-gray-400'
                                    } transition-colors`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}