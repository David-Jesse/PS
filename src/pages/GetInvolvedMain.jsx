import getOne from '../assets/getOne.png';
import getTwo from '../assets/getTwo.png';
import getThree from '../assets/getThree.png';
import getVector from '../assets/getVector.png';
import getInvolved from '../assets/getInvolved.png';
import getFour from '../assets/getFour.png';
import vectorRight from '../assets/vectorRight.png';
import UpdateForm from '../shared/UpdateForm';


const GetInvolvedMain = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='bg-sky-blue sm:w-full'>
                <div className='flex md:flex-row sm:flex-col items-center py-20 md:w-[90%] sm:w-full mx-auto md:gap-40 sm:gap-10'>
                    <div className='relative md:w-1/3 sm:w-[90%]'>
                        <div className='absolute -inset-4 top-4 left-2 md:h-[400px] p-3 z-0 bg-lighter-blue sm:h-auto'></div>

                        {/*image container */}
                        <div className='relative z-10 overflow-hidden h-[400px] sm:h-auto'>
                            <img src={getOne} alt="man picking trash" className='w-full h-full object-cover'/>
                        </div>
                    </div>

                    <div className="md:w-1/2 sm:w-[90%] space-y-4">
                        <h2 className="text-blue-50 font-semibold md:text-4xl sm:text-2xl">See our current volunteering opportunities</h2>
                        <p className='text-lg text-blue-50 mb-4 w-[90%]'>Stronger Shores led by South Tyneside Council, is taking a new approach
                            to making British coastlines and communities stronger in the face of flooding, erosion and the impacts of climate change.
                            The project explores how to use the power of nature to restore our ocean&apos;s health while cementing a sustainable, healthy and prosperous future for coastal communities.
                        </p>
                        <a className='cursor-pointer rounded-full px-6 py-4 border-2 border-dark-blue text-dark-blue text-normal font-semibold gap-2 justify-center hover:text-deep-blue flex items-center md:w-[40%] sm:w-[60%]'>
                            Find out more <img src={getVector} alt="blue arrow"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='py-20 min-h-screen'>
                <div className='relative flex justify-center'>
                    <div className='sm:hidden md:flex absolute left-0'>
                        <img src={getInvolved} alt="Blue layer"/>
                    </div>

                    <div className='flex md:flex-row sm:flex-col items-center md:gap-24 sm:gap-10 mx-auto md:w-[70%] sm:w-full relative'>
                        <div className='md:w-[44%] sm:w-[90%] space-y-4'>
                            <h2 className='md:text-4xl sm:text-2xl text-blue-50 font-semibold'>How to get involved as an individual</h2>
                            <p className='text-lg text-blue-50 mb-4 '>Stronger Shores led by South Tyneside Council, is taking a new approach
                            to making British coastlines and communities stronger in the face of flooding, erosion and the impacts of climate change.
                            The project explores how to use the power of nature to restore our ocean&apos;s health while cementing a sustainable, healthy and prosperous future for coastal communities.
                            </p>
                            <a className='cursor-pointer rounded-full px-6 py-4 border-2 border-dark-blue text-dark-blue text-normal font-semibold gap-2 justify-center hover:text-deep-blue flex items-center md:w-[50%] sm:w-[70%]'>
                                Find out more <img src={getVector} alt="blue arrow"/>
                            </a>
                        </div>

                        <div className='md:w-1/4 sm:w-[90%]'>
                            <img src={getTwo} alt="cleaning the water bodies" className='md:w-[635px] md:h-[600px] sm:w-full sm:h-auto'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-shaded-blue">
                <div className='relative flex md:flex-row sm:flex-col-reverse items-center py-20 md:gap-60 sm:gap-20 w-full'>
                    <div className='md:w-1/3 sm:w-[90%]'>
                        <img src={getFour} alt="Ladies cleaning a water body" className='md:w-[635px] md:h-[600px] sm:w-full sm:h-auto'/>
                    </div>

                    <div className='relative items-center justify-center sm:w-[90%]'>
                        <div className='space-y-4 md:w-[70%] sm:w-full'>
                            <h2 className='md:text-4xl sm:text-2xl text-blue-50 font-semibold'>Opportunities for local community groups</h2>
                            <p className='text-lg text-blue-50 mb-4'>Stronger Shores led by South Tyneside Council, is taking a new approach
                            to making British coastlines and communities stronger in the face of flooding, erosion and the impacts of climate change.
                            The project explores how to use the power of nature to restore our ocean&apos;s health while cementing a sustainable, healthy and prosperous future for coastal communities.
                            </p>
                            <a className='cursor-pointer rounded-full px-6 py-4 border-2 border-dark-blue text-dark-blue text-normal font-semibold gap-2 justify-center hover:text-deep-blue flex items-center md:w-[50%] sm:w-[70%]'>
                                Find out more <img src={getVector} alt="blue arrow"/>
                            </a>
                        </div>
                    </div>

                    <div className='sm:hidden md:flex absolute right-0'>
                        <img src={vectorRight} alt="right vector" />
                    </div>
                </div>
            </div>

            <div className='bg-sky-blue py-20'>
                <div className='relative w-[90%] mx-auto flex items-center justify-center'>
                    <div className='flex flex-col items-center sm:gap-4'>
                        <div className='md:absolute p-8 bg-white shadow-lg top-10 left-4 transform translate-x-1/5 space-y-4 md:w-[40%] sm:w-[100%] sm:p-6'>
                            <h2 className='md:text-4xl sm:text-2xl font-semibold text-blue-50'>Do you run a school or educational institution?</h2>
                            <p className='text-lg text-blue-50 mb-4 font-normal'>Stronger Shores led by South Tyneside Council, is taking a new approach
                                to making British coastlines and communities stronger in the face of flooding, erosion and the impacts of climate change.
                                The project explores how to use the power of nature to restore our ocean&apos;s health while cementing a sustainable, healthy and prosperous future for coastal communities.
                            </p>
                        </div>

                        <div className='md:w-1/2 sm:w-full'>
                            <img src={getThree} alt="boy picking up waste"  className='md:h-[500px] md:w-[600px] sm:w-full sm:h-auto'/>
                        </div>
                    </div> 
                  
                </div>
            </div>

            <UpdateForm />
        </div>
    )   
}

export default GetInvolvedMain;