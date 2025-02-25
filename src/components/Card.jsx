import iconColor from '../assets/iconColor.png'
/* eslint-disable react/prop-types */


const Card = ({backgroundImage, title, description, buttonLink}) => {

  return (
    <div 
      className="relative w-[100%] h-[450px] shadow-box overflow-hidden flex items-center justify-center gap-10 bg-cover "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-[70%]">
        <h3 className="text-3xl mb-2 font-light">{title}</h3>
        <p className="mb-6 text-2xl font-bold">{description}</p>
      </div>

      <button 
        href={buttonLink}
        className="bg-blue-100 text-white md:px-6 sm:px-4 py-2 font-medium transition-colors absolute md:bottom-1.5 sm:bottom-1.5 md:right-0 sm:right-0 flex items-center hover:text-blue-50 justify-center gap-4"
        >
          Find out more <img src={iconColor} alt="arrow-icon"/>
      </button>
    </div>
  )
}

export default Card;