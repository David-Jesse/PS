import iconColor from '../assets/iconColor.png';

// eslint-disable-next-line react/prop-types
const Card = ({title, backgroundImage}) => {
    return (
        <div className="relative w-[90%] h-[400px] shadow-box overflow-hidden flex items-center justify-center gap-4 bg-cover"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h2 className="text-white font-semibold text-3xl mb-4 absolute bottom-20">{title}</h2>
                <a 
                    href="#"
                    className="bg-blue-100 hover:bg-light-blue font-semibold text-white md:px-5 sm:px-4 py-4 transition-colors absolute md:bottom-0 sm:bottom-0 md:right-0 sm:right-0 flex items-center hover:text-blue-50 justify-center transition-300 gap-4"
                    >
                    Find Out More <img src={iconColor} alt="icon" className='hover:text-blue-50'/>
                </a>
            </div>
        </div>

    )
}
   

export default Card;