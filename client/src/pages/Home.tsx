import React from "react";
import Features from "../components/home-components/Features";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <section className="px-8 py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col justify-between items-center  min-h-[850px]">
          <div className="flex flex-col items-center relative z-20">
            <h1 className="text-center font-bold text-[48px] leading-[1.25]">
              Advanced <span className="text-red">Fortnite</span> match <br />{" "}
              analytics and tracking
            </h1>
            <h2 className="mt-4 max-w-[580px] text-lg text-center leading-relaxed opacity-80">
              Upload Fortnite .replay files to get in depth statistics about
              your games and take your skills to the next level!
            </h2>
            <button className="mt-6 border border-pink border-opacity-25 px-12 py-2 rounded-full text-sm bg-black bg-opacity-85">
              Get Started
            </button>
          </div>
          <div className="relative">
            <HeroEllipse />
            <HeroSvg />
            <div className="w-[900px] h-[520px] bg-black border border-pink border-opacity-25 absolute z-30 -top-[280px] left-1/2 -translate-x-1/2 rounded-xl"></div>
          </div>
        </div>
      </section>
      <Features/>
    </>
  );
};
export default Home;

const HeroSvg: React.FC = () => {
  return (
    <svg
      width="1920"
      height="229"
      viewBox="0 0 1920 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10"
    >
      <path
        d="M-50 181.5C-50 281.187 399.282 362 953.5 362C1507.72 362 1957 281.187 1957 181.5C1957 81.8126 1507.72 1 953.5 1C399.282 1 -50 81.8126 -50 181.5Z"
        fill="#1C1C1C"
        stroke="url(#paint0_linear_4_4)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_4"
          x1="1957"
          y1="181.5"
          x2="-50"
          y2="181.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF888B" />
          <stop offset="0.33" stop-color="#FF474D" />
          <stop offset="0.67" stop-color="#FF474D" />
          <stop offset="1" stop-color="#FFC8C8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const HeroEllipse: React.FC = () => {
  return (
    <svg
      width="1920"
      height="1250"
      viewBox="0 0 1920 1250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-10 -top-[810px]"
    >
      <g filter="url(#filter0_f_4_2)">
        <ellipse
          cx="961"
          cy="1021.5"
          rx="397"
          ry="267.5"
          fill="url(#paint0_linear_4_2)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_4_2"
          x="-436"
          y="-246"
          width="2794"
          height="2535"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="500"
            result="effect1_foregroundBlur_4_2"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4_2"
          x1="961"
          y1="754"
          x2="961"
          y2="1289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC8C8c4" />
          <stop offset="0.515" stop-color="#FF474Dc4" />
        </linearGradient>
      </defs>
    </svg>
  );
};
