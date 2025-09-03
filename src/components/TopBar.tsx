import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Compass, Bell, MessageSquare, Bookmark } from "lucide-react";

interface TopBarProps {
  nationalOnly: boolean;
  setNationalOnly: (value: boolean) => void;
  setPage: (page: string) => void;
}

function TopBar({ nationalOnly, setNationalOnly, setPage }: TopBarProps) {
  return (
    <div className="w-full border-b p-3 flex items-center justify-between bg-white sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="font-bold text-xl">StockGram</div>
        <div className="flex items-center gap-2 border rounded-full px-2 py-1">
          <button 
            className={`px-2 py-1 rounded ${nationalOnly ? 'bg-neutral-900 text-white' : ''}`} 
            onClick={() => setNationalOnly(true)}
          >
            National
          </button>
          <button 
            className={`px-2 py-1 rounded ${!nationalOnly ? 'bg-neutral-900 text-white' : ''}`} 
            onClick={() => setNationalOnly(false)}
          >
            Global
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:block"><Input placeholder="Search posts, tickers, companies" /></div>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setPage('Explore')}><Compass className="h-5 w-5" /></Button>
          <Button variant="ghost" onClick={() => setPage('Notifications')}><Bell className="h-5 w-5" /></Button>
          <Button variant="ghost" onClick={() => setPage('Messages')}><MessageSquare className="h-5 w-5" /></Button>
          <Button variant="ghost" onClick={() => setPage('Bookmarks')}><Bookmark className="h-5 w-5" /></Button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
