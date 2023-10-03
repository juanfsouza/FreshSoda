'use client';

// SodaSlider
import SodaSlider from './SodaSlider';

//next image
import Image from 'next/image';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '/variants';

export default function About() {
  return (
    <section className='section flex items-center' id="about">
      <div className='container flex items-center justify-center flex-col mx-auto'>
                {/* image */}
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }} 
                className='flex-1 mb-8 xl:mb-0'>
              <SodaSlider />
            </motion.div>
      </div>
    </section>
  )
}