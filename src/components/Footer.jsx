import logoFooter from '../assets/logoFooter.png';
import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/Twitter.png';
import Linkedin from '../assets/Linkedin.png';
//import footerImage from '../assets/footerImage.png';


const Footer = () => {
  return (
    <footer className='bg-blue-50 w-[100%] md:pt-20 sm:w-full'>
      <div className='py-8 px-1 sm:px-6 lg:px-8'>
        <div className='grid grid-cols md:grid-cols-4 items-start gap-10 w-[full] text-white'>
          <div className='pl-4'>
            <a href="#"><img src={logoFooter} alt="footer-logo" width={50} height={50} /></a>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Quick Links</h3>
            <ul className='mt-4 space-y-4 text-base font-normal'>
              <li><a href="/about" className=' hover:text-light-blue transition-colors durtion-300'>About Us</a></li>
              <li><a href="/ourlocation" className=' hover:text-light-blue transition-colors durtion-300'>Locations</a></li>
              <li><a href="/getinvolved" className=' hover:text-light-blue transition-colors durtion-300'>Get Involved</a></li>
              <li><a href="/getinvolved/latestevents" className=' hover:text-light-blue transition-colors durtion-300'>Events</a></li>
              <li><a href="/news" className=' hover:text-light-blue transition-colors durtion-300'>News</a></li>
              <li><a href="#" className=' hover:text-light-blue transition-colors durtion-300'>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold'>What we do</h3>
            <ul className='mt-4 space-y-4 text-base font-normal'>
              <li><a href="#" className=' hover:text-light-blue transition-colors duration-300'>Coastal</a></li>
              <li><a href="#" className=' hover:text-light-blue transition-colors duration-300'>Fresh Water</a></li>
              <li><a href="#" className=' hover:text-light-blue transition-colors duration-300'>Marine Water</a></li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>Contact us</h3>
            <p className='mt-4 text-base font-normal'>strongershores@southyneisde.gov.uk</p>
            <p className='text-base font-normal'>The white Gates Factory, 1 Old Street, South Shields, NE34 6BP</p>
            <div className='mt-4 flex space-x-4  hover:text-light-blue'>
              <a href="#" ><img src={Linkedin} alt="linkedin-icon" className='hover:text-light-blue transition-colors duration-300'/></a>
              <a href="#"><img src={Twitter} alt="twitter" className='hover:text-light-blue transition-colors duration-300'/></a>
              <a href="#"><img src={Facebook} alt="facebook-icon" className='hover:text-light-blue transition-colors duration-300'/></a>
            </div>
          </div>
        </div>

        <div className='md:flex md:flex-col space-x-4 text-white pt-10 md:justify-center md:items-center sm:w-full sm:flex sm:items-center sm:flex-col'>
          <div className='text-sm pt-8 space-x-2 pl-4 font-normal md:flex flex-row justify-center md:items-center sm:w-full sm:text-nowrap '>
            <a href="#" className='hover:underline hover:text-light-blue transition-colors duration-300'>Terms and Conditions</a>
            <a href="#" className='hover:underline hover:text-light-blue transition-colors duration-300'>Privacy Policy</a>
            <a href="#" className='hover:underline hover:text-light-blue transition-colors duration-300'>Accessibility</a>
          </div>

          <div className='mt-4 border-t border-gray-color pt-4 flex justify-between md:w-[70%] sm:w-full'></div>
          <div className='flex md:items-center md:justify-center text-center flex-col text-nowrap'> 
            <p className='text-sm font-normal'>&copy; 2023 Stronger Shores. All rights Reserved</p>
            <p className='font-normal text-sm sm:w-full pt-2'>Designed by Studio 14</p> 
          </div>
         
        </div>
      </div>
    </footer>
  )
}

export default Footer;