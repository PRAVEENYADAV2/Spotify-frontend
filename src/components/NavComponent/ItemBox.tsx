import {  ItemType } from "../Navigation";
import { Item } from "./Item";

export function ItemBox({ isOpen }: { isOpen: boolean; }) {
  return (
    <div className="">
      {isOpen && (
        <div className="flex items-center justify-between">
          <button className="hover:bg-[#232323] h-8 w-8 flex items-center justify-center rounded-full text-[#727272] font-bold hover:text-white">
            <i className="ri-search-line"></i>
          </button>
          <button className="flex items-center gap-2 hover:scale-105 text-[#727272] font-bold hover:text-white">
            <span>Recents</span>
            <i className="ri-list-check "></i>
          </button>
        </div>
      )}
      <div>
        <Item type={ItemType.List} isOpen={isOpen}></Item>
        <Item type={ItemType.List} isOpen={isOpen}></Item>
        <Item type={ItemType.List} isOpen={isOpen}></Item>
      </div>
    </div>
  );
}
