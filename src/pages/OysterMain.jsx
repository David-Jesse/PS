import {useState} from 'react';
import iconColor from '../assets/iconColor.png';
import oysterImage from '../assets/oysterImage.png';
import kelp from '../assets/kelp.png';
import brighton from '../assets/brighton.png';
import newCastle from '../assets/newCastle.png';
import blueArrow from '../assets/blueArrow.png';
import AirbnbLogo from '../assets/AirbnbLogo.png';
import LloydsBank from '../assets/LloydsBank.png';
import BookingLogo from '../assets/BookingLogo.png';
import accoTax from '../assets/accoTax.png';
import londonBank from '../assets/londonBank.png';
import UberEats from '../assets/UberEats.png';
import { motion } from 'framer-motion';
import oysterBanner from '../assets/oysterBanner.png';
import UpdateForm from '../shared/UpdateForm';

const brandLogos = [
  {src: accoTax, alt: 'acco tax'},
  {src: BookingLogo, alt: 'Booking Logo'},
  {src: londonBank, alt: 'london bank'},
  {src: UberEats, alt: 'Uber eats'},
  {src: AirbnbLogo, alt: "Airbnb logo"},
  {src: LloydsBank, alt: "Lloyds bank"}
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

const OysterMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextClick = () => {
    if (currentIndex < slides.length -1 ) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const slides = [
    oysterImage,
    kelp,
    brighton,
    newCastle
  ]

  // Function to go to the previous image 
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  return (
    <div className='w-[100%] md:pt-20 sm:pt-10 mx-auto'>
      <div className='w-[92%] flex md:flex-row sm:flex-col sm:flex-grow md:gap-40 sm:gap-20 mx-auto items-center justify-center'>
        {/* Text Content*/}
        <div className='sm:w-full md:w-[50%] space-y-4 flex flex-col'>
          <h2 className='md:text-3xl sm:text-2xl font-bold text-blue-50 md:w-[86%] sm:w-full'>
            Stronger Shores, led by South Tyneside Council, is taking a new approach to.
          </h2>
          <p className='text-lg text-blue-50 font-light'>
            The project explores how to use the power of nature to restore our ocean&apos;s health while cementing a sustainable, healthy and prosperous future
            for coastal communities. Through Stronger Shores, the North-East is trailblazing a path for the UK to be a world-leader in tackling the climate crisis.
          </p>
          <p className='text-lg text-blue-50 font-light w-full'>
            The Bristish coastline has been decimated over the years and important natural habitats have been lost. Many areas are threatened by flooding, erosion and storms
            and climate change will only make this worse. If we do nothing, habitats and communities could suffer.
          </p>
        </div>

        {/* Image Slider */}
        <div className='relative sm:w-[92%] md:w-1/3'>
          <div className='absolute -inset-4 right-2 h-[400px] p-3 bg-light-blue z-0'></div>
          
          {/* Image Container with the Sliding effect */}
          <div className='z-10 overflow-hidden h-[400px] sm:h-auto'>
            <div
              className='transition-transform duration-500 flex'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${slides.length * 40}%`
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className='w-full flex-shrink-0'
                >
                  <img src={slide} alt={`Slide ${index + 1}`} className='w-full h-64 md:h-[400px] sm:h-[400px] object-cover'/>
                </div>
              ))}
            </div>
          </div>
          
          {/* Previous Button */}
          <button
            className={`group absolute top-1/2 left-[-20px] sm:whitespace-nowrap transform -translate-y-1/2 ${currentIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-arrow-blue'} text-white p-4 hover:bg-white transition-colors duration-300`}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            <img 
              src={iconColor} 
              alt='Previous'
              className='h-4 w-4 group-hover:opacity-0 transition-opacity duration-300'
            />
            <img 
              src={blueArrow} 
              alt="blue arrow" 
              className='w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            />
          </button>
          
           {/* Next Button */}
          <button
            className={`group absolute top-1/2 right-[-20px] transform -translate-y-1/2 ${currentIndex === slides.length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-arrow-blue'} text-white p-4 hover:bg-white`}
            onClick={handleNextClick}
            disabled={currentIndex === slides.length - 1}
          >
            {/*White arrow visible by default */}
            <img 
              src={iconColor} 
              alt="icon color" 
              className='w-4 h-4 group-hover:opacity-0 transition-opacity duration-300'
            />
            {/*Blue arrow visible upon Hover */}
            <img 
              src={blueArrow} 
              alt="blue arrow" 
              className='w-6 absolute h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            />
          </button>
        </div>
      </div>

      <div className='sm:hidden w-[90%] space-y-4 flex flex-col items-center py-20 mx-auto justify-center'>
        <h2 className='text-2xl font-semibold text-blue-50'>
            Stronger Shores, led by South Tyneside Council, is taking a new approach to making British coastlines and communities
            stronger in the face of flooding, erosion and the impacts of climate change.
        </h2>
        <p className='text-lg font-normal text-blue-50'>
          Our firm is a long established Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu printer took a galley of type and scrambled it to make a type specimen book. 
        </p>

        <p className='text-lg font-normal text-blue-50'>
          Our work It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu.
        </p>
      </div>
            
      <div className='flex items-center flex-col gap-6 md:py-20 sm:py-14 overflow-hidden'>
          <h2 className='text-3xl font-bold text-deep-purple sm:text-center'>We&apos;re proud to be supported by</h2>

          <div className='overflow-hidden py-10'>
            <motion.div
              animate='animate'
              variants={scrollVariants}
              className="flex sm:gap-14 md:gap-14 sm:px-4 md:px-16 items-center whitespace-nowrap"
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

                {brandLogos.map((logo, index) => {
                  <motion.div key={`${index}-repeat`} className='block flex-shrink-0'>
                    <img src={logo.src} alt={logo.alt} className='md:h-auto'/>
                  </motion.div>
                })}
            </motion.div>
          </div>
      </div>
      
      <div className='bg-sky-blue sm:py-8 w-full md:py-12'>
        <div className='md:max-w-4xl sm:w-full mx-auto text-center'>
          <h2 className='md:text-3xl sm:text-2xl font-semibold md:pt-10 sm:pt-8 text-deep-purple'> A snapshot of the impact our team and community have</h2>
          <div className='flex md:flex-row sm:flex-col gap-8 md:pt-10 sm:pt-8'>
              <div className='flex flex-col items-center'>
                <p className='text-dark-blue text-7xl font-bold'>75+</p>
                <p className='mt-4 text-base text-blue-50 md:w-[80%] sm:w-[50%] text-center'>The project explores how to use the power.</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className="text-dark-blue text-7xl font-bold">80%</p>
                <p className='mt-4 text-base text-blue-50 text-center md:w-[80%] sm:w-[50%]'>The project explores how to use the power.</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='text-dark-blue text-7xl font-bold'>300</p>
                <p className='mt-4 text-base text-blue-50 text-center md:w-[80%] sm:w-[50%]'>The project explores how to use the power.</p>
              </div>
          </div>
        </div>
      </div>
      
      <div className="relative flex items-center justify-center md:p-4 sm:p-6 bg-cover bg-center min-h-screen sm:w-full md:py-12 sm:py-14" style={{backgroundImage: `url(${oysterBanner})`}}>
        <div className="md:absolute bg-white flex flex-col justify-center md:p-6 sm:p-4  md:right-[164px] md:space-y-4 sm:space-y-4 bg-opacity-2 backdrop-blur-sm md:w-[35%] sm:w-[100%] sm:h-[400px] h-[400px]">
          <h2 className=" text-blue-50 font-bold md:text-4xl sm:text-3xl w-full ">Do you share our passion for the ocean?</h2>
          <p className="text-lg text-blue-50 pt-4">
            There are a lot of ways you can get involved with Stronger Shores from volunteering or attending an event 
            to becoming a member
          </p>
          <a className='md:w-[50%] sm:w-[72%] bg-button-color text-white px-6 py-4 rounded-full font-semibold hover:text-dark-blue transition duration-300 flex items-center justify-center gap-4' href="#">
                Get involved <img src={iconColor} alt="icon color" className='h-4 w-4'/>
          </a>
        </div>
      </div>

      <div className='py-20 w-[100%]'>
        <h1 className='text-blue-50 text-4xl font-bold w-[89%] mx-auto'>Reports</h1>
        <div className='flex flex-col space-y-8 pt-6 md:w-[92%] md:mx-auto'>
          <div className='bg-grayish flex md:flex-row sm:flex-col gap-10 md:items-center sm:justify-items-start justify-content mx-auto p-6'>
            <div className='bg-blue-block px-10 py-10 sm:w-[20%] md:w-auto'></div>
            <div>
              <h2 className='text-blue-50 text-2xl font-bold'>Volunteering: Beach Clean Seaburn Beach</h2>
              <p className="text-lg font-normal md:w-[90%] sm:w-full  text-blue-50">Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem</p>
            </div>
            <a className="sm:w-[40%] md:w-auto bg-dark-blue flex items-center text-white px-6 py-3 rounded-full font-semibold hover:text-light-blue transition duration-300" href="#">
              Download
            </a>
          </div>

          <div className='bg-grayish md:flex-row flex sm:flex-col gap-10 md:items-center sm:justify-items-start justify-content mx-auto p-6'>
            <div className='bg-blue-block px-10 py-10 sm:w-[20%] md:w-auto'></div>
            <div className="">
              <h2 className='text-blue-50 text-2xl font-bold'>Volunteering: Beach Clean Seaburn Beach</h2>
              <p className="text-lg font-normal md:w-[90%] sm:w-full text-blue-50">Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem</p>
            </div>
            <a className="sm:w-[40%] md:w-auto bg-dark-blue flex items-center text-white px-6 py-3 rounded-full font-semibold hover:text-light-blue transition duration-300" href="#">
              Download
            </a>
          </div>

        </div>
      </div>
      
      <UpdateForm />

    </div>
  )
}

export default OysterMain;