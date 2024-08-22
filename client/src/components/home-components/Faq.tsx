import React, { useRef, useState } from "react";
import { FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";

type FaqProps = {};

const Faq: React.FC<FaqProps> = () => {
  return (
    <section className="py-24 px-8 ">
      <div className="max-w-[1200px] mx-auto">
        <h4 className="font-semibold text-3xl text-center">
          Frequently Asked Questions
        </h4>
        <div className="flex flex-col mt-12">
          <FaqTab />
          <FaqTab />
          <FaqTab />
          <FaqTab />
          <FaqTab />
        </div>
      </div>
    </section>
  );
};
export default Faq;

const FaqTab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <li className="w-full my-3 rounded-md transition-all gradient-bg-dull p-[1px]">
      <div className="bg-black py-4 px-6 rounded-md">
      <div className="flex items-center justify-between pr-2">
        <p className="font-medium py-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          debitis!
        </p>
        <span
          className="text-lg cursor-pointer transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <FaChevronDown />
        </span>
      </div>
      {isOpen && (
        <div
          ref={contentRef}
          className="transition-all overflow-hidden text-sm sm:text-base"
        >
          <div className="py-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quaerat quo deserunt, voluptatem rem reprehenderit numquam
              deleniti quis sunt id.
            </p>
            <div className="max-w-[80px]">
              <p className="mt-2 underline flex items-center ">
                Go To{" "}
                <span className="ml-2">
                  <FaLongArrowAltRight />
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
    </li>
  );
};
