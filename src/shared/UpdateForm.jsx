import blueArrow from '../assets/blueArrow.png';

const UpdateForm = () => {
    return (
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
    )
}

export default UpdateForm;