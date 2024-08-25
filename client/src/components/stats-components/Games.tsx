import React from "react";
import { FaPlus, FaLongArrowAltRight } from "react-icons/fa";

type GamesProps = {};

const Games: React.FC<GamesProps> = () => {
  return (
    <>
      <div className="flex justify-between border-b border-[#808080] pb-3 items-end">
        <p>All Replays</p>
        <span>
          <FaPlus />
        </span>
      </div>
      <div className="flex mt-6 items-center gap-3 text-sm">
        <label htmlFor="sort-options">Sort by:</label>
        <select
          id="sort-options"
          name="sort-options"
          className="py-1 px-2 outline-none border border-[#404040] rounded-sm bg-[#2b2b2b]"
        >
          <option value="eliminations">Eliminations</option>
          <option value="position">Position</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <GamePreview/>
        <GamePreview/>
        <GamePreview/>
        <GamePreview/>
      </div>
    </>
  );
};
export default Games;


type GamePreviewProps = {

}


const GamePreview:React.FC<GamePreviewProps> = () => {
  return (
    <div className="border border-[#80808080] py-5 px-6 w-full rounded-md">
      <div className="flex justify-between items-end">
        <p>Untitled Replay #1</p>
        <p className="text-sm text-dull">21:36</p>
      </div>
      <div className="mt-4 flex justify-between items-end">
        <div className="flex items-end gap-6">
          <div className="flex gap-2 items-center">
            <img src="/aim.svg" alt=""  className="max-w-6"/>
            <span>7</span>
          </div>
          <div className="text-sm">
            Position: 1st
          </div>
          <p className="text-sm">
            Date Played: 8/16/24
          </p>
          <p className="text-sm">
            Upload Date: 8/24/24
          </p>
        </div>
        <p className="text-sm flex gap-1.5 items-center">View full analysis <span><FaLongArrowAltRight/></span></p>
      </div>
    </div>
  )
}