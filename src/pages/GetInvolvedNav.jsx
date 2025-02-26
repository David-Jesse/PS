import {useEffect, useState, useRef} from 'react';
import logoOne from '../assets/logoOne.png';
import { ChevronDown, Menu, X } from 'lucide-react';
import {Link} from 'react-router-dom';
import backgroundImage from '../assets/backgroundImage.png';

const GetInvolved = () => {
    const [openDropdowns, setOpenDropdowns] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRefs = useRef({})

    const toggleDropdown = (index) => {
        setOpenDropdowns((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
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
            {label: 'Volunteering Opportunities', link: '/voluteering'}
          ]
        },
    
        {label: 'Resources', link: '/resources'},
        {label: 'News', link: '/news'}
       ]

       return (
        <div className='bg-cover md:pb-20 sm:pb-10 sm:w-full bg-blue-100' style={{backgroundImage: `url(${backgroundImage})`}}>
            <header className='w-[90%] mx-auto'>
                <nav className='flex justify-between items-center py-5'>
                    <div className='flex gap-4'>
                        <Link to='#'>
                            <img src={logoOne} alt="logo image" />
                        </Link>
                    </div>

                    <button
                        className='md:hidden block p-2 text-white hover:text-light-blue'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>

                    {/* Desktop Menu */}
                    <ul className={`hidden md:flex font-bold md:gap-12 items-center &{
                        isMobileMenuOpen ? 'block' : 'hidden'}`}
                    >
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                ref={(el) => (dropdownRefs.current[index] = el)}
                                className='relative group'
                            >
                                <div className='flex items-center gap-1'>
                                    <Link
                                        to={item.link}
                                        className='text-white hover:text-light-blue transition duration-300'
                                        onClick={(e) => {
                                            if (item.dropdownItems) {
                                                e.preventDefault();
                                                toggleDropdown(index)
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Link>

                                    {item.dropdownItems && (
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className='p-1 hover:text-light-blue transition-colors duration-300'
                                            aria-expanded={openDropdowns[index]}
                                            aria-label="Toggle dropdown"
                                        >
                                            <ChevronDown 
                                                size={24}
                                                color='white'
                                                className={`transform transition-transform duration-300 group-hover:rotate-180 ${openDropdowns[index] ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    )}
                                </div>

                                  {/* Indicator below the nav menu items */}
                                  <div className={`absolute left-0 right-0 h-1 bg-white mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>

                                    {/* Dropdown Menu for desktop */}
                                    {item.dropdownItems && (
                                        <ul
                                            className={`absolute top-full left-0 bg-white shadow-lg mt-4 rounded-md py-2 min-w[100px] z-10 transition-all transform origin-top scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 opacity-0 duration-300 whitespace-nowrap`}
                                        >
                                            {item.dropdownItems.map((dropdownItems, dropIndex) => (
                                                <li
                                                    key={dropIndex}
                                                >
                                                    <Link
                                                        to={dropdownItems.link}
                                                        className='block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap'
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
            </header>

             {/*Mobile Menu Items */}
             {isMobileMenuOpen && (
                <div className='md:hidden bg-white sm:w-full font-semibold text-blue-50 px-4 py-6'>
                    {navItems.map((item, index) => (
                        <div key={index} className='mb-4'>
                            <div className='flex justify-between'>
                                {item.dropdownItems ? (
                                    <>
                                        <Link
                                            to={item.link}
                                            className='block px-1 py-2 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap'
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                        <Link
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleDropdown(index)}
                                            }
                                            className='p-1 hover:text-light-blue transition-colors duration-300'
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
                                        className="block px-1 py-2 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                            {item.label}
                                    </Link>
                                )}
                            </div>

                            {item.dropdownItems && openDropdowns[index] && (
                                <ul className='mt-2 pl-4 shadow-lg'>
                                    {item.dropdownItems.map((dropdownItems, dropIndex) => (
                                        <li key={dropIndex} className='mb-2'>
                                            <Link
                                                to={dropdownItems.link}
                                                className="block py-2 px-4 text-blue-50 hover:text-light-blue transition-colors duration-300 whitespace-nowrap"
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

             <section className='flex flex-col md:w-1/2 sm:w-[90%] justify-center items-center md:pt-20 sm:py-30'>
                <div className='md:space-y-2 sm:pt-10'>
                    <div className='w-full md:py-1 sm:py-1 bg-white'></div>
                    <h1 className='md:text-6xl sm:text-3xl text-white font-bold'>GET INVOLVED</h1>
                </div>
             </section>
        </div>
       )
}

export default GetInvolved;