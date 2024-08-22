import React from "react";
import { FaGithub } from "react-icons/fa";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="pt-28 pb-20 px-8 ">
      <div className="max-w-[1050px] mx-auto flex">
        <div className="border-r border-white  pr-16 min-w-80">
         <div className="flex items-center">
         <p className="font-bold text-xl">
            Re<span className="text-red">Played</span>
          </p>
          <img src="/favicon.svg" alt="" className="max-w-8" />
         </div>
          <p className="mt-4 font-semibold text-lg flex gap-2 items-center">
            <span className="text-xl">
              <FaGithub />
            </span>
            Github
          </p>
          <p className="mt-3 max-w-64 text-sm">
            © Copyright 2024 CodeCode. All Commercial Rights Reserved.
          </p>
        </div>
        <div className="flex pl-16 w-full justify-between">
          <div className="">
            <p>Features</p>
            <ul className="flex flex-col gap-3 text-sm opacity-80 mt-4 font-[350]">
              <p>Features</p>
              <p>Features</p>
            </ul>
          </div>
          <div className="">
            <p>Features</p>
            <ul className="flex flex-col gap-3 text-sm opacity-80 mt-4 font-[350]">
              <p>Features</p>
              <p>Features</p>
            </ul>
          </div>
          <div className="">
            <p>Features</p>
            <ul className="flex flex-col gap-3 text-sm opacity-80 mt-4 font-[350]">
              <p>Features</p>
              <p>Features</p>
            </ul>
          </div>
          <div className="">
            <p>Features</p>
            <ul className="flex flex-col gap-3 text-sm opacity-80 mt-4 font-[350]">
              <p>Features</p>
              <p>Features</p>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
