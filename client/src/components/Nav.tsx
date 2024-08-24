import React from "react";
import { Link } from "react-router-dom";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="max-w-[1232px] px-8 mx-auto flex py-8 items-center relative z-20">
      <div className="w-[25%] text-xl font-semibold flex items-center">
        <p>
          Re<span className="text-red">Played</span>
        </p>{" "}
        <img src="/favicon.svg" alt="" className="max-w-8" />
      </div>
      <div className="w-1/2 flex gap-8 justify-center text-sm opacity-80">
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">FAQ</a>
      </div>
      <div className="w-[25%] flex justify-end">
        <Link to={"/login"}>
          <span className="text-xs border border-gray  px-8 py-2.5 rounded-full">
            Sign In
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
