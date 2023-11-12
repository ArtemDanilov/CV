import React from "react";

import Item from "./item";

const Education = (props) => {
  const data = props.content;

  return (
    <>
      {data.items.map((item) => {
        return (
          <Item
            {...item}
            key={item.id}
            style={{ color: data.headings_color }}
          />
        );
      })}
    </>
  );
};

export default Education;
