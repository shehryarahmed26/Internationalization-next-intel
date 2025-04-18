import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  const t = useTranslations("hero")
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-12'>
      <div className="hero max-w-[90%] md:max-w-[40%] flex flex-col gap-6 items-center text-center md:text-start md:items-start">
        <h1 className='text-2xl md:text-4xl font-bold'>{t("title")}</h1>
        <p className='text-lg md:text-2xl'>{t("subtitle")}</p>
        <button className='text-xl bg-green-500 text-white p-2 px-4 rounded-md'>{t("button")}</button>
      </div>
      <Image src={'/images/hero.svg'} alt='' width={'500'} height={'50'}/>
    </div>
  )
}

export default Home