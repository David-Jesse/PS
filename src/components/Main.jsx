import {useState} from 'react';
import accoTax from '../assets/accoTax.png';
import AirbnbLogo from '../assets/AirbnbLogo.png';
import BookingLogo from '../assets/BookingLogo.png';
import LloydsBank from '../assets/LloydsBank.png';
import londonBank from '../assets/londonBank.png';
import UberEats from '../assets/UberEats.png';
import blueArrow from '../assets/blueArrow.png';
import seaTurtle from '../assets/seaTurtle.png';
import getInvolved1 from '../assets/getInvolved1.png';
import getInvolved2 from '../assets/getInvolved2.png';
import getInvolved3 from '../assets/getInvolved3.png';
import blueVector from '../assets/blueVector.png';
import iconColor from '../assets/iconColor.png';
import newsImage1 from '../assets/newsImage1.png';
import newsImage2 from '../assets/newsImage2.png';
import newsImage3 from '../assets/newsImage3.png';
import updatesIcon from '../assets/updatesIcon.png';
import Card from './Card';
import NewsCard from './NewsCard';
import { motion } from 'framer-motion';


const Main = () => {

  const TabContent = {
    COASTAL: {
      title: "Coastal habitat refers to the region where the land meets the sea.",
      description: "Showcase your solution to amplify the reach of your businesses, investors and local authorities to develop new business opportunities, business and connect. ",
      image: seaTurtle
    },

    FRESH_WATER: {
      title: 'Fresh water habitats sustain diverse ecosystems.',
      description: "Showcase your solution to amplify the reach of your business and opportunities, business and connect.",
      image: seaTurtle
    },

    MARINE_WATER: {
      title: "Marine water ecosystems are vital for ocean health",
      description: 'Discover the importance of fresh water habitats in maintaining biodiversity and supporting local communitites through sustainabe water management and conservation efforts.',
      image: seaTurtle
    }
  };

  const [activeTab, setActiveTab] = useState('COASTAL');

  const tabs = [
    {id: 'COASTAL', label: 'COASTAL'},
    {id: 'FRESH_WATER', label: 'FRESH WATER'},
    {id: 'MARINE_WATER', label: 'MARINE WATER'}
  ]

  const events = [
    {
      date: {month: "MAY", day: '22'},
      title: "Voluteering: Beach Clean Seaburn Beach",
      description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
      link: "#",
    },
    {
      date: {month: "MAY", day: '22'},
      title: "Soundmirror: Artwork Launch and Field Walk",
      description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
      link: "#",
    },
    {
      date: {month: "MAY", day: '22'},
      title: "BE THE SEA - Embodying Sound workshops at Souter Lighthouse",
      description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
      link: '#',
    }
  ]

  const newsData = [
    {
      category: 'Funding',
      title: 'Volunteering - a win-win experience for everyone!',
      description: 'Our firm is a long established fact that a reader will be distracted by...',
      image: newsImage1
    },
    {
      category: 'Flooding',
      title: 'Using our coast to improve your health and wellbeing',
      description: 'Our firm is a long established fact that a reader will be distracted by...',
      image: newsImage2
    },
    {
      category: 'Flooding',
      title: 'Ocean Action Conference 2023',
      description: 'Our firm is a long established fact that a reader will be distracted by...',
      image: newsImage3
    }
  ]

  const brandLogos = [
    {src: AirbnbLogo, alt: 'Airbnb'},
    {src: BookingLogo, alt: 'BookingLogo'},
    {src: accoTax, alt: 'accotax'},
    {src: LloydsBank, alt: 'Lloydsbank'},
    {src: londonBank, alt: 'londonbank'},
    {src: UberEats, alt: 'Uber eats'}
  ]

  const scrollVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear'
        }
      }
    }
  }

  return (
    <main className="w-full">
      <div className="flex flex-col pt-30 px-4 md:px-10 sm:pt-40">
        <p className="text-[32px] sm:text-2xl md:w-[80%] text-blue-50 leading-10 mb-8 pt-10 md:px-14 md:pt-10 sm:pt-60 sm:w-full">Stronger Shores, led by South Tyneside Council, is taking a new approach to making British coastlines and communities stronger in the face of flooding, 
          erosion and the impacts of climate change.
        </p>

        <div className="overflow-hidden py-10">
          <motion.div
            animate='animate'
            variants={scrollVariants}
            className='flex gap-14 md:gap-14 px-4 md:px-16 items-center whitespace-nowrap'
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

            {/* Reapeat logos for continous scrolling effect */}

            {brandLogos.map((logo, index) => (
              <motion.div key={`${index}-repeat`} className='block flex-shrink-0'>
                <img src={logo.src} alt={logo.alt} className='md:h-auto'/>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>

    <div className="py-10 bg-[url('assets/backgroundImage.png')] bg-cover bg-blue-100">
      <div className='mx-auto md:max-w-6xl px-4 sm:w-full'>
        <h2 className='md:text-3xl sm:text-2xl text-white leading-9 text-center w-full'>Marine habitats protecting coastal communities</h2>

        {/* Navigating the different tabs*/}
        <div className='relative border-b border-white-300 mb-12 mt-12 items-center flex flex-col md:gap-4 sm:w-full'>
          <div className='flex md:gap-2 sm:gap-4 md:w-full overflow-x-auto sm:w-full'>
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 md:pb-4 text-white w-full sm:w-full sm:text-base font-medium whitespace-nowrap relative ${activeTab === tab.id ? 'opacity-100' : 'opacity-70'}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className='absolute bottom-0 left-0 w-full sm:w-full h-1 bg-white transition-all duration-300'/>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}

        <div className='md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-12 md:items-center sm:flex sm:flex-col-reverse'>
            <div className='text-white'>
              <h3 className='text-2xl font-bold mb-4 md:w-[65%] mx-auto sm:w-full sm:mt-4'>
                {TabContent[activeTab].title}
              </h3>

              <p className='mb-8 opacity-90 text-lg md:w-[65%] mx-auto sm:w-full'>
                {TabContent[activeTab].description}
              </p>

              <div className='flex md:pl-24 sm:items-start'>
                <a href='#' className='bg-white text-blue-600 md:px-6 md:py-3 sm:py-3 sm:px-5 rounded-full font-medium flex items-center sm:justify-items-start gap-2 hover:text-blue-50 transition-colors'>
                   Find out more <img src={blueArrow} alt="icon" className='w-4 h-4 sm:w-auto sm:h-auto'/>
                </a>
              </div>
            </div>
            
            <div className='relative mx-auto pr-10 sm:w-full'>
              <img src={TabContent[activeTab].image} alt="Marine habitat" className='w-full sm:w-full'/>
            </div>
        </div>
      </div>
    </div>

    <div className='md:w-[90%] py-16 mx-auto'>
        <p className='text-blue-50 md:text-4xl sm:text-3xl sm:w-full font-bold'>Ways to get involved</p>

        <div className='md:flex md:flex-row md:gap-10 sm:gap-8 py-10 text-white sm:flex sm:flex-col sm:w-full'>
            <Card
                backgroundImage={getInvolved1}
                title='As an individual:'
                description="Volunteering Opportunities"
            />

            <Card
              backgroundImage={getInvolved2}
              title='As a business:'
              description="Sponsorship Opportunities"
            />

          <Card
            backgroundImage={getInvolved3}
            title='Communities:'
            description="Fundraising and Events"
          />
        </div>
    </div>
    
    <section className='md:w-[90%] py-8 mx-auto sm:w-full'>
      <div className='md:flex md:justify-between sm:flex sm:gap-6 sm:w-full whitespace-nowrap'>
        <p className='text-3xl text-blue-50 sm:w-full'>Upcoming Events</p>
        <a href="#" className='flex items-center gap-2 text-blue-50'>View events <img src={blueVector} alt="arrow"/></a>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
        {events.map((event, index) => (
          <div
            key={index}
            className='bg-sky-blue shadow-md p-12 relative'
          >
            {/* Date badge */}
            <div className='absolute top-0 left-10 bg-light-blue w-[50px] text-blue-50 px-3 py-1 rounded-tr-lg rounded-bl-lg text-sm font-medium items-center'>
              <span className='text-xs'>{event.date.month}</span>
              <p className='font-bold text-lg'>{event.date.day}</p>
            </div>

            {/* Title*/}
            <h3 className='text-lg font-semibold mb-3 leading-7 text-blue-50 pt-10 md:w-[85%] sm:w-full'>{event.title}</h3>
            <p className='text-blue-50 text-base sm:w-full'>{event.description}</p>
            <a href={event.link} className='bg-blue-50 absolute right-0 p-2'><img src={iconColor} alt="icon-direction" /></a>
          </div>
        ))}
      </div>
    </section>

    <section className='bg-light-skyblue w-[100%] min-h-screen py-10'>
        <div className='max-w-7xl mx-auto md:w-[90%]'>
          <div className='flex justify-between items-center mb-8 text-blue-50'>
            <h1 className='text-2xl font-bold'>Latest News</h1>
            <a href='#' className='hover:underline flex items-center gap-2'>View all news <img src={blueArrow} alt="bluearrow" /></a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {newsData.map((news, index) => (
              <NewsCard 
                key={index}
                category={news.category}
                title={news.title}
                description={news.description}
                image={news.image}
              />
            ))}
          </div>
        </div>
    </section>

    <section className='w-[100] bg-deep-blue py-12'>
        <div className='md:flex items-center justify-center gap-6 sm:flex sm:flex-col sm:text-center'>
          <h1 className='text-white text-3xl font-normal'>Get updates about our work and events near you</h1>
          <a href="#" className='bg-light-blue px-6 py-3 text-blue-50 flex items-center gap-2 hover:bg-white hover:text-blue-50'>Subscribe <img src={updatesIcon} alt="icon" width={12}/></a>
        </div>
    </section>
  </main>
  )

}
export default Main;
