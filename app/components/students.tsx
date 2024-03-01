"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Rodal from "rodal";
import { students } from "./data";
import "rodal/lib/rodal.css";

function Students() {
  const [modal, setModal] = useState(false);

  function handleClick(student = { id: "", name: "", pharse: "" }) {
    setStudentTemporal(student);
    setModal(!modal);
  }

  const [studentTemporal, setStudentTemporal] = useState({
    id: "",
    name: "",
    pharse: "",
  });

  return (
    <>
      <Fade>
        {/* <div className="px-32 pt-12 z-0">
          <h2 className="text-white text-3xl text-center">List cohort 12</h2>
        </div> */}
        <div>
          {/* {modal ? (
            <Fade style={{ zIndex: 10000 }}>
              <div
                className="fixed inset-0 top-0 flex justify-center items-center"
                style={{ zIndex: 10000 }}
              >
                <div className="w-[70%]  rounded-xl bg-black backdrop-filter backdrop-blur-lg bg-opacity-95 flex flex-col">
                  <div className="w-full flex justify-end p-8">
                    <span role="button" onClick={() => handleClick()}>
                      ✖️
                    </span>
                  </div>
                  <div className="px-8 flex flex-col justify-center mb-12">
                    <div className="flex justify-center">
                      <img
                        className="w-[70%] max-h-[30rem] max-w-[30rem] rounded-lg opacity-100 floating-element"
                        src={`students/${studentTemporal.id}.jpg`}
                        alt=""
                      />
                    </div>
                    <h1 className="text-violet-300 text-2xl text-center mt-8 font-semibold">
                      {studentTemporal.name.toUpperCase()}
                    </h1>
                    <p className="text-violet-200 text-xl text-center mt-4">
                      {studentTemporal.pharse}
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          ) : (
            ""
          )} */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 py-24 px-12 md:px-32 relative ">
            {students.map((student, index) => (
              <Fade duration={(index + 1) * 500} key={index}>
                <div role="button" onClick={() => handleClick(student)}>
                  <div className="w-full  min-h-[20rem] overflow-hidden rounded-md relative group">
                    <img
                      className="w-full h-[22rem] object-cover rounded-md transition-all group-hover:scale-105"
                      src={`students/${student.id}.jpg`}
                      alt=""
                    />
                    <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                      <span className="text-white text-xl font-semibold">
                        {student.name}
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
      <Rodal visible={modal} onClose={() => setModal(!modal)}>
        <div className="md:px-8 px-2 flex flex-col justify-center ">
          <div className=" w-full md:max-h-[26rem] xl:max-h-[30rem]  min-h-[17rem] rounded-lg flex justify-center md:px-2 xl:px-52 px-24">
            <img
              className=" rounded-lg object-cover floating-element"
              src={`students/${studentTemporal.id}.jpg`}
              alt=""
            />
          </div>

          <h1 className="text-violet-300 text-2xl text-center mt-4 font-semibold">
            {studentTemporal.name.toUpperCase()}
          </h1>
          <p className="text-violet-200 md:text-xl text-md text-center mt-4">
            {studentTemporal.pharse}
          </p>
        </div>
      </Rodal>
    </>
  );
}

export default Students;
