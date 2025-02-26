import { useState, useEffect, useRef } from "react";
import logoOne from '../assets/logoOne.png';
import {ChevronDown, Menu, X} from 'lucide-react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRefs = useRef({})

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target)) {
          setOpenDropdowns(prev => ({
            ...prev,
            [key]: false
          }))
        }
      })
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
   }, []);

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
        {label: 'Volunteering Opportunities', link: '/volunteering'}
      ]
    },

    {label: 'Resources', link: '/resources'},
    {label: 'News', link: '/news'}
   ]

   const toggleDropdown = (index) => {
   
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

   const siteWrapper = 'w-[90%]'

  return (
    <header className="w-full bg-blue-50">
      <div className="relative">
        <div className={`${siteWrapper} mx-auto`}>
          <nav className="flex justify-between items-center py-5">
            <div className="flex gap-4">
              <Link to="#">
                <img src={logoOne} alt="logo-one"/>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden block p-2 text-white hover:text-light-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Main navigation for desktop */}
            <ul className={`hidden md:flex font-bold md:gap-12 sm:gap-4 items-center ${
                isMobileMenuOpen ? 'block' : 'hidden'
              }`}
            >
              {navItems.map((item, index) => (
                <li 
                  key={index}
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  className="relative group"
                >
                  <div className="flex items-center gap-1">
                    <Link 
                      to={item.link}
                      className="text-white hover:text-light-blue transition-colors duration-300"
                      >
                        {item.label}
                    </Link>
                    
                    {item.dropdownItems && (
                      <button
                        className="p-1 hover:text-light-blue transition-colors duration-300"
                        aria-expanded={openDropdowns[index]}
                        aria-label="Toggle dropdown"
                      >
                        <ChevronDown
                          size={16}
                          color='white'
                          className={`transform transition-transform duration-300 group-hover:rotate-180`}
                        />
                      </button>
                    )}
                  </div>
              
                  {/* Dropdown Menu for Desktop*/}
                  {item.dropdownItems && (
                    <ul
                      className={`absolute top-full left-0 bg-white shadow-lg mt-4 rounded-md py-2 min-w-[100px] z-10 transition-all duration-300 transform origin-top group-hover:scale-y-100 opacity-0 group-hover:opacity-100`}
                    >
                    {item.dropdownItems.map((dropdownItems, dropIndex) => (
                      <li key={dropIndex}>
                        <Link 
                          to={dropdownItems.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
                          >
                          {dropdownItems.label}
                        </Link>
                      </li>
                    ))}
                </ul>
                )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

          {/*Mobile menu Items */}
          {isMobileMenuOpen && (
            <div className='md:hidden bg-white sm:w-full font-semibold text-blue-50 px-4 py-6'>
              {navItems.map((item, index) => (
                <div key={index} className='mb-4'>
                  <div className='flex justify-between'>
                    {item.dropdownItems ? (
                      <>
                        <Link
                          to={item.link}
                          className="block px-1 py-2 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <Link
                          onClick={() => {
                            toggleDropdown(index)
                          }}
                          className="p-1 hover:text-light-blue transition-colors duration-300"
                          aria-expanded={openDropdowns[index]}
                          aria-label="Toggle dropdown"
                        >
                          <ChevronDown 
                            size={16}
                            className={`transform transition-transform duration-300 ${openDropdowns[index] ? 'rotate-180' : ''}`}
                          />
                        </Link>
                      </>
                    ) : (
                        <Link
                          to={item.link}
                          className='block px-1 py-2 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                    )}
                  </div>

                  {item.dropdownItems && openDropdowns[index] && (
                    <ul className="mt-2 pl-4 shadow-lg">
                      {item.dropdownItems.map((dropdownItems, dropIndex) => (
                        <li key={dropIndex} className="mb-2">
                          <Link
                            to={dropdownItems.link}
                            className="block px-4 py-2 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItems.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
    </header>
  )
}

export default Navbar;