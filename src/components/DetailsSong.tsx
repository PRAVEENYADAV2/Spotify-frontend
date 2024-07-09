import "remixicon/fonts/remixicon.css";
export default function DetailsSong() {
  return <MainBox />;
}
function MainBox() {
  return (
    <div className="w-[350px] bg-[#121212]  rounded-md" style={{ height: "calc(100vh - 8px)"}}>
      <Nav />
    </div>
  );
}
function Nav() {
  const title = "Sweater waterlkzdygkdngriugyidkgreyieru".slice(0, 13) + "...";
  return (
    <div className="h-[70px] px-[16px] rounded-lg  flex items-center">
      <div className="flex justify-between w-full">
        <div className="">
          <a
            href="#"
            className="font-bold hover:underline w-[30pxpx] overflow-hidden"
          >
            {title}
          </a>
        </div>
        <div className="text-xl font-bold flex gap-[16px] items-center">
          <button className="rotate-90">
            <i className="ri-more-2-fill"></i>
          </button>
          <button>
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
