import React from "react";

const Item = (props) => {
  return (
    <li className="text-sm font-mono lg:text-base">
      {props.link ? (
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link py-0.5"
        >
          {props.name}
        </a>
      ) : (
        <p>{props.name}</p>
      )}
    </li>
  );
};

export default Item;
