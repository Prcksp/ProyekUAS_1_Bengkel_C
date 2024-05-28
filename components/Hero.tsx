import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
        <div className="hero-map" />

        {/* LEFT */}
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <Image
                src="/Repair_Hand_Logo_01.png"
                alt="logo1"
                width={70}
                height={70}
                className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            />
            <h1 className='bold-52 lg:bold-88'>RJP Workshop</h1>
            <p className='reglar-16 mt-6 text-black xl:max-w-[520px]'>
            Welcome to the Rejuvenation & Joyful Productivity (RJP) Workshop, a transformative experience designed to help you rediscover balance, enhance your well-being, and boost your productivity in a joyful and sustainable way. This workshop is perfect for professionals, creatives, and anyone looking to integrate more harmony and efficiency into their daily lives.
            </p>

            <div className='my-11 flex flex-wrap gap-5'>
                <div className='flex items-center gap-2'>
                    {Array(5).fill(1).map((_, index) => (
                        <Image 
                            src="/star.svg"
                            key={index}
                            alt="star"
                            width={24}
                            height={24}

                        />
                    ))}
                </div>
                <p className="bold-16 lg:bold-20 text-blue-70">
            48k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
            </div>
            
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
            <Button 
            type="button" 
            title="Stock" 
            variant="btn_dark_green_outline" 
          />
            </div>
        </div>

        <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Babasari</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="regular-10 block text-gray-20">from the Airport</p>
              <p className="bold-20 text-white">55,8 KM</p>
            </div>
            {/* <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero