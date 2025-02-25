import { motion } from "framer-motion"
import accoTax from '../assets/accoTax.png';
import AirbnbLogo from '../assets/AirbnbLogo.png';
import BookingLogo from '../assets/BookingLogo.png';
import LloydsBank from '../assets/LloydsBank.png';
import londonBank from '../assets/londonBank.png';
import UberEats from '../assets/UberEats.png';
import personOne from '../assets/personOne.png';
import personTwo from '../assets/personTwo.png';
import personThree from '../assets/personThree.png';
import personFour from '../assets/personFour.png';
import personFive from '../assets/personFive.png';
import personSix from '../assets/personSix.png';
import answerButton from '../assets/answerButton.png';
import Card from '../shared/AboutCard';
import blueArrow from '../assets/blueArrow.png';
import { useState } from "react";


const AboutMain = () => {
    const [selectedSection, setSelectedSection] = useState('A-E');
    const [openItems, setOpenItems] = useState({});

    const handleToggle = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const glossarySections = [
        {label: 'A-E', items: [{question: "Who can use Stronger Shores?", answer: 'Anyone seeking to strengthen their business strategies can benefit from Stronger Shores'}, {question: 'How can stronger shores assist?', answer: 'It can help connnect you with your target audience, and also providing loans to grow your business.'}]},
        {label: 'F-J', items: [{question: 'What is stronger shores, and how can it help me?', answer: 'This course is aimed at people new to Organising.'}]},
        {label: 'L-P', items: ['']},
        {label: 'Q-U', items: ['']},
        {label: 'V-Z', items: ['']},
    ]

    const brandLogos = [
        {src: AirbnbLogo, alt: 'Airbnb'},
        {src: BookingLogo, alt: 'BookingLogo'},
        {src: accoTax, alt: 'accotax'},
        {src: LloydsBank, alt: 'Lloydsbank'},
        {src: londonBank, alt: 'londonbank'},
        {src: UberEats, alt: 'Uber eats'}
    ]

    const teamMembers = [
        {id:1, name: 'Kathryn Murphy', title: 'Movement Building', imgSrc: personOne},
        {id:2, name: 'Kathryn Murphy', title: 'Movement Building', imgSrc: personTwo},
        {id:3, name: 'Kathryn Murphy', title: 'Movement Building', imgSrc: personThree},
        {id:4, name: 'Kathryn Murphy', title: 'Movement Building', imgSrc: personFour},
        {id:5, name: 'Kathryn Murphy', title: 'Movement Building', imgSrc: personFive},
        {id:6, name: 'Kathryn Murphy', title: 'Movement Building', imgSrc: personSix}
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

    const siteWrapper = 'w-[100%]'
  return (
    <main className={`${siteWrapper}`}>
        <div className="bg-blue-100 bg-[url('assets/backgroundImage.png')] bg-cover sm:w-full md:py-20">
            <div className='container mx-auto px-4 sm:py-10'>
                <div className='flex flex-col mx-auto justify-center md:flex-row md:space-x-12'>
                    <div className='md:w-[38%] mb-8 md:mb-0'>
                        <h2 className='text-white text-2xl md:text-[21px] sm:text-[18px] font-semibold mb-2'>
                            Stronger Shores led by South Tyneside Council, is taking a new approach to making British coastlines and communities stronger
                            in the face of flooding, erosion and the impacts of climate change.
                        </h2>
                    </div>
                    <div className='md:w-1/2 text-lg'>
                        <p className='text-white mb-0'>
                            Through Stronger Shores, the North-East is trailblazing a path for the UK to be a world-leader
                            in tackling the climate crisis.
                        </p>
                        <p className="text-white mb-2">
                            The British coastline has been decimated over the years and important natural habitats have been lost. Many areas areas
                            are threatened by flooding, erosion and storms and climate change will only make it worse. If we do nothing, habitats and communities could
                            suffer.
                        </p>
                        <p className="text-white">
                            Stronger Shores is turning to the hidden habitats below the waves - seagrass meadows, kelp forests and oyster reefs - for a solution
                            Experts will learn how these habitats: imporve water quality, reduce erosion, stabilise shorelines, reduce wave impacts, create rich wildlife, protect against climate change, and extend
                            the lifespan of man-made coastal defences. Trialling these practical, value-for-money actions now will save money later.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="overflow-hidden py-10">
            <motion.div
                animate='animate'
                variants={scrollVariants}
                className="flex gap-14 md:gap-14 px-4 items-center whitespace-nowrap"
            >
                {brandLogos.map((logo, index) => (
                    <motion.div
                        key={index}
                        href='#'
                        className="block flex-shrink-0"
                    >
                        <img src={logo.src} alt={logo.alt} className="md:h-auto"/>
                    </motion.div>
                ))}

                {/* Reapeat logos for continous scrolling effect */}

                {brandLogos.map((logo, index) => (
                    <motion.div key={`${index}-repeat`} className="block flex-shrink-0">
                        <img src={logo.src} alt={logo.alt} className="md:h-auto" />
                    </motion.div>
                ))}
            </motion.div>
        </div>

        <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'imgSrc'}}></div>
        </div>

        <div className="mx-auto px-4 py-8 bg-sky-blue w-full ">
            <h2 className="text-4xl font-bold mb-4 text-deep-purple">Our Team</h2>

            <div className="grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 sm:w-full">
                {teamMembers.map(member => (
                    <Card key={member.id}  name={member.name} title={member.title} imgSrc={member.imgSrc}/>
                ))}
            </div>
        </div>

        <div className="py-20 flex items-center justify-center flex-col w-full">
            <h1 className="text-4xl font-bold text-deep-purple pb-4">Glossary</h1>
            <p className="mb-6 text-deep-purple text-lg font-normal sm:text-center">This course is aimed at people new to (or relatively new) to Broad Based.</p>
 
            <div className="md:px-60 md:w-[70%] mx-auto bg-light-blue border gap-10 md:flex justify-between items-center sm:flex sm:flex-row sm:w-full border-b-2 pb-2 mb-4 py-2 sm:justify-center sm:whitespace-nowrap">
              {glossarySections.map((section) => (
                <button
                    key={section.label}
                    className={`relative py-2 text-deep-blue font-semibold ${selectedSection === section.label ? 'text-deep-blue' : ''}`}
                    onClick={() => setSelectedSection(section.label)}
                >
                    {section.label}
                    {selectedSection === section.label && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-deep-blue"></span>
                    )}
                </button>
              ))}
            </div>
            <div className="md:flex sm:flex-col sm:items-center sm:w-full">
              {glossarySections.find(section => section.label === selectedSection)?.items.map((item, index) => (
                <div key={index} className={`py-2 flex justify-between md:items-center sm:w-full sm:flex-col`}>
                   <div className="flex-grow px-10">
                        <div className={`flex justify-between items-center md:gap-80 md:w-[100%] sm:w-full px-4 bg-sky-blue py-4 ${openItems[index] ? '' : 'bg-sky-blue'}`}>
                            <span className='text-blue-50 font-semibold'>{item.question}</span>
                            <button onClick={() => handleToggle(index)} className="ml-2 origin-bottom transform transition-transform">
                                <img src={answerButton} alt="answer-button" className={`transform transition-transform ${openItems[index] ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                        {openItems[index] && (
                            <div className="mt-2">
                                <p className="text-blue-50 font-normal ml-3">{item.answer}</p>
                            </div>
                        )}
                    </div>
                </div>
              ))}
            </div>
        </div>

        <div className='bg-deep-blue py-20 border-0.5'>
            <div className='flex flex-col md:items-center'>
              <p className='text-white md:text-4xl sm:text-3xl sm:text-center'>Get updates about our work and events near you</p>
              <form className="md:flex md:flex-row justify-center gap-2 pt-10 sm:flex sm:flex-col sm:justify-center sm:w-[80%] sm:mx-auto">
                <input type="text" 
                    name='name'
                    placeholder="Name"
                    className="sm:p-3 border-none input-custom focus:outline-none"
                />
                <input type="email" 
                    placeholder="Email address"
                    className="sm:p-3 border-none focus:outline-none input-custom"
                />
                <button
                    type="submit"
                    className="bg-light-blue text-blue-50 py-3 px-3 flex items-center gap-1 sm:w-[40%] md:w-auto font-bold"
                >
                    Subscribe <a href="#"><img src={blueArrow} alt="blue-arrow"/></a>
                </button>
              </form>
              <p className="sm:hidden pt-4 text-white text-xs font-normal">By submitting this form, you are agreeing to the data-use policies outlined in this <a href="#" className="underline">privacy notice</a></p>
            </div>
        </div>
    </main>
  )
}

export default AboutMain;