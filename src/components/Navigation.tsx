import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { NavList } from "./NavComponent/NavList";
import { NavLibrary } from "./NavComponent/NavLibrary";
import { ItemBox } from "./NavComponent/ItemBox";


export enum NavLibraryItems {
  None,
  Playlists,
  PodcastsAndShows,
}
export enum ItemType {
  Compact,
  List,
  Grid,
}



export default function Navigation({
  width,
  handleMinimize,
  handleMaximize,
  isOpen,
}: {
  width: number;
  handleMinimize: () => void;
  handleMaximize: () => void;
  isOpen: boolean;
}) {
  const [selected, setSelected] = useState(NavLibraryItems.None);
  const handleClickLibrary = () => {
    if (isOpen) handleMinimize();
    if (!isOpen) handleMaximize();
  };
  return (
    <div className={`nav flex flex-col gap-2`} style={{ height: "calc(100vh - 8px)", width: `${width}px` }}>
      <div className="bg-[#121212] rounded-lg p-5 pl-6 font-bold">
        <NavList isOpen={isOpen}></NavList>
      </div>
      <div className="bg-[#121212] rounded-lg p-3" style={{ height: "calc(100% - 120px)" }}>
        <div>
          <header className="flex items-center justify-between">
            <div className={`flex gap-3 w-full ${isOpen ? "justify-start" : "justify-center"}`}>
              <button onClick={handleClickLibrary} className="flex group gap-2">
                <span>
                  <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 group-hover:fill-white" fill="#a7a7a7">
                    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                  </svg>
                </span>
                {isOpen && (
                  <span className="font-bold text-[#a7a7a7] group-hover:text-white">
                    Your Library
                  </span>
                )}
              </button>
            </div>
            {isOpen && (
              <div className="flex gap-3">
                <button className="hover:bg-[#414141] rounded-full p-3">
                  <span>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="w-[18px] h-[18px]" fill="#a7a7a7">
                      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                    </svg>
                  </span>
                </button>
                <button className="hover:bg-[#414141] rounded-full p-3" onClick={handleMinimize} >
                  <span>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="w-[18px] h-[18px] rotate-180 " fill="#a7a7a7">
                      <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </header>
          {isOpen && (
            <NavLibrary
              selected={selected}
              setSelected={setSelected}
            ></NavLibrary>
          )}
        </div>
        <div className="w-full overflow-auto mt-3" style={{ height: "calc(100% - 100px)" }}>
          <ItemBox isOpen={isOpen}></ItemBox>
        </div>
      </div>
    </div>
  );
}