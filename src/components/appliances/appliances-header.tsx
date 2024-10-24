// components/appliances/appliances-header.tsx
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function AppliancesHeader() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">My Appliances</h1>
                <Button size="sm" className="flex items-center gap-2">
                    <PlusCircle className="w-4 h-4" />
                    Add Device
                </Button>
            </div>
            <div className="flex justify-between items-center">
                <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Devices</SelectItem>
                        <SelectItem value="kitchen">Kitchen</SelectItem>
                        <SelectItem value="bathroom">Bathroom</SelectItem>
                        <SelectItem value="laundry">Laundry</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                    </SelectContent>
                </Select>
                <span className="text-sm text-gray-500">12 Devices</span>
            </div>
        </div>
    );
};