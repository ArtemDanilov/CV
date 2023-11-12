import React from "react";

const Container = ({ children, title, className = "" }) => {
  return (
    <section
      className={`
        container max-w-4xl md:grid md:grid-cols-[30%,70%] md:border-b md:border-gray-200 items-start mx-auto
        print:grid print:grid-cols-[30%,70%] print:border-b print::border-gray-200
        ${className}
      `}
    >
      <div className="w-full pt-4 pb-2 mb-4 col-start-1 col-end-2 border-b md:pb-4 md:mb-0 md:border-0 print:mb-0 print:pb-4 print:border-0">
        <h2 className="text-xl font-bold font-sans text-zinc-700 mr-4 md:text-right print:text-right md:w-min md:ml-auto">
          {title}
        </h2>
      </div>
      <div className="col-start-2 col-end-3 md:py-4 md:pl-4 md:border-l md:border-gray-200 print:py-4 print:pl-4 print:border-l print:border-gray-200">
        {children}
      </div>
    </section>
  );
};

export default Container;
