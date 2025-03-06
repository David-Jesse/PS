import {useState} from 'react';
import iconColor from '../assets/iconColor.png';
import loadMore from '../assets/loadMore.png';
import UpdateForm from '../shared/UpdateForm';


const LatestMain = () => {
    const [eventType, setEventType]  = useState('default');
    const [visibleUpcomingCount, setVisibleUpcominggCount] = useState(3);
    const [visiblePreviousCount, setVisiblePreviousCount] = useState(3);    

    const loadMoreEvents = () => {
      if (eventType === 'default') {
        setVisibleUpcominggCount(visibleUpcomingCount + 3);
      } else {
        setVisiblePreviousCount(visiblePreviousCount + 3);
      }
    }

    const handleUpcomingEventsClick = () => {
        setEventType('default');
    }

    const handlePreviousEventsClick = () => {
        setEventType('previous');
    }

    const events = [
        {
          date: {month: "MAY", day: '22'},
          title: "Voluteering: Beach Clean Seaburn Beach",
          description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
          link: "#",
        },
        {
          date: {month: "MAY", day: '22'},
          title: "Soundmirror: Artwork Launch and Field Walk",
          description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
          link: "#",
        },
        {
            date: {month: "MAY", day: '22'},
            title: "Soundmirror: Artwork Launch and Field Walk",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
        },
        {
            date: {month: "MAY", day: '22'},
            title: "Soundmirror: Artwork Launch and Field Walk",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
        },
        {
          date: {month: "MAY", day: '22'},
          title: "BE THE SEA - Embodying Sound workshops at Souter Lighthouse",
          description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
          link: '#',
        },
        {
            date: {month: "MAY", day: '22'},
            title: "Voluteering: Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
          },
          {
            date: {month: "MAY", day: '22'},
            title: "Soundmirror: Artwork Launch and Field Walk",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
          },
          {
            date: {month: "MAY", day: '22'},
            title: "BE THE SEA - Embodying Sound workshops at Souter Lighthouse",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: '#',
          }
      ];

      const prevEvents = [
        {
          date: {month: "APRIL", day: '22'},
          title: "Voluteering: Beach Clean Seaburn Beach",
          description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
          link: "#",
        },
        {
          date: {month: "APRIL", day: '22'},
          title: "Soundmirror: Artwork Launch and Field Walk",
          description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
          link: "#",
        },
        {
          date: {month: "APRIL", day: '22'},
          title: "BE THE SEA - Embodying Sound workshops at Souter Lighthouse",
          description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
          link: '#',
        },
        {
            date: {month: "APRIL", day: '22'},
            title: "Voluteering: Beach Clean Seaburn Beach",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
          },
          {
            date: {month: "APRIL", day: '22'},
            title: "Soundmirror: Artwork Launch and Field Walk",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: "#",
          },
          {
            date: {month: "APRIL", day: '22'},
            title: "BE THE SEA - Embodying Sound workshops at Souter Lighthouse",
            description: "Our firm is a long established lorem Ipsum is simply dummy  a long established lorema long established lorem",
            link: '#',
          }
      ];

      const visibleEvents = eventType === 'default' ? events.slice(0, visibleUpcomingCount) : prevEvents.slice(0, visiblePreviousCount);

    return (
        <div className="w-full">
            <div className="py-10 mx-auto w-[90%]">
                <div className='flex md:gap-4 sm:gap-2 md:w-[90%] sm:w-full sm:items-center mx-auto'>
                    <button className={`md:text-lg sm:text-sm ${eventType === 'default' ? 'bg-dark-blue text-white' : 'text-blue-50 hover:text-white hover:bg-dark-blue'}
                        md:px-4 sm:whitespace-nowrap sm:px-4 md:py-2 sm:py-2 font-semibold rounded-full border-2 border-blue-50 transition-colors duration-300 ease-in-out`}
                        onClick={handleUpcomingEventsClick}
                    >
                        Upcoming Events
                    </button>
                    <button className={`md:text-lg sm:text-sm ${eventType === 'previous' ? 'bg-dark-blue text-white' : 'text-blue-50 hover:text-white hover:bg-dark-blue'}
                        px-4 py-2 font-semibold sm:whitespace-nowrap rounded-full border-2 border-blue-50 transition-colors duration-300 ease-in-out`}
                        onClick={handlePreviousEventsClick}
                    >
                        Past Events
                    </button>
                </div>

                {/* Render events based on the state */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:py-10 sm:pt-10'>
                    {visibleEvents.map((event, index) => (
                        <div
                            key={index}
                            className='bg-sky-blue shadow-md p-12 relative rounded-lg'
                        >
                            {/* Date */}
                            <div className='absolute top-0 left-10 bg-light-blue w-[52px] text-blue-50 px-3 py-1 rounded-tr-lg rounded-bl-lg text-sm font-medium items-center'>
                                <span className='text-sm'>{event.date.month}</span>
                                <p className='font-bold text-lg'>{event.date.day}</p>
                            </div>

                            {/* Title and Description */}
                            <div className='pt-12'>
                                <h3 className='text-lg font-semibold mb-3 leading-7 text-blue-50'>
                                    {event.title}
                                </h3>
                                <p className='text-blue-50 text-base'>{event.description}</p>
                            </div>

                            {/* Link */}    
                            <a href={event.link} className='absolute bottom-0 right-0 p-2 bg-blue-50'><img src={iconColor} alt="icon color" /></a>
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-center md:mt-4 mx-auto flex justify-center sm:pb-8 md:pb-10'>
                <button 
                    className='text-blue-50 text-lg font-semibold flex items-center border border-blue-50 gap-1 md:px-4 sm:px-4 sm:py-2 md:py-3 rounded-full hover:text-light-blue'
                    onClick={loadMoreEvents}
                >
                    Load More <img src={loadMore} alt="Load more" />
                </button>
            </div>

            <UpdateForm />
        </div>
    )
}

export default LatestMain;