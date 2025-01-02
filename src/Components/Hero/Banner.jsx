import React from "react";
import Card from "./Card";
import banner from "../../assets/marriage.jpeg";
import Gallery from "./Gallery";

export default function Banner() {
  return (
    <>
      <div
        className="pt-32 bg-gray-100 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${banner})`, // Corrected background image URL
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 relative z-10">
          {/* Left Side Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Welcome to a place where love and commitment meet where your forever begins.
            </h1>
            <p className="text-lg text-white">
              A marriage is not just the joining of two people, but the intertwining of two souls.
            </p>
            <button className="bg-[#ED3D63] text-white py-3 px-6 rounded-lg hover:bg-red-500">
              Learn More
            </button>
          </div>

          {/* Right Side Form with Transparent Background */}
          <div className="mt-10 md:mt-0 md:w-96 bg-white bg-opacity-70 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ED3D63] text-white py-3 rounded-lg hover:bg-red-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Card />
      <Gallery/>
    </>
  );
}
