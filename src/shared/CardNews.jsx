/* eslint-disable react/prop-types */
import iconColor from '../assets/iconColor.png'

const NewsCard = ({category, title, description, image}) => {
    return (
        <div className="bg-white shadow-md overflow-hidden relative">
            <span className='text-sm text-blue-50 font-semibold inline-block absolute top-40 bg-white px-2 py-2 left-5'>{category}</span>
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="px-4 flex flex-col justify-between py-10">
                <h2 className="text-lg text-blue-50 font-semibold mt-2 md:w-full sm:w-full">{title}</h2>
                <p className="text-blue-50 font-normal mt-2 text-base md:w-full w-full">{description}</p>
            </div>

            <div className='relative'>
                <a href='#' className='bg-blue-100 px-4 py-2 absolute bottom-0 right-0 items-center'><img src={iconColor} alt="" /></a> 
            </div>
        </div>
    )
}

export default NewsCard;