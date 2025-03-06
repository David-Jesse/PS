import { useState } from "react";
import resourceOne from '../assets/resourceOne.png';
import resourceTwo from '../assets/resourceTwo.png';
import resourceThree from '../assets/resourceThree.png';
import ResourceCard from '../shared/ResourceCard';
import loadMore from '../assets/loadMore.png'
import UpdateForm from '../shared/UpdateForm';

const ResourcesMain = () => {
    const [activeTab, setActiveTab] = useState('All Resources');
    const [visibleItems, setVisibleItems] = useState(6);

    const allResources = [
        { category: 'Technology', title: 'High Seas Treaty: a global deal decades in the making', image: resourceOne },
        { category: 'Webinars', title: 'Transforming health policy through citizen-led social accountability', image: resourceTwo },
        { category: 'Case Studies', title: 'Shigella vaccines for traveler and military populations: A market assessment report', image: resourceThree },
        { category: 'Webinars', title: 'Transforming health policy through citizen-led social accountability', image: resourceTwo },
        { category: 'Case Studies', title: 'Shigella vaccines for traveler and military populations: A market assessment report', image: resourceThree },
        { category: 'Technology', title: 'High Seas Treaty: a global deal decades in the making', image: resourceOne },
        { category: 'Webinars', title: 'Transforming health policy through citizen-led social accountability', image: resourceTwo },
        { category: 'Case Studies', title: 'Shigella vaccines for traveler and military populations: A market assessment report', image: resourceThree },
        { category: 'Technology', title: 'High Seas Treaty: a global deal decades in the making', image: resourceTwo },
      ];

    const filteredResources = activeTab === 'All Resources' ? allResources : allResources.filter(resource => resource.category === activeTab);
    
    const loadItems = () => {
        setVisibleItems(prevItems => prevItems + 3);
    }

  return (
    <div className="w-full md:pt-10 sm:pt-10">
        <div className="w-[90%] mx-auto md:py-10">
            <div className="flex md:flex-row sm:flex-col md:gap-4 sm:gap-6">
                <button className={`px-4 py-2 rounded-full ${activeTab === 'All Resources' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50
                    `}
                    onClick={() => {
                        setActiveTab('All Resources')
                        setVisibleItems(6);
                    }}
                >
                    All Resources
                </button>
                <button className={`px-4 py-2 rounded-full ${activeTab === 'Research' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50
                    `}
                    onClick={() => {
                        setActiveTab('Research')
                        setVisibleItems(6)
                    }}
                >
                    Research
                </button>
            <button className={`px-4 py-2 rounded-full ${activeTab === 'Videos' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50
                    `}
                    onClick={() => {
                        setActiveTab('Videos')
                        setVisibleItems(6)                       
                    }}
                >
                    Videos
                </button>
                <button className={`px-4 py-2 rounded-full ${activeTab === 'Webinars' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50
                    `}
                    onClick={() => {
                        setActiveTab('Webinars')
                        setVisibleItems(6);
                    }}
                >
                    Webinars
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:mt-8 gap-10 sm:py-8">
                {filteredResources.slice(0, visibleItems).map((resource, index) => (
                    <ResourceCard 
                        key={index}
                        category={resource.category}
                        title={resource.title}
                        image={resource.image}
                    />
                ))}
            </div>
            
            {visibleItems < filteredResources.length && (
                <div className="flex justify-center md:mt-4 mx-auto sm:mt-3 sm:pb-8 md:pb-10">
                    <button className="md:px-4 md:py-3 sm:px-4 sm:py-2 rounded-full hover:text-light-blue text-blue-50 text-lg font-semibold flex items-center border border-blue-50 gap-1 "
                        onClick={loadItems}
                    >
                        Load More <img src={loadMore} alt="Load more icon" />
                    </button>
                </div>
            )}
        </div>

        <UpdateForm />
    </div>
  )
}

export default ResourcesMain