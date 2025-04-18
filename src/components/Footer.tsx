import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("hero");
  return (
    <div className="absolute bottom-6 text-center w-full">
      <p className="text-center">
        {t("developedBy")}{" "}
        <a
          href="https://www.github.com/shehryarahmed26"
          className="hover:text-blue-500"
        >
          {t("shehryar")}
        </a>
      </p>
    </div>
  );
};

export default Footer;
