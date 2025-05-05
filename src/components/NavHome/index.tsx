import { Share2, Settings, Grid, UserPlus2, PlusCircle, Home, BarChart3 } from "lucide-react";

const feedImages = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  ];

  
export default function NavHome() {
  return (
    <div className="min-h-screen  text-white font-sans p-4">
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

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mb-4">
        <div>
          <div className="font-bold text-lg">256790</div>
          <div className="text-xs text-gray-400">Rating</div>
        </div>
        <div>
          <div className="font-bold text-lg">1.5K</div>
          <div className="text-xs text-gray-400">Followers</div>
        </div>
        <div>
          <div className="font-bold text-lg">1.2K</div>
          <div className="text-xs text-gray-400">Following</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-4">
        <button className="flex-1 bg-[#4F46E5] text-white py-2 rounded-lg text-sm font-medium">
          Edit profile
        </button>
        <button className="flex-1 bg-[#1A1A2E] text-white py-2 rounded-lg text-sm font-medium">
          Insights
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-around text-sm border-b border-gray-700 pb-2 mb-4">
        <button className="text-white font-medium">Feed</button>
        <button className="text-gray-400">Reels</button>
        <button className="text-gray-400">Tagged</button>
      </div>

      {/* Feed Grid */}
      <div className="grid grid-cols-3 gap-2 mb-20">
            {feedImages.map((url, i) => (
                <div key={i} className="w-full aspect-square rounded-lg overflow-hidden bg-gray-800">
                <img
                    src={url}
                    alt={`Feed ${i}`}
                    className="w-full h-full object-cover"
                />
                </div>
            ))}
            </div>


      {/* Floating Action Bar */}
      <div className="fixed bottom-4 left-0 right-0 px-6">
        <div className="bg-[#1A1A2E] flex items-center justify-between rounded-full px-4 py-2">
          <button className="p-2 rounded-full hover:bg-[#2a2a40]">
            <Grid size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-[#2a2a40]">
            <Home size={20} />
          </button>
          <button className="p-2 rounded-full text-blue-500">
            <PlusCircle size={28} />
          </button>
          <button className="p-2 rounded-full hover:bg-[#2a2a40]">
            <UserPlus2 size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-[#2a2a40]">
            <BarChart3 size={20} />
          </button>
          
        </div>
      </div>
    </div>
  );
}
