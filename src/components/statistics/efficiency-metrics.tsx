// components/statistics/efficiency-metrics.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Sun, Zap, Leaf } from "lucide-react";

const metrics = [
    {
        title: "Energy Efficiency",
        value: "94%",
        description: "System performance",
        trend: "+2.5%",
        icon: Zap,
        color: "text-yellow-500",
    },
    {
        title: "Peak Generation",
        value: "12.4kW",
        description: "Highest today",
        trend: "+1.2kW",
        icon: Sun,
        color: "text-orange-500",
    },
    {
        title: "Battery Health",
        value: "98%",
        description: "Optimal condition",
        trend: "Excellent",
        icon: Battery,
        color: "text-green-500",
    },
    {
        title: "CO2 Avoided",
        value: "845kg",
        description: "This month",
        trend: "+125kg",
        icon: Leaf,
        color: "text-green-600",
    },
];

export function EfficiencyMetrics() {
    return (
        <div className="grid gap-4">
            {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                    <Card key={metric.title}>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-gray-500">{metric.title}</p>
                                    <div className="flex items-baseline space-x-2">
                                        <p className="text-2xl font-semibold">{metric.value}</p>
                                        <span className="text-sm text-green-500">{metric.trend}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{metric.description}</p>
                                </div>
                                <Icon className={`w-8 h-8 ${metric.color}`} />
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}