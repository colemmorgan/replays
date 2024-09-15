import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userState";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const user = useRecoilValue(userState);
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
        {user ? (
          <Link to={"/stats"}>
            <span className="text-xs border border-[#808080] px-8 py-2.5 rounded-full">
              Account
            </span>
          </Link>
        ) : (
          <Link to={"/login"}>
            <span className="text-xs border border-[#808080] px-8 py-2.5 rounded-full">
              Sign In
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Nav;
