import React from "react";

const Item = (props) => {
  return (
    <div className="experience-item py-1">
      <h3
        className="text-base font-mono font-bold tracking-widest uppercase lg:text-lg"
        style={props.style}
      >
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {props.name}
        </a>
      </h3>

      <p className="text-sm font-mono font-normal lg:text-base">
        {props.description}
      </p>
    </div>
  );
};

export default Item;
