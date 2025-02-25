import { useEffect, useState, useRef } from "react"
import logoOne from '../assets/logoOne.png'
import headerBanner from '../assets/headerBanner.png'
import { ChevronDown, X, Menu } from "lucide-react"
import { Link } from "react-router-dom";

const Aboutus = () => {
    const [openDropdowns, setOpenDropdowns] = useState([])
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const dropdownRefs = useRef({})

    const toggleDropdown = (index) => {
      setOpenDropdowns((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }))
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
        Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
          if(ref && !ref.contains(event.target)) {
            setOpenDropdowns(prev => ({
              ...prev,
              [key]: false
            }))
          }
        })
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const navItems = [
      {label: 'About Us', link: '/about' },
      {
        label: 'Habitats',
        link: '/habitats',
        dropdownItems: [{label: 'Oyster Reefs', link: '/habitats/oyster-reefs'}]
      },
  
      {
        label: 'Our Locations',
        link: '/ourlocation',
        dropdownItems: [{label: 'Middlebrough', link: '/ourlocation/middlebrough'}]
      },
  
      {
        label: 'Get Involved',
        link: '/getinvolved',
        dropdownItems: [
          {label: 'Latest Events', link: '/latestevents'},
          {label: 'Volunteering Opportunities', link:'/volunteering'}
        ]
      },
  
      {label: 'Resources', link: '/resources'},
      {label: 'News', link: '/news'}
     ]

  return (
    <div className="relative bg-cover md:h-screen sm:w-full" style={{backgroundImage: `url(${headerBanner})`}}>
      <header className="md:w-[90%] sm:w-[90%] mx-auto">
        <nav className="flex justify-between items-center py-5">

          {/*Logo Icon*/}
          <div className="flex items-center gap-4">
            <a href="#"><img src={logoOne} alt="logo-one"/></a>
          </div>
          
          {/*Mobile menu toggle */}
          <button
            className="md:hidden block p-2 text-white hover:text-light-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>

          {/*Main navigation for desktop */}
          <ul className={`hidden md:flex font-bold md:gap-12 sm:gap-4 items-center ${
            isMobileMenuOpen ? 'block' : 'hidden'}`}
          >
            {navItems.map((item, index) => (
              <li 
                key={index}
                ref={(el) => (dropdownRefs.current[index] = el)}
                className="relative group"
              >
                <div className="flex items-center gap-1 relative justify-between md:ml-auto">
                  <Link
                    to={item.link}
                    className="text-white hover:text-light-blue transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                  
                  {item.dropdownItems && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="p-1 hover:text-light-blue transition-colors duration-300"
                      aria-expanded={openDropdowns[index]}
                      aria-label='Toggle dropdown'
                    >
                      <ChevronDown 
                        size={16}
                        color="white"
                        className={`transform transition-transform duration-300 group-hover:rotate-180 ${openDropdowns[index] ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {/* Indicator below the nav menu items */}
                <div className={`absolute left-0 right-0 h-1 bg-white mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>

                {/* Dropdown Menu for Desktop */}
                {item.dropdownItems && (
                  <ul
                    className={`absolute top-full left-0 bg-white shadow-lg mt-4 rounded-md py-2 min-w-[100px] transform z-10 transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100`}
                  >
                    {item.dropdownItems.map((dropdownItem, dropIndex) => (
                      <li key={dropIndex}>
                        <Link 
                          to={dropdownItem.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/*Mobile menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white sm:w-full text-blue-50 px-4 py-6">
          {navItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                {/** For items with dropdowns, dont use link on the parent*/}
                {item.dropdownItems ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="p-1 hover:text-light-blue transition-colors duration-300 "
                    aria-expanded={openDropdowns[index]}
                    aria-label= "Toggle dropdown"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    className="block px-1 py-2 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdownItems && (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="p-1 hover:text-light-blue transition-colors duration-300"
                    aria-expanded={openDropdowns[index]}
                    aria-label="Toggle dropdown"
                    >
                      <ChevronDown 
                        size={16}
                        className={`transform transition-transform duration-300 ${openDropdowns[index] ? 'rotate-180' : ''}`}
                      />
                  </button>
                )}
              </div>

              {item.dropdownItems && openDropdowns[index] && (
                <ul className="mt-2 pl-4 shadow-lg">
                  {item.dropdownItems.map((dropdownItem, dropIndex) => (
                    <li key={dropIndex} className='mb-2'>
                      <Link
                        to={dropdownItem.link}
                        className="block py-2 px-4 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      <section className="flex flex-col w-[90%] justify-center items-center md:pl-40 md:pt-10 md:h-full sm:pt-10 sm:pl-2 sm:py-8">
        <div className="text-center md:space-y-2 sm:space-y-2 w-[90%]">
          <div className="md:w-[55%] sm:w-[100%] md:py-1.5 sm:py-1 bg-white"></div>
          <h1 className="text-white sm:text-4xl md:w-[60%] md:text-5xl md:pr-12 font-bold sm:w-full sm:text-center sm:pt-1">
            WE MAKE SURE OUR SHORELINES AND OCEANS ARE PROTECTED.
         </h1> 
        </div>
      </section>
    </div>
  )
}
export default Aboutus;