/* eslint-disable react/no-unknown-property */

const Hero = () => {
    const siteWrapper = 'w-[83%]'
  return (
    <div className="bg-blue-50 py-8 md:py-16 h-auto md:h-[80%] sm:h-[100%] pb-20"> 
        <div className={`${siteWrapper} mx-auto`}>
            <div className="flex flex-col mb-4">
                <div className="bg-[#8FCBD2] px-2 py-1 md:w-[47.5%] sm:w-[87%]"></div>
                <h1 className="decoration-[#b4e4ea] md:w-[60%] sm:w-[100%] text-[#8FCBD2] text-3xl md:text-6xl bg-clip-text bg-cover bg-[url('assets/heroBackgroundImage.png')]">
                    HARNESSING THE POWER OF NATURE
                </h1>  
            </div>
        </div>

        <div className="flex relative py-8 justify-items-end">
            <iframe
                className="top-2 flex left-2/4 pl-4 ml-auto" 
                width="987" 
                height="444" 
                src="https://www.youtube.com/embed/_r-nPqWGG6c?si=pex27Ra9MfrwMYj-" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>
    </div>

  )
}

export default Hero;