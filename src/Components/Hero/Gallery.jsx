import React from 'react';

export default function Gallery() {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-8 w-full max-w-screen-lg mx-auto">
      {/* Success Stories Section */}
      <div className="flex flex-col items-center md:items-start w-full">
        <h1 className="text-6xl font-bold text-center md:text-left mb-4 text-gray-900">
          Thousands of Success <span className="text-[#ED3D63]">Stories</span>
        </h1>
      </div>
      <div className="w-full">
        <p className="text-lg text-center md:text-left">
          Each success story represents the unique journey of individuals who, with the help of our dedicated matchmaking services, found their true partner. From the moment they connected to the day they said "I do," these stories are a testament to the fact that love knows no boundaries.
        </p>
      </div>

      {/* Gallery Images Section */}
      <div className="mt-12 w-full">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative group">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.8zMubIXkK-DAwsnsE3CxoAHaEK&pid=Api&P=0&h=180"
              alt="Gallery Image 1"
              className="rounded-lg shadow-md w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: 'ellipse(80% 60% at 50% 50%)',
              }}/>
          </div>
          <div className="relative group">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.bqJ3J3gIXfCpD__PevZeDAHaE7&pid=Api&P=0&h=180"
              alt="Gallery Image 2"
              className="rounded-lg shadow-md w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: 'ellipse(80% 60% at 50% 50%)',
              }}/>
          </div>
          <div className="relative group">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.RftNMlmm_CFto6elCRalKwHaE7&pid=Api&P=0&h=180"
              alt="Gallery Image 3"
              className="rounded-lg shadow-md w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: 'ellipse(80% 60% at 50% 50%)',
              }}/>
          </div>
          <div className="relative group">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.zvHR30_1CKEEoLlk9GmjfwHaE8&pid=Api&P=0&h=180"
              alt="Gallery Image 4"
              className="rounded-lg shadow-md w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: 'ellipse(80% 60% at 50% 50%)',
              }}/>
          </div>
          <div className="relative group">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.a1f-8MrMj7Y-yUXpqHkLvgHaEK&pid=Api&P=0&h=180"
              alt="Gallery Image 5"
              className="rounded-lg shadow-md w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: 'ellipse(80% 60% at 50% 50%)',
              }} />
          </div>
          <div className="relative group">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Py7GApxHSAB61GEXUokjpQHaE7&pid=Api&P=0&h=180"
              alt="Gallery Image 6"
              className="rounded-lg shadow-md w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: 'ellipse(80% 60% at 50% 50%)',
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}
