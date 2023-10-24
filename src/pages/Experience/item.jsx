import React from "react";

import { ReactComponent as Link } from "../../assets/svg/link.svg";

const Item = (props) => {
  const lang = window.localStorage.i18nextLng;
  const description = props.description;
  const portfolio = props.portfolio;

  return (
    <div className="experience-item py-2 first:pt-0">
      <h3 className="text-xl font-sans font-bold uppercase text-orange-400">
        {props.company}
      </h3>
      <p className="text-sm font-sans font-normal lg:text-base">
        <strong>{props.position}</strong> | {props.time}
      </p>

      <ul className="list-disc pl-5 mt-2 space-y-1">
        {description.map(({ id, text }) => {
          return (
            <li className="text-sm font-sans font-normal lg:text-base" key={id}>
              {text}
            </li>
          );
        })}
      </ul>

      {portfolio && (
        <>
          <div className="mt-2">
            <h3 className="font-sans font-bold text-base mb-1">
              {lang === "pl" ? "Projekty" : "Projects"}
            </h3>

            {portfolio.map(({ id, label, link, in_progress }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-max items-center font-sans font-normal text-base text-black hover:text-green-600"
              >
                <span className="mr-1">
                  <Link className="w-4 h-4"></Link>
                </span>
                {label}
                {in_progress && (
                  <span className="text-xs text-white bg-red-600 py-0.5 px-1.5 rounded-md scale-[0.85]">
                    in progress
                  </span>
                )}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
