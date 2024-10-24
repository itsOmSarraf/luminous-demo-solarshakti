// components/appliances/appliances-list.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
    WashingMachine,
    Tv,
    Refrigerator,
    Coffee,
    Wifi,
    Power,
    Clock,
    Activity
} from "lucide-react";

const appliances = [
    {
        id: 1,
        name: "Washing Machine",
        location: "Laundry Room",
        icon: WashingMachine,
        status: "Running",
        powerUsage: "1.2kW",
        timeLeft: "45 mins",
        isOn: true,
        type: "laundry",
    },
    {
        id: 2,
        name: "Smart TV",
        location: "Living Room",
        icon: Tv,
        status: "Standby",
        powerUsage: "0.1kW",
        isOn: false,
        type: "entertainment",
    },
    {
        id: 3,
        name: "Refrigerator",
        location: "Kitchen",
        icon: Refrigerator,
        status: "Running",
        powerUsage: "0.8kW",
        isOn: true,
        type: "kitchen",
    },
    {
        id: 4,
        name: "Coffee Maker",
        location: "Kitchen",
        icon: Coffee,
        status: "Scheduled",
        powerUsage: "0.9kW",
        nextRun: "Tomorrow 7:00 AM",
        isOn: false,
        type: "kitchen",
    },
];

export function AppliancesList() {
    return (
        <div className="grid gap-4">
            {appliances.map((appliance) => {
                const Icon = appliance.icon;
                return (
                    <Card key={appliance.id} className="relative overflow-hidden">
                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className={`p-2 rounded-lg ${appliance.isOn ? 'bg-green-100' : 'bg-gray-100'
                                        }`}>
                                        <Icon className={`w-6 h-6 ${appliance.isOn ? 'text-green-600' : 'text-gray-600'
                                            }`} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{appliance.name}</h3>
                                        <p className="text-sm text-gray-500">{appliance.location}</p>

                                        <div className="mt-2 flex flex-wrap gap-2">
                                            <div className="flex items-center gap-1 text-sm">
                                                <Power className="w-4 h-4 text-gray-400" />
                                                <span>{appliance.powerUsage}</span>
                                            </div>
                                            {appliance.timeLeft && (
                                                <div className="flex items-center gap-1 text-sm">
                                                    <Clock className="w-4 h-4 text-gray-400" />
                                                    <span>{appliance.timeLeft}</span>
                                                </div>
                                            )}
                                            {appliance.nextRun && (
                                                <div className="flex items-center gap-1 text-sm">
                                                    <Clock className="w-4 h-4 text-gray-400" />
                                                    <span>{appliance.nextRun}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <Wifi className={`w-4 h-4 ${appliance.isOn ? 'text-green-500' : 'text-gray-400'
                                                    }`} />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <Badge
                                                variant={appliance.status === "Running" ? "default" : "secondary"}
                                                className="text-xs"
                                            >
                                                {appliance.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Activity className={`w-4 h-4 ${appliance.isOn ? 'text-green-500' : 'text-gray-300'
                                        }`} />
                                    <Switch checked={appliance.isOn} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}