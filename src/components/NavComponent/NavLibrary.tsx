import { NavLibraryItems } from "../Navigation";

export function NavLibrary({
  selected, setSelected,
}: {
  selected: NavLibraryItems;
  setSelected: (selected: NavLibraryItems) => void;
}) {
  const isOpenPlaylists = selected === NavLibraryItems.Playlists || selected === NavLibraryItems.None;
  const isOpenPodcastsAndShows = selected === NavLibraryItems.PodcastsAndShows ||
    selected === NavLibraryItems.None;
  const handleClickLibrary = (selected: NavLibraryItems) => {
    if (selected === NavLibraryItems.None) setSelected(NavLibraryItems.None);
    if (selected === NavLibraryItems.Playlists)
      setSelected(NavLibraryItems.Playlists);
    if (selected === NavLibraryItems.PodcastsAndShows)
      setSelected(NavLibraryItems.PodcastsAndShows);
  };
  return (
    <div className="mt-3">
      <div className="flex items-center gap-2 font-medium">
        {selected !== NavLibraryItems.None && (
          <button
            className="rounded-full bg-[#232323] h-8 w-8 font-semibold text-xl flex items-start justify-center"
            onClick={() => setSelected(NavLibraryItems.None)}
          >
            &times;
          </button>
        )}
        {/* show the buttons if it is selected or if it is not selected */}
        {isOpenPlaylists && (
          <button
            className={`px-4 py-1  rounded-full ${selected === NavLibraryItems.Playlists
              ? "bg-white text-black"
              : "bg-[#232323]"}`}
            onClick={() => handleClickLibrary(NavLibraryItems.Playlists)}
          >
            <div>
              <span>Playlists</span>
            </div>
          </button>
        )}
        {isOpenPodcastsAndShows && (
          <button
            className={`px-4 py-1  rounded-full ${selected === NavLibraryItems.PodcastsAndShows
              ? "bg-white text-black"
              : "bg-[#232323]"}`}
            onClick={() => handleClickLibrary(NavLibraryItems.PodcastsAndShows)}
          >
            <div>
              <span>Podcasts & Shows</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
