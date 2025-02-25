import iconColor from '../assets/iconColor.png'


// eslint-disable-next-line react/prop-types
const Card = ({name, title, imgSrc}) => {

    return(
        <div 
            className='relative md:w-[100%] sm:w-full h-[450px] rounded overflow-hidden shadow-lg bg-opacity-75 flex items-center gap-10'
            style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >

            <div className='bg-white w-[80%] flex items-center gap-10 whitespace-nowrap absolute md:left-12 sm:left-6 bottom-10 sm:w-full'>
                <div className="relative px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-deep-purple">{name}</div>
                    <p className="text-deep-purple font-normal">{title}</p>
                </div>

                <div className="px-6 pt-4 pb-2 relative">
                    <button className="bg-blue-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="#"><img src={iconColor} alt="icon color" /></a>
                    </button>
                </div>
            </div>
           
        </div>
    )
}
   
export default Card;