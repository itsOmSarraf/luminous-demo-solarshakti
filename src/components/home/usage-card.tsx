// components/home/usage-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

export function UsageCard() {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-orange-100 rounded-lg">
                        <Zap className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col">
                            <div className="text-2xl font-semibold">30.276KWh</div>
                            <div className="text-gray-500 text-sm">Electricity Usage</div>
                        </div>

                        <div className="mt-4 space-y-2">
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div
                                    className="bg-orange-500 h-2 rounded-full"
                                    style={{ width: '40%' }}
                                />
                            </div>
                            <div className="text-right text-sm text-orange-500">40%</div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}