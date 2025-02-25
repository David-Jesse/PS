import middleborughHero from '../assets/middlebroughHero.png';
import mOyster from '../assets/mOyster.png';
import iconColor from '../assets/iconColor.png';
import LloydsBank from '../assets/LloydsBank.png';
import londonBank from '../assets/londonBank.png';
import accoTax from '../assets/accoTax.png';
import BookingLogo from '../assets/BookingLogo.png';
import blueArrow from '../assets/blueArrow.png';
import UberEats from '../assets/UberEats.png'
import AirbnbLogo from '../assets/AirbnbLogo.png';
import { motion } from 'framer-motion';

const brandLogos = [
    {src: accoTax, alt: 'acco-tax'},
    {src: BookingLogo, alt: 'Booking logo'},
    {src: londonBank, alt: 'london bank'},
    {src: LloydsBank, alt: 'llyods bank'},
    {src: UberEats, alt: 'Uber eats'},
    {src: AirbnbLogo, alt: 'Airbnb logo'}

]

const scrollVariants = {
    animate: {
        x: [0, -1500],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 15,
                ease: 'linear'
            }
        }
    }
}

const MiddlebroughMain = () => {
  return (
    <div className="w-full">
        <section className="w-[90%] flex sm:flex-col md:flex-row items-center justify-center mx-auto py-20">
            <div className="flex flex-col">
                <h2 className='text-blue-50 font-semibold md:text-3xl sm:text-2xl mb-6 sm:w-full'>Stronger Shores, led by South Tyneside Council, is taking a new approach to.</h2>
                <p className='text-lg font-light text-blue-50 md:w-[86%] sm:w-full sm:text-left'>The project explores how to use the power of nature to restore our ocean&apos;s health
                    while cementing a sustainable, healthy and properous future for coastal communities. Through Stronger Shores, the North-East
                    is trailblazing a path for the UK to be a world-leader in tackling the climate crisis.
                </p>
                <p className='text-lg font-light text-blue-50 md:w-[86%] sm:w-full sm:text-left sm:mb-8'>The Bristish coastline has been decimated over the years and important natural habitats have been lost.
                    Many areas are threatened by flooding, erosion and storms and climate change will only make this worse.
                    If we do nothing, habitats and communities could suffer.
                </p>
            </div>
            <div className='md:w-[90%]'>
                <img src={middleborughHero} alt="landscape-image" className='md:w-full sm:w-full'/> 
            </div>
           
        </section>

        <div className='bg-sky-blue'>
            <div className='md:p-20 sm:pt-10 flex flex-col justify-center mx-auto '>
                <h2 className="font-bold md:text-3xl sm:text-2xl  text-deep-purple text-center">Habitats in this region</h2>
                <div className='relative md:pt-6 sm:pt-8'>
                    <div className='md:w-[65%] sm:w-full mb-4'>
                        <img src={mOyster} alt="Underwater scene with fish and coral reef" className='w-full'/>
                    </div>
                    
                    <div className='md:absolute md:top-[90px] md:left-1/2 sm:top-40 sm:left-2 bg-white bg-opacity-2 mt-4 md:p-6 sm:p-8 shadow-lg md:w-[50%] sm:w-full md:h-[80%] flex flex-col sm:flex justify-center md:gap-4 sm:gap-2'>
                        <h3 className="text-deep-purple font-bold text-2xl">Oyster reef</h3>
                        <p className='text-3xl font-semibold text-deep-purple'>Stronger Shores, led by South Tyneside Council making British.</p>
                        <p className="text-lg font-light text-blue-50 sm:pb-4">The project explores how to use the power of nature to restore our ocean&apos;s health while 
                            cementing a sustainable, healthy, and prosperous future for coastal communities. Through Stronger Shores, the North-East
                            is trailblazing a path for the UK to be a world-leader in tackling the climate crises.
                        </p>
                        <a 
                            href="#"
                            className='bg-dark-blue font-bold text-white font-semi-bold hover:text-light-blue transition duration-300 rounded-full md:py-3 md:px-4 sm:py-3 sm:px-7 flex items-center gap-1 md:w-[30%] sm:w-[60%]'
                        >
                            Find out more <img src={iconColor} alt="white arrow" className='h-auto w-auto'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex items-center flex-col gap-6 md:py-20 sm:py-14 overflow-hidden'>
            <h2 className="text-3xl font-bold text-deep-purple sm:text-center">We&apos;re proud to be supported by</h2>

            <div className='overflow-hidden py-10'>
                <motion.div
                    animate='animate'
                    variants={scrollVariants}
                    className='flex sm:gap-14 md:gap-14 sm:px-4 md:px-16 items-center whitespace-nowrap'
                >
                    {brandLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            href='#'
                            className='block flex-shrink-0'
                        >
                            <img src={logo.src} alt={logo.alt} className='md:h-auto'/>
                        </motion.div>
                    ))}

                        {brandLogos.map((logo, index) => (
                            <motion.div key={`${index}-repeat`} className='block flex-shrink-0'>
                                <img src={logo.src} alt={logo.alt}  className='md:h-auto'/>
                            </motion.div>
                        ))}
                </motion.div>
            </div>
        </div>

        <div className="bg-deep-blue py-20 border-0.5">
            <div className="flex flex-col md:items-center">
                <p className="text-white md:text-4xl sm:text-3xl sm:text-center">Get updates about our work and events near you</p>
                <form className="md:flex md:flex-row justify-center gap-2 pt-10 sm:flex sm:flex-col sm:justify-center sm:w-[80%] sm:mx-auto">
                    <input 
                        type="text" 
                        placeholder='Name'
                        className='sm:p-3 border-none focus:outline-none input-custom'
                    />
                    <input 
                        type="email" 
                        placeholder='Email address'
                        className='sm:p-3 border-none focus:outline-none input-custom'
                    />
                    <button type='submit'
                        className='bg-light-blue text-blue-50 py-3 px-3 flex items-center gap-1 sm:w-[40%] md:w-auto font-bold'
                    >
                        Subscirbe <a href="#"><img src={blueArrow} alt="blue arrow"/></a>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default MiddlebroughMain;