"use client";

import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

function Students() {
  const students = [
    "User 1",
    "User 2",
    "User 3",
    "User 4",
    "User 5",
    "User 6",
    "User 7",
  ];
  return (
    <div className="grid grid-cols-4 gap-8 py-12 px-32">
      {students.map((student, index) => (
        <Fade duration={(index + 1) * 1000} key={index}>
          <Link href={""} className="overflow-hidden rounded-md relative group">
            <img
              className="w-full h-[20rem] object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              src="https://filosofiaparaelsigloxxi.files.wordpress.com/2021/05/tamara.png"
              alt=""
            />
            <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity  group-hover:opacity-100 group-hover:scale-105 duration-300">
              <span className="text-white">Hans melchor</span>
            </div>
          </Link>
        </Fade>
      ))}
    </div>
  );
}

export default Students;
