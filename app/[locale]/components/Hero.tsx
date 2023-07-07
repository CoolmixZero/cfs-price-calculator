"use client"

interface HeroProps {
  title: string,
  title_description: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  title_description
}) => {
  return (
    <div className="z-10 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero content */}
      <div className="pt-12 md:pt-16">
        {/* Section header */}
        <div className="text-center">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-white text-black"
            data-aos="zoom-y-out"
          >
            Car For Sale Simulator 2023 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              <br />
              {title}
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              {title_description}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;