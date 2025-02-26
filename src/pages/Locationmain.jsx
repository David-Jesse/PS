import {useState} from 'react';
import iconColor from '../assets/iconColor.png';
import whiteVector from '../assets/whiteVector.png';
import blueArrow from '../assets/blueArrow.png';
import newCastle from '../assets/newCastle.png';
import Bournemouth from '../assets/Bournemouth.png';
import brighton from '../assets/brighton.png';
import Southwold from '../assets/Southwold.png';
import middleborough from '../assets/middleborough.png';
import { Link } from 'react-router-dom';


const Locationmain = () => {
  const [view, setView] = useState('default');
  const locations = [
    {
      name: 'Newcastle Upon Type',
      image: newCastle,
      path: 'newcastle'
    },
    {
      name:'Bournemonth',
      image: Bournemouth,
      path: 'bournemouth'
    },
    {
      name: 'Middlesbrough',
      image: middleborough,
      path: 'middlebrough'
    }, 
    {
      name: 'Brighton',
      image: brighton,
      path: 'brighton'
    },
    {
      name: 'Southwold',
      image: Southwold,
      path: 'southwold'
    }
  ]

  const handleDefaultViewClick = () => {
    setView('default');
  }

  const handleMapViewclick = () => {
    setView('map');
  }

  return (
    <div className='w-[100%]'>
      <div className='flex flex-col min-h-screen md:mb-20 sm:py-12'>
        <div className='flex justify-end p-4 gap-2 w-[90%] mx-auto'>
          <button className={`text-base ${view === 'default' ? 'bg-dark-blue text-white' : 'text-blue-50 hover:text-white hover:bg-dark-blue'}
            px-4 py-2 rounded-full border-2 border-blue-50 transition-colors duration-300 ease-in-out`}
            onClick={handleDefaultViewClick}
            >
              Default View
          </button>
          <button className={`text-base ${view === 'map' ? 'bg-dark-blue text-white' : 'text-blue-50 hover:text-white hover:bg-dark-blue'}
            px-4 py-2 rounded-full border-2 border-blue-50 transition-colors duration-300`}
            onClick={handleMapViewclick}
            >
              Map View
          </button>
        </div>

        {view === 'default' ? (
          // Default View 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 md:w-[90%] sm:w-full mx-auto'>
            {locations.map((location, index) => (
              <div 
                key={index} 
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left flex items-center flex-col justify-center sm:w-full'
                style={{
                  backgroundImage: `url(${location.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '451px',
                  color: 'white',
                  position: 'relative'
                }}
              >
                <h2 className='text-xl font-semibold mb-4' style={{position: 'absolute', bottom: '50px', left: '20px'}}>{location.name}</h2>
                <Link 
                  to={`/${location.path}`} 
                  className=' text-white px-4 font-semibold py-2 flex items-center gap-2 transition-colors ease-in-out'
                  onClick={() =>setView('map')}
                  style={{position: 'absolute', bottom: '10px', left: '6px', fontSize: '100'}}
                  >
                    Find out more <img src={whiteVector} alt="white vector" className='w-auto h-auto'/>
                  </Link>
           </div>
            ))}
          </div>
        ) : (
          // Map view
          <div className='relative flex flex-col items-center justify-center p-4'>
            <div className='absolute max-w-2xl md:w-[20%] md:h-[40%] sm:w-[70%] bg-white p-6 shadow-lg space-y-2 md:left-28 md:top-32 sm:bottom-0'>
              <h1 className='font-bold text-lg'>Newcastle upon Tyne</h1>
              <p className='sm:text-base'>Once widespread in UK rivers, European sturgeon are now the most critically endangered group of species on the planet due to river dams, pollutions and fishing</p>
              <button className='bg-dark-blue font-semibold text-white px-4 py-2 flex items-center gap-2 rounded-full'>
                Find out more <img src={iconColor} alt="arrow icon" className='w-4 h-4' />
              </button>
            </div>

            <div className='w-full md:w-[90%] sm:w-full overflow-hidden'>
              <iframe  
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d586320.7000987884!2d-2.4043964!3d54.9675708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d857e0c6f64cd%3A0xbe252b072a76191!2sNewcastle%20upon%20Tyne%2C%20UK!5e0!3m2!1sen!2sng!4v1737660386479!5m2!1sen!2sng" 
                className='w-full'
                width="100%"
                height="666" 
                style={{border: 0}}
                referrerPolicy='no-referrer-when-downgrade'
                loading="lazy" 
                allowFullScreen=""
              >
              </iframe> 
            </div>
        </div>
        )}
      </div>


      <div className='bg-deep-blue py-20 border-0.5'>
        <div className='flex flex-col md:items-center'>
          <p className='text-white md:text-4xl sm:text-3xl sm:text-center'>Get updates about our work and events near you</p>
          <form className='md:flex md:flex-row justify-center gap-2 pt-10 sm:flex sm:flex-col sm:justify-center sm:w-[80%] sm:mx-auto'>
            <input type="text" 
              name='name'
              placeholder='Name'
              className='sm:p-3 border-none focus:outline-none input-custom'
            />
            <input type="email" 
              placeholder='Email address'
              className='sm:p-3 border-none focus:outline-none input-custom'
            />
            <button type='submit'
              className='bg-light-blue text-blue-50 py-3 px-3 flex items-center gap-1 sm:w-[40%] md:w-auto font-bold'
            >
              Subscribe <a href="#"><img src={blueArrow} alt="blue-arrow" /></a>
            </button>
          </form>
        </div>
      </div>
  </div>
   
  )
}

export default Locationmain;


