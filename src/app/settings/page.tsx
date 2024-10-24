// app/settings/page.tsx
import { BottomNav } from '@/components/layout/bottom-nav';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ChevronRight, Bell, Shield, User, Battery, Wifi } from 'lucide-react';

const settingsSections = [
    {
        title: "Account",
        items: [
            {
                icon: User,
                label: "Profile Settings",
                href: "#profile"
            },
            {
                icon: Shield,
                label: "Privacy & Security",
                href: "#privacy"
            },
        ]
    },
    {
        title: "System",
        items: [
            {
                icon: Bell,
                label: "Notifications",
                href: "#notifications",
                hasSwitch: true
            },
            {
                icon: Battery,
                label: "Battery Optimization",
                href: "#battery"
            },
            {
                icon: Wifi,
                label: "Connection Settings",
                href: "#connection"
            },
        ]
    }
];

export default function SettingsPage() {
    return (
        <main className="pb-24">
            <div className="p-4 space-y-6">
                <h1 className="text-2xl font-semibold">Settings</h1>

                {settingsSections.map((section) => (
                    <div key={section.title} className="space-y-3">
                        <h2 className="text-sm font-medium text-gray-500">
                            {section.title}
                        </h2>
                        <Card>
                            <CardContent className="p-0">
                                {section.items.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.label}
                                            className={`flex items-center justify-between p-4 ${index !== section.items.length - 1 ? 'border-b' : ''
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-5 h-5 text-gray-500" />
                                                <span>{item.label}</span>
                                            </div>
                                            {item.hasSwitch ? (
                                                <Switch />
                                            ) : (
                                                <ChevronRight className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
            <BottomNav />
        </main>
    );
}