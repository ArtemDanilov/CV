import React from "react";

import Item from "./item";

const Experience = (props) => {
  const data = props.content;

  return (
    <>
      {data.items.map((item) => {
        return <Item {...item} key={item.id} />;
      })}
    </>
  );
};

export default Experience;
