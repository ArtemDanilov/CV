import React from "react";

const NameAndPosition = (props) => {
  return (
    <div className="mt-4 md:mt-0 print:mt-0">
      <h1 className="text-4xl font-sans font-bold md:text-6xl print:text-6xl">
        {props.fullName}
      </h1>
      <p className="text-xl text-center tracking-widest font-normal md:text-left print:text-left md:text-2xl print:text-2xl">
        {props.position}
      </p>
    </div>
  );
};

export default NameAndPosition;
