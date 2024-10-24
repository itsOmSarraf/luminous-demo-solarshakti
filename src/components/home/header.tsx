// components/home/header.tsx
import { Switch } from "@/components/ui/switch";

export function Header() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-semibold">Hi Naman</h1>
                <p className="text-gray-500 text-sm">Saturday 4, 2024</p>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Switch to solar electricity</span>
                <Switch />
            </div>
        </div>
    );
}