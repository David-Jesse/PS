import iconColor from '../assets/iconColor.png'

// eslint-disable-next-line react/prop-types
const ResourceCard = ({category, title, image}) => {
    return (
        <div className="bg-white shadow-md overflow-hidden relative">
            <span className='text-[16px] text-blue-50 font-semibold inline-block absolute top-40 bg-white px-2 py-2 left-5'>{category}</span>
            <img src={image} alt={title} className="w-full h-[200px] object-cover" />
            <div className="px-4 flex flex-col justify-between py-10">
                <h2 className="text-[20px] text-blue-50 font-semibold mt-2 md:w-[100%] sm:w-full">{title}</h2>
            </div>

            <div className='relative'>
                <a href='#' className='bg-blue-100 px-4 py-2 absolute bottom-0 hover:bg-light-blue right-0 items-center'><img src={iconColor} alt="" className='h-auto w-auto' /></a> 
            </div>
        </div>
    )
}

export default ResourceCard;