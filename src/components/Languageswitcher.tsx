"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChangeLanguage = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang; // Update locale part
    router.push(segments.join("/") || "/");
  };
  return (
    <select
      className="text-xl"
      name=""
      id=""
      value={currentLocale}
      onChange={(e) => handleChangeLanguage(e.target.value)}
    >
      {routing.locales.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
