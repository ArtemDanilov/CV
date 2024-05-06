import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as Email } from "../assets/svg/email.svg";
import { ReactComponent as Github } from "../assets/svg/github.svg";

const Contact = () => {
  const { t } = useTranslation();

  const simplifyLink = (link) => {
    return link.substring(8);
  };

  return (
    <address className="not-italic space-y-1">
      <a
        href={`mailto:${t("email")}`}
        className="flex items-center space-x-2 hover:text-green-600"
      >
        <Email className="link_icon w-5 h-5" />
        <span>{t("email")}</span>
      </a>
      <a
        href={`tel:${t("phone")}`}
        className="flex items-center space-x-2 hover:text-green-600"
      >
        <Phone className="link_icon w-5 h-4" />
        <span>{t("phone")}</span>
      </a>
      <a
        href={t("github")}
        className="flex items-center space-x-2 hover:text-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-5 h-5" />
        <span>{simplifyLink(t("github"))}</span>
      </a>
    </address>
  );
};

export default Contact;
