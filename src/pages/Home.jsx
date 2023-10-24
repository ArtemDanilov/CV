import React from "react";

import { useTranslation } from "react-i18next";

import NameAndPosition from "../components/NameAndPosition";
import Experience from "./Experience/index";
import Education from "./Education/index";
import Contact from "../components/Contact";
import avatar from "../assets/avatar.jpg";
import Image from "../components/Image";
import Container from "../components/Container";

const Home = () => {
  const { t } = useTranslation();
  const lang = window.localStorage.i18nextLng;

  const skills = t("skills", { returnObjects: true });
  const languages = t("languages", { returnObjects: true });
  const hobby = t("hobby", { returnObjects: true });
  const about = t("about_text", { returnObjects: true });
  const experience = t("experience", { returnObjects: true });
  const education = t("education", { returnObjects: true });

  return (
    <main className="max-w-7xl mx-auto xl:my-8 xl:shadow-lg">
      <div className="flex flex-col py-8 px-16">
        <section className="flex justify-center items-center mb-12">
          <div className="avatar aspect-square w-56 h-56 pb-0">
            <Image
              url={avatar}
              width="200"
              height="200"
              alt="Artem Danilov portrait"
              classes="w-full h-full rounded-full object-cover object-center"
            />
          </div>
          <div className="w-max pl-12 space-y-4">
            <NameAndPosition
              fullName={t("fullName")}
              position={t("position")}
            />
            <Contact />
          </div>
        </section>

        <Container
          title={lang === "pl" ? "Podsumowanie zawodowe" : "Career summary"}
        >
          {t("about_text")}
        </Container>

        <Container title={t("skills.title")}>
          <ul className="mx-auto flex gap-4 flex-wrap">
            {skills.items.map((item) => (
              <li
                key={item.id}
                className="text-sm text-center font-sans p-2 lg:text-base"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/svg/${item.name.toLowerCase()}.svg`
                  }
                  alt={item.name}
                  width="32"
                  height="32"
                  className="mx-auto mb-1"
                />
                {item.name}
              </li>
            ))}
          </ul>
        </Container>

        <Container title={experience.title}>
          <Experience content={experience} />
        </Container>
        <Container title={education.title}>
          <Education content={education} />
        </Container>

        <Container title={t("languages.title")}>
          <ul className="mx-auto gap-4">
            {languages.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center text-sm font-sans p-2 lg:text-base"
              >
                <img
                  src={process.env.PUBLIC_URL + `/assets/svg/${item.flag}.svg`}
                  alt={item.name}
                  width="36"
                  height="36"
                  className="mr-2"
                />
                <p className="leading-tight">
                  <b>{item.name}</b>
                  <br />
                  <span className="text-sm">{item.level}</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>

        <Container title={t("hobby.title")}>
          <ul>
            {hobby.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center text-sm font-normal font-sans p-1 lg:text-base"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Container>

        <section className="max-w-4xl mx-auto agreement mt-auto flex items-start p-4">
          <p className="text-xs italic pl-2">{t("recruitment_agreement")}</p>
        </section>
      </div>
    </main>
  );
};

export default Home;
