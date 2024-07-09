import { useEffect } from "react";

export default function Search() {
  return (
    <div className="w-full h-full p-4 pt-2 pb-0 overflow-hidden">
      <Nav />
      <div className="w-full bg-red-800 mt-3" style={{ height: "calc(100% - 44px)" }}>

      </div>
    </div>
  );
}

function Nav() {
  useEffect(() => {
    const input = document.getElementById("searchInput")!;
    const form = document.getElementById("searchForm")!;

    const handleFocus = () => {
      form.classList.add("border-white", "border");
    };

    const handleBlur = () => {
      form.classList.remove("border-white", "border");
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);
  return (
    <nav id="searchNav" className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div>
          <button className="">
            <i className="ri-arrow-left-s-line text-3xl font-extralight bg-black w-8 h-8 rounded-full flex items-center justify-center text-[#727272] hover:scale-105 hover:text-white"></i>
          </button>
          <button>
            <i className="ri-arrow-right-s-line text-3xl font-extralight ml-2 bg-black w-8 h-8 rounded-full flex items-center justify-center text-[#727272] hover:scale-105 hover:text-white"></i>
          </button>
        </div>
        <div>
          <form
            id="searchForm"
            className="flex items-center gap-2 bg-[#242424] p-3 py-2 rounded-full  hover:border-white hover:border">
            <i className="ri-search-line text-[#a6a6a6] text-xl"></i>
            <input
              id="searchInput"
              type="text"
              placeholder="What do you want to play?"
              className="w-[300px] bg-[#242424] outline-none text-sm font-semibold"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button>
          <i className="ri-notification-2-line text-bold text-xl bg-black w-8 h-8 rounded-full flex items-center justify-center text-[#727272] hover:scale-105 hover:text-white"></i>
        </button>
        <button className="w-8 h-8 rounded-full bg-orange-600 font-bold text-black border-[3px] border-black hover:scale-105">
          P
        </button>
      </div>
    </nav>
  );
}
