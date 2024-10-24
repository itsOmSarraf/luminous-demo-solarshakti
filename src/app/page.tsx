// app/page.tsx
import { Header } from '@/components/home/header';
import { UsageCard } from '@/components/home/usage-card';
import { StatsGrid } from '@/components/home/stats-grid';
import { EnergyChart } from '@/components/home/energy-chart';
import { BottomNav } from '@/components/layout/bottom-nav';

export default function Home() {
  return (
    <main className="pb-24"> {/* Add padding bottom for nav */}
      <div className="p-4 space-y-6">
        <Header />
        <UsageCard />
        <StatsGrid />
        <EnergyChart />
      </div>
      <BottomNav />
    </main>
  );
}