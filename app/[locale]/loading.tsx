const CalculatorLoading = () => {
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
            <div
              className="
                justify-center
                items-center
                flex
                overflow-x-hidden
                overflow-y-auto
                relative
                w-[45rem]
                h-[25rem]
                bg-gray-700/50
                animate-pulse
              "
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorLoading;