import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

function Banner({ setIsVisible }: { setIsVisible: any }) {
  function handleClick() {
    setIsVisible(true);
  }

  return (
    <Fade duration={3000}>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-[10rem] font-bold text-violet-400">Cohort 12</h1>
        <Link
          href={"/students"}
          className="bg-violet-400 px-6 py-4 rounded-md w-auto animate-pulse mt-20 floating-element"
          role="button"
        >
          Vamos
        </Link>
      </div>
    </Fade>
  );
}

export default Banner;
