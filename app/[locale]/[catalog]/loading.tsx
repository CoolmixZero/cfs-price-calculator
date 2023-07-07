const CatalogLoading = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero content */}
      <div className="pt-12 md:pt-16">
        {/* Section header */}
        <div className="flex flex-col items-center">
          <h1
            className="w-[70rem] h-[8rem] bg-gray-700/50  mb-4 animate-pulse"
          >
            
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-transparent mb-8 bg-gray-700/50 animate-pulse"
            >
              Price calculation for buying and selling a car at the best price
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 w-fit">
            {Array.from({length: 12}, (index, i) => (
              <div
              className="
                p-32
                flex
                justify-center
                items-center
                bg-gray-700/50
                animate-pulse
              "
              key={i}
            >
            </div>  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogLoading;