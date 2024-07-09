import "remixicon/fonts/remixicon.css";
export default function DetailsSong() {
  return <MainBox />;
}
function MainBox() {
  return (
    <div
      className="w-[350px] bg-[#121212]  rounded-md"
      style={{ height: "calc(100vh - 8px)" }}
    >
      <Nav />
      <DetailsBody />
    </div>
  );
}
function Nav() {
  const title = "Sweater waterlkzdygkdngriugyidkgreyieru".slice(0, 13) + "...";
  return (
    <div className="h-[70px] w-full px-[16px] rounded-t-lg  flex items-center">
      <div className="flex justify-between w-full">
        <div className="">
          <a
            href="#"
            className="font-bold text-lg hover:underline w-[30pxpx] overflow-hidden"
          >
            {title}
          </a>
        </div>
        <div className="text-2xl font-bold flex gap-[16px] items-center">
          <button className="rotate-90">
            <i className="ri-more-2-fill"></i>
          </button>
          <button className="h-[30px] w-[30px] rounded-2xl hover:bg-green-600">
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
function DetailsBody() {
  return (
    <div
      className="flex flex-col gap-[20px] px-[16px] overflow-scroll"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <TitleImg />
      <Cradits />
      <OnTour />
      <NextInQueue />
    </div>
  );
}
function TitleImg() {
  const title = "Sweater (FROM ANIMAL)".slice(0, 13) + "...";
  return (
    <div>
      <div className="pb-[16px]">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273021d7017f73387b008eab271"
          alt="title image"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl font-bold hover:underline">
            {title}
          </a>
          <div className=" hover:underline">
            <a href="#">Argit Sing</a>
            <span>,</span>
            <a href="#"> Argit Sing</a>
          </div>
        </div>
        <div className="text-3xl">
          <i className="ri-add-circle-line"></i>
        </div>
      </div>
    </div>
  );
}
function Cradits() {
  return (
    <div className="p-[16px] bg-[#aaa9a917] flex flex-col gap-4 rounded-md">
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-between font-bold text-lg">
          <span>Credits</span>
          <span className="text-gray-300">Show all</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold hover:underline">
              Argit singh singh
            </a>
            <p>a;ldfkjl</p>
          </div>
          <div>
            <button className="font-bold border-solid border border-white px-[10px] py-[2px] rounded-2xl ">
              Follow
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold  hover:underline">
              Argit singh
            </a>
            <p>a;ldfkjl</p>
          </div>
          <div>
            <button className="font-bold border-solid border border-white px-[10px] py-[2px] rounded-2xl ">
              Follow
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold  hover:underline">
              Argit singhsinghhf
            </a>
            <p>a;ldfkjl</p>
          </div>
          <div>
            <button className="font-bold border-solid border border-white px-[10px] py-[2px] rounded-2xl ">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function OnTour() {
  return (
    <div className="p-[16px] bg-[#aaa9a917] flex flex-col gap-4 rounded-md">
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-between font-bold text-lg">
          <span>On tour</span>
          <span className="text-gray-300">Show all</span>
        </div>
      </div>
      <ul className="flex flex-col gap-[10px]">
        <li>
          <div className="flex gap-[20px] items-center">
            <div className="h-[60px] w-[60px] bg-slate-900 text-center rounded-sm">
              <p className="">jul</p>
              <p className="text-2xl font-bold ">13</p>
            </div>
            <div>
              <p className="text-xl font-medium">syndeyn olimpic</p>
              <p className="text-slate-300">argit singh</p>
              <p className="text-slate-300">sat 094985</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-[20px] items-center">
            <div className="h-[60px] w-[60px] bg-slate-900 text-center rounded-sm">
              <p className="">jul</p>
              <p className="text-2xl font-bold ">13</p>
            </div>
            <div>
              <p className="text-xl font-medium">syndeyn olimpic</p>
              <p className="text-slate-300">argit singh</p>
              <p className="text-slate-300">sat 094985</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
function NextInQueue() {
  return (
    <div className="p-[16px] bg-[#aaa9a917] flex flex-col gap-4 rounded-md">
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-between font-bold text-lg">
          <span>Next in queue</span>
          <span className="text-gray-300">Show all</span>
        </div>
      </div>
      <div className="flex gap-[20px] items-center">
        <div>
          <i className="ri-play-fill text-xl"></i>
        </div>
        <div >
          <img src="https://i.scdn.co/image/ab67616d000048519bb2d30b01ac2cada8a8ad03" alt="" className="rounded-md" />
        </div>
        <div className="flex justify-between items-center">
        <div>
          <a href="#" className="text-xl font-medium hover:underline">
            solemate
          </a>
          <div className=" hover:underline">
            <a href="#">Argit Sing</a>
            <span>,</span>
            <a href="#"> Argit Sing</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
