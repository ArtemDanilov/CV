import React from "react";

const NameAndPosition = (props) => {
  return (
    <div className="name-and-position">
      <h1 className="text-6xl font-sans font-bold">{props.fullName}</h1>
      <strong className="text-2xl tracking-widest font-normal">
        {props.position}
      </strong>
    </div>
  );
};

export default NameAndPosition;
