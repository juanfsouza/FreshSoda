'use client'


import React, { useState } from 'react';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper
import 'swiper/css';

// next image
import Image from 'next/image';

// icons
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '/variants';
import SodaSlider from './SodaSlider';

// Soda data
const soda = [
    {
        name: 'Strawberry Soda',
        price: 29,
        image: '/images/Strawberry/Maskgroup.png',
        bg: 'images/Strawberry/1.svg',
        names: 'images/Strawberry/Names.svg',
        fruits: 'images/Strawberry/Fruits.svg',
        shadow: 'images/Strawberry/Rectangle.svg',
        info: [
        ],
    },
    {
        name: 'Orange Soda',
        price: 25,
        image: '/images/Orange/Maskgroup.png',
        bg: 'images/Orange/2.svg',
        names: 'images/Orange/Names.svg',
        fruits: 'images/Orange/Fruits.svg',
        shadow: 'images/Orange/Rectangle.svg',
        info: [
        ]
    },
    {
        name: 'Apple Soda',
        price: 35,
        image: '/images/Apple/Maskgroup.png',
        bg: 'images/Apple/3.svg',
        names: 'images/Apple/Names.svg',
        fruits: 'images/Apple/Fruits.svg',
        shadow: 'images/Apple/Rectangle.svg',
        info: [
        ],
    },
];

export default function sodaSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
  
    const handleSlideChange = (swiper) => {
      setCurrentIndex(swiper.activeIndex);
    };
    

    const backgroundImageStyle = {
        backgroundImage: `url(${soda[currentIndex].bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Optional: Fixed background
      };
  
    return (
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='max-w-[1950px] h-[52rem] container mx-auto'
        style={backgroundImageStyle} // Apply background image as a style
      >
        <Swiper
          onSlideChange={handleSlideChange}
          spaceBetween={32}
          slidesPerView={1}
          initialSlide={currentIndex}
        >
          {soda.map((sodaItem, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeIn('right', 0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                >
                <Image src={sodaItem.fruits} width={1160} height={920} alt='' style={{ position: 'absolute', top: '0', left: '0', zIndex: -1, marginTop: '0' }} className='floating-image' />
              </motion.div>
              <div className='max-w-[685px] max-h-none mx-auto sm:mx-auto relative'>
                <div className='text-center'>
                  <div className="image-container">
                  <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                    >
                    <Image src={sodaItem.image} width={685} height={484} alt='' style={{ marginTop: '230px' }} />
                    <Image src={sodaItem.shadow} width={285} height={484} alt='' style={{ position: 'absolute', top: '430px', left: '200px', zIndex: -2 }} />
                  </motion.div>
                    <Image src={sodaItem.names} width={2060} height={720} alt='' style={{ position: 'absolute', top: '0', left: '0', zIndex: -1 }} />
                  </div>
                </div>
                <div className='flex justify-center mt-4'>
                  {soda.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-2 rounded-full mx-1 ${
                        i === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    );
  }
  
  
  
  
  
  