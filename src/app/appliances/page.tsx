// app/appliances/page.tsx
import { BottomNav } from '@/components/layout/bottom-nav';
import { AppliancesList } from '@/components/appliances/appliances-list';
import { AppliancesHeader } from '@/components/appliances/appliances-header';

export default function AppliancesPage() {
    return (
        <main className="pb-24 bg-gray-50">
            <div className="p-4 space-y-6">
                <AppliancesHeader />
                <AppliancesList />
            </div>
            <BottomNav />
        </main>
    );
}