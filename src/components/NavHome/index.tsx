import { Share2, Settings } from "lucide-react";

 
  
export default function NavHome() {
  return (
    <div className="  text-white font-sans p-4">
      {/* Top Profile Card */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <div className="text-sm flex items-center font-semibold">
              John Cooper <span className="text-blue-500 ml-1">✔️</span>
            </div>
            <div className="text-sm text-gray-400">@johncoop</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1A1A2E] p-2 rounded-full">
            <Share2 size={16} />
          </button>
          <button className="bg-[#1A1A2E] p-2 rounded-full">
            <Settings size={16} />
          </button>
        </div>
  
      </div>
    </div>
  );
}
