import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
  return (
    <div>
      <div
        role="status"
        className="absolute top-0 right-0 bottom-0 left-0 m-auto w-[3em] h-10 md:h-32 z-50"
      >
      <MoonLoader color="#00edff" size={32}/>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
