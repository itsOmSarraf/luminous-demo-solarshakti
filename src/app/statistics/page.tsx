// app/statistics/page.tsx
'use client'
import { StatsHeader } from "@/components/statistics/stats-header";
import { Component } from "@/components/statistics/generation-chart";
import { ConsumptionBreakdown } from "@/components/statistics/consumption-breakdown";
import { EfficiencyMetrics } from "@/components/statistics/efficiency-metrics";
import { BottomNav } from "@/components/layout/bottom-nav";

export default function StatisticsPage() {
    return (
        <main className="pb-24 bg-gray-50">
            <div className="p-4 space-y-6">
                <StatsHeader />
                <Component />
                <ConsumptionBreakdown />
                <EfficiencyMetrics />
            </div>
            <BottomNav />
        </main>
    );
}