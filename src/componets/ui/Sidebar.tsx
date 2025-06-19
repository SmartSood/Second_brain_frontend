import { BrainIcon } from "../../icons/BrainLogo";

export function Sidebar(){
    return <div className="fixed left-0 top-0 h-full w-72 bg-white border-r border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-8">
            <div className="pr-2 text-purple-400"> <BrainIcon size="lg"></BrainIcon></div>
            <h1 className="text-xl font-bold text-gray-800">SecondBrain</h1>
        </div>
        
        <nav className="space-y-2">
            <a href="/dashboard" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">
                <span>Dashboard</span>
            </a>
        </nav>
    </div>
}