'use client';
import React from 'react'
import LanguageSwitcher from './Languageswitcher';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const t = useTranslations("hero")

  return (
    <div className='flex justify-between px-16 py-10'>
        <h1 className='text-4xl font-bold'>{t("logo")}...</h1>
        <div className='flex items-center gap-12'>
            <span className='text-xl hidden md:block'>{t("home")}</span>
            <span className='text-xl hidden md:block'>{t("contactUs")}</span>
            <span className='text-xl hidden md:block'>{t("aboutUs")}</span>
            <LanguageSwitcher/>
        </div>
       
    </div>
  )
}

export default Navbar