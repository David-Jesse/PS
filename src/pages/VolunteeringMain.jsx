import EventCard from "../shared/EventCard"
import UpdateForm from "../shared/UpdateForm"

const VolunteeringMain = () => {

    const events = [
        {
            id: 1,
            title: "Volunteering: Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: '#'
        },
        {
            id: 2,
            title: "Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#"
          },
          {
            id: 3,
            title: "Volunteering: Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
            noDate: true
          },
          {
            id: 4,
            title: "Volunteering: Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#"
          },
          {
            id: 5,
            title: "Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#"
          },
          {
            id: 6,
            title: "Volunteering: Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
            noDate: true
          }
    ]
  return (
    <div className="md:w-full sm:w-[100%] md:pt-10">
        <div className="mx-auto relative md:w-[80%] sm:w-[90%]">
            <div className="md:absolute sm:relative bottom bottom-0 left-0 md:w-[100%] h-24 bg-white mclip-path-dent"></div>
            <div className="md:absolute sm:relative bottom-0 top-1/2 md:left-6 flex flex-col md:justify-center items-center py-2">
                <h3 className='text-xl text-blue-50 font-semibold md:mb-6 sm:mb-3' >The Stronger Shore&apos;s team of 127 voluteers provides invaluable support across the charity and their numbers
                    continue to increase. We recruit volunteers throughout the year to support all areas of our activity.
                </h3>
                <p className='text-lg text-blue-50 font-normal'>Stronger Shores, led by South Tyneside Council, is taking a new approach to making British coastlines and communities stronger in the face of flooding, erosion and the impacts of climate change. 
                    The project explores how to use the power of nature to restore our 
                    ocean&apos;s health while cementing a sustainable</p>
            </div>
        </div>
        
        <div className="md:py-40 sm:py-20 md:w-[90%]">
            <div className="mx-auto md:w-[80%] sm:w-[90%]">
               {events.map(event => (
                    <EventCard 
                        key={event.id}
                        event={event}
                        hasDate={!event.noDate}
                    />
               ))}
            </div>
        </div>

        <UpdateForm />
    </div>
  )

}

export default VolunteeringMain
