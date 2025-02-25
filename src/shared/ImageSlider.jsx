import { useState } from "react";
import iconColor from '../assets/iconColor.png';

const ImageSlider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            // eslint-disable-next-line react/prop-types
            prevIndex === 0 ? images.length -1 : prevIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            // eslint-disable-next-line react/prop-types
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out">
                {images.map((image, index) => (
                    <div key={index} className='w-full h-96 flex-shrink-0'>
                        <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover"/>
                    </div>
                ))}
            </div>

            {/*Previous button */}
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-100 p-3 hover:bg-white transition-colors duration-300"
            >
                <img src={iconColor} alt="icon" />
            </button>

            {/*Next button */}
            <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-100 p-3 hover:bg-white transition-colors duration-300"
                onClick={goToNext}
                >
                    <img src={iconColor} alt="icon-color" />
            </button>
        </div>
    )
}

export default ImageSlider;