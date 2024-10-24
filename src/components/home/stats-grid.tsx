// components/home/stats-grid.tsx
import { Card, CardContent } from "@/components/ui/card";
import { BatteryCharging, LightbulbOff, Battery, Leaf } from "lucide-react";

const stats = [
    {
        label: "Total energy",
        value: "36.2",
        unit: "KWh",
        icon: LightbulbOff,
        iconClassName: "text-blue-500",
        bgClassName: "bg-blue-50",
    },
    {
        label: "Consumed",
        value: "28.2",
        unit: "KWh",
        icon: Battery,
        iconClassName: "text-purple-500",
        bgClassName: "bg-purple-50",
    },
    {
        label: "Capacity",
        value: "42.0",
        unit: "KWh",
        icon: BatteryCharging,
        iconClassName: "text-green-500",
        bgClassName: "bg-green-50",
    },
    {
        label: "CO2 Reduction",
        value: "28.2",
        unit: "KWh",
        icon: Leaf,
        iconClassName: "text-emerald-500",
        bgClassName: "bg-emerald-50",
    },
];

export function StatsGrid() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <Card key={stat.label}>
                        <CardContent className="p-4">
                            <div className="flex gap-3">
                                <div className={`p-2 rounded-lg ${stat.bgClassName}`}>
                                    <Icon className={`w-4 h-4 ${stat.iconClassName}`} />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                    <div className="text-xl font-semibold">
                                        {stat.value}
                                        <span className="text-sm font-normal text-gray-500 ml-1">
                                            {stat.unit}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}