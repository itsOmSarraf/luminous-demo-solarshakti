// app/notifications/page.tsx
import { BottomNav } from '@/components/layout/bottom-nav';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, AlertCircle, Info, CheckCircle2 } from 'lucide-react';

const notifications = [
    {
        icon: AlertCircle,
        title: "Inverter Alert",
        message: "Inverter efficiency dropped below 90%",
        time: "2 hours ago",
        type: "alert"
    },
    {
        icon: CheckCircle2,
        title: "System Update",
        message: "Software update completed successfully",
        time: "5 hours ago",
        type: "success"
    },
    {
        icon: Info,
        title: "Energy Milestone",
        message: "You've generated 1000kWh this month!",
        time: "1 day ago",
        type: "info"
    }
];

export default function NotificationsPage() {
    return (
        <main className="pb-24">
            <div className="p-4 space-y-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Notifications</h1>
                    <Bell className="w-6 h-6 text-gray-500" />
                </div>

                <div className="space-y-4">
                    {notifications.map((notification, index) => {
                        const Icon = notification.icon;
                        return (
                            <Card key={index}>
                                <CardContent className="p-4">
                                    <div className="flex gap-4">
                                        <div className={`
                                            p-2 rounded-full
                                            ${notification.type === 'alert' ? 'bg-red-100' : ''}
                                            ${notification.type === 'success' ? 'bg-green-100' : ''}
                                            ${notification.type === 'info' ? 'bg-blue-100' : ''}
                                        `}>
                                            <Icon className={`
                                                w-5 h-5
                                                ${notification.type === 'alert' ? 'text-red-600' : ''}
                                                ${notification.type === 'success' ? 'text-green-600' : ''}
                                                ${notification.type === 'info' ? 'text-blue-600' : ''}
                                            `} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">{notification.title}</h3>
                                            <p className="text-gray-500 text-sm mt-1">
                                                {notification.message}
                                            </p>
                                            <p className="text-gray-400 text-xs mt-2">
                                                {notification.time}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
            <BottomNav />
        </main>
    );
}