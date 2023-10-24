import React from "react";

const Container = ({ children, title, className = "" }) => {
  return (
    <section
      className={`container max-w-4xl grid grid-cols-[30%,70%] border-b border-gray-200 items-start mx-auto ${className}`}
    >
      <div className="w-full py-4 col-start-1 col-end-2">
        <h2 className="text-xl text-right font-bold font-sans text-zinc-700 mr-4">
          {title}
        </h2>
      </div>
      <div className="col-start-2 col-end-3 py-4 pl-4 border-l border-gray-200">
        {children}
      </div>
    </section>
  );
};

export default Container;
