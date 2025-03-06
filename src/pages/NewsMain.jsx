import { useState } from "react";
import UpdateForm from "../shared/UpdateForm";
import loadMore from '../assets/loadMore.png';
import newsBackground from '../assets/newsBackground.png';
import CardNews from '../shared/CardNews';


const NewsMain = () => {
    const [activeTab, setActiveTab] = useState('All News')
    const [visibleItems, setVisibleItems] = useState(6);

     const allNews = [
        { category: 'Technology', title: 'IOTC adopts ‘global first’ electronic monitoring standards', description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by..." ,image: newsBackground },
        { category: 'Webinars', title: 'The future of climate is digital. How AI can solve the global warming crisis', description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
        { category: 'Case Studies', title: "Saving Britain's royal fish", description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
        { category: 'Webinars', title: 'IOTC adopts ‘global first’ electronic monitoring standards', description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
        { category: 'Case Studies', title: 'The future of climate is digital. How AI can solve the global warming crisis', description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
        { category: 'Technology', title: "Saving Britain's royal fish", description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
        { category: 'Case Studies', title: 'The future of climate is digital. How AI can solve the global warming crisis', description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
        { category: 'Technology', title: 'IOTC adopts ‘global first’ electronic monitoring standards', description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
        { category: 'Webinars', title: 'The future of climate is digital. How AI can solve the global warming crisis', description:"Our firm is a long established fact that a reader will be distracted firm is a long established fact that a reader will be distracted by...", image: newsBackground },
    ];

    const filteredNews = activeTab === 'All News' ? allNews : allNews.filter(news => news.category === activeTab);

    const loadMoreNews = () => {
        setVisibleItems(prevItems => prevItems + 3)
    }


  return (
    <div className="w-full md:pt-10 sm:pt-10">
        <div className="w-[90%] mx-auto md:py-10">
            <div className="flex md:flex-row sm:flex-col md:gap-4 sm:gap-6 ">
                <button className={`px-4 py-2 rounded-full ${activeTab === 'All News' ? 'bg-dark-blue text-white' : 'hover:text-white  hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50 transition-300 ease-in-out
                    `}
                    onClick={() => {
                        setActiveTab('All News')
                        setVisibleItems(6)
                    }}    
                >
                    All News
                </button>
                <button className={`px-4 py-2 rounded-full ${activeTab === 'Community' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50
                    `}
                    onClick={() => {
                        setActiveTab('Community')
                        setVisibleItems(6)
                    }}    
                >
                    Community
                </button>
                <button className={`px-4 py-2 rounded-full ${activeTab === 'Climate Change' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50 trantion-300 ease-in-out
                    `}
                    onClick={() => {
                        setActiveTab('Climate Change')
                        setVisibleItems(6)
                    }}
                >
                    Climate Change    
                </button>
                <button className={`px-4 py-2 rounded-full ${activeTab === 'Technology' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50 transition-300 ease-in-out
                    `}
                    onClick={() => {
                        setActiveTab('Technology')
                        setVisibleItems(6)
                    }}
                >
                    Technology
                </button>
                <button className={`px-4 py-2 rounded-full ${activeTab === 'Grants' ? 'bg-dark-blue text-white' : 'hover:text-white hover:bg-dark-blue'}
                    font-semibold text-lg border-2 border-blue-50 text-blue-50 transition-300 ease-in-out
                    `}
                    onClick={() => {
                        setActiveTab('Grants')
                        setVisibleItems(6)
                    }}
                >
                    Grant
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:mt-8 gap-10 sm:py-8">
                {filteredNews.slice(0, visibleItems).map((news, index) => (
                    <CardNews 
                        key={index}
                        category={news.category}
                        title={news.title}
                        description={news.description}
                        image={news.image}
                    />
                ))}
            </div>

            {visibleItems < filteredNews.length && (
                <div className="flex justify-center md:mt-4 sm:mt-3 sm:pb-8 mdLpb-10">
                    <button className="md:px-4 md:py-3 sm:px-4 sm:py-2 rounded-full hover:text-light-blue text-blue-50 text-lg font-semibold flex items-center border-2 border-blue-50 gap-1"
                        onClick={loadMoreNews}
                    >
                        Load More <img src={loadMore} alt="load more" />
                    </button>
                </div>
            )}
        </div>

        <UpdateForm />
    </div>
  )
}

export default NewsMain
