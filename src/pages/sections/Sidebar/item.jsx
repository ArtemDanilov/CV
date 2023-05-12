import React from "react";

const Item = (props) => {
  return (
    <li className="text-sm font-mono lg:text-base">
      <p>{props.name}</p>
    </li>
  );
};

export default Item;
