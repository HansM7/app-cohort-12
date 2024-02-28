import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

function Banner({ setIsVisible }: { setIsVisible: any }) {
  function handleClick() {
    setIsVisible(true);
  }

  return (
    <Fade duration={3000}>
      <div className="flex justify-center flex-col items-center md:gap-20 gap-8 px-4 ">
        <span className="2xl:text-[10rem] md:text-[8rem] sm:text-[6rem]  text-[3rem]  font-bold text-violet-400 ">
          {" "}
          {"<"}Cohort 12{"/>"}
        </span>
        <span className="text-violet-200 md:text-3xl xl:text-3xl xs:text-2xl text-xl text-center">
          "Con perseverancia y determinación transformamos los sueños en
          realidad."
        </span>
        <Link
          href={"/students"}
          className="bg-violet-400 px-6 py-3 rounded-md w-auto animate-pulse mt-20 floating-element"
          role="button"
        >
          Vamos
        </Link>
      </div>
    </Fade>
  );
}

export default Banner;
