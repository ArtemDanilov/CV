import React from "react";

import SingleCheck from "../../Utilities/SingleCheck";

const Item = (props) => {
  return (
    <div className="education-item py-2 first:pt-0">
      <h3 className="text-lg font-sans font-bold uppercase text-blue-600">
        {props.institution}
      </h3>
      <p className="text-sm font-sans font-normal lg:text-base">
        <SingleCheck check={props.education_title}>
          <strong>{props.education_title}</strong>
          <span className="mx-1.5">|</span>
        </SingleCheck>

        {props.time}
      </p>

      <p className="font-sans text-sm font-normal mt-2 space-y-1 lg:text-base">
        {props.description}
      </p>
    </div>
  );
};

export default Item;
