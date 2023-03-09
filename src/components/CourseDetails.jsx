import React from "react";

import up from "../assets/upload.png";
import RegisterForm from "./RegisterForm";

function CourseDetails() {
  return (
 
    <div className="bg-white rounded-2xl mb-4 mt-8 text-center sm:text-left">
      <div className="p-6 sm:pl-8 flex flex-col sm:flex-row sm:space-x-10 items-center sm:items-start">
        <div className="mb-4 sm:mb-0 sm:w-1/2">
          <h1 className="font-bold text-black text-2xl pb-5">Course Details</h1>
          <div className="h-48 w-56 sm:max-w-screen-lg rounded-2xl bg-gray-200 flex justify-center items-center sm:w-48">
            <button>
              <img src={up} className="h-[105px] w-auto" alt="Up arrow icon" />
            </button>
          </div>
          <button className="text-sm bg-lime-300 h-7 mt-2 w-full sm:ml-6 p-1 rounded-2xl sm:w-auto sm:px-3">
            Browse Video Here
          </button>
        </div>
        <div className="w-full ">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
