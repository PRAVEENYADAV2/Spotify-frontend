import { ItemType } from "../Navigation";

export function Item({ type, isOpen }: { type: ItemType; isOpen: boolean; }) {
  if (!isOpen) {
    return (
      <div
        className={`flex flex-col gap-2 my-3 rounded-lg cursor-pointer group ${isOpen ? "my-2 p-3 hover:bg-[#ababab1c] transition-all" : "mb-1"}`}
      >
        <div className="img w-full aspect-square overflow-hidden relative">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt="Liked songs"
            className="w-full h-full rounded-lg" />
        </div>
      </div>
    );
  }
  if (type === ItemType.Grid && isOpen) {
    return (
      <div
        className={`flex flex-col gap-2  rounded-lg cursor-pointer group ${isOpen ? "my-2 p-3 hover:bg-[#ababab1c] transition-all" : "mb-1"}`}
      >
        <div className="img w-full aspect-square overflow-hidden relative">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt="Liked songs"
            className="w-full h-full rounded-lg" />
          {isOpen && (
            <button className="absolute opacity-0 bottom-[-25px] right-[-16px] -translate-x-1/2 -translate-y-1/2 bg-[#1ED760] w-14 h-14 rounded-full flex items-center justify-center shadow-md shadow-[#3a3a3a6e] group-hover:bottom-[-16px] group-hover:opacity-100 transition-all duration-300">
              <i className="ri-play-mini-fill text-black text-4xl"></i>
            </button>
          )}
        </div>
        {isOpen && (
          <div>
            <p>Liked Songs</p>
            <div className="flex gap-1 text-[#727272] text-sm">
              <i className="ri-pushpin-fill text-[#1ED760]"></i>
              <p>Plalists</p>
              <span>•</span>
              <p>8 Songs</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (type === ItemType.List && isOpen) {
    return (
      <div className="flex gap-3 p-2 cursor-pointer items-center hover:bg-[#ababab1c] transition-all rounded-md">
        <div className="w-12 aspect-square rounded-lg overflow-hidden">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt="" />
        </div>
        <div>
          <p>Liked Songs</p>
          <div className="flex gap-1 text-[#727272] text-sm">
            <i className="ri-pushpin-fill text-[#1ED760]"></i>
            <p>Plalists</p>
            <span>•</span>
            <p>8 Songs</p>
          </div>
        </div>
      </div>
    );
  }
  if (type === ItemType.Compact && isOpen) {
    return (
      <div className="flex cursor-pointer hover:bg-[#ababab1c] items-center gap-2 p-1 rounded-sm font-semibold">
        <i className="ri-pushpin-fill text-[#1ED760]"></i>
        <p>Liked Songs</p>
        <div className="flex gap-1 text-[#727272] text-sm">
          <span>•</span>
          <p>Plalists</p>
        </div>
      </div>
    );
  }
}
