// eslint-disable-next-line react/prop-types
const EventCard = ({event, hasDate = true}) => {
    return (
        <div className="relative p-6 flex sm:flex-col md:flex-row md:items-center gap-4 shadow-lg bg-sky-blue mb-4 ">
            {hasDate && (
                <>
                    <div className="absolute bg-light-blue top-0 text-center px-2 py-2 border-b flex flex-col justify-center">
                        <span className="text-sm uppercase font-semibold text-blue-50">May</span>
                        <span className="text-sm font-bold text-blue-50">22</span>
                    </div>  

                    <div className="flex md:flex-row sm:flex-col sm:items-center mx-auto justify-center md:w-[68%]">
                        <div className="md:pl-10 sm:pt-12">
                            <h3 className="md:text-[24px] sm:mb-2 sm:text-xl font-semibold text-blue-50">{event.title}</h3>
                            <p className="text-sm text-blue-50 text-left mx-auto">{event.description}</p>
                        </div>
                    </div>

                    <div className="md:ml-auto sm:mt-3">
                        <a 
                            href={event.link}
                            className="px-5 py-3 text-lg bg-dark-blue text-white font-semibold rounded-full"
                            >
                            Find out more
                        </a>
                     </div>
                    
                   
                </>
            )
            }
               
            
            {!hasDate && (
                <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-blue-50">{event.title}</h3>
                    <p className="text-sm text-blue-50 text-left ml-auto">{event.description}</p>
                </div>
            )}
    </div>
    )
}

export default EventCard;