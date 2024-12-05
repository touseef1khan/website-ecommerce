import Image from 'next/image';
import React from 'react';

const Arrival = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="w-full mb-10">
            <span id="red" className="border-l-8 border-red-500 text-red-600 p-2">
              Featured
            </span>
            <div className="text-2xl md:text-3xl mt-4 md:mt-8 text-black font-bold">
              New Arrival
            </div>
          </div>

          {/* Images Section */}
          <div className="flex flex-wrap md:-m-2 -m-1 w-full">
            <div className="flex flex-wrap w-1/2 p-2 border-2 border-gray-200 hover:border-blue-600">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/home-pic/NewArrival-1.png" // Updated path
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full border-2 border-gray-200 hover:border-blue-600">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/home-pic/NewArrival-2.png" // Updated path
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 border-2 border-gray-200 hover:border-blue-600">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/home-pic/NewArrival-3.png" // Updated path
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 border-2 border-gray-200 hover:border-blue-600">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/home-pic/NewArrival-4.png" // Updated path
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arrival;