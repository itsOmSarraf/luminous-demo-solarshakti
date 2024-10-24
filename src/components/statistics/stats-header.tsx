// components/statistics/stats-header.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function StatsHeader() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Statistics</h1>
                <Select defaultValue="week">
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="day">Day</SelectItem>
                        <SelectItem value="week">Week</SelectItem>
                        <SelectItem value="month">Month</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="text-sm text-gray-500">Total Generation</div>
                        <div className="text-2xl font-bold text-green-600">1,234 kWh</div>
                        <div className="text-sm text-green-600">↑ 12% vs last week</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-sm text-gray-500">Total Consumption</div>
                        <div className="text-2xl font-bold text-orange-600">987 kWh</div>
                        <div className="text-sm text-orange-600">↓ 5% vs last week</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}