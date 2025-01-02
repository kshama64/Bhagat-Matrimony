import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Form Section */}
      <div className="md:w-1/2 w-full bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form className="space-y-4 w-full max-w-lg bg-white/70 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-8">
  {/* Name Field */}
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
      placeholder="Enter your name"
      required
    />
  </div>

  {/* Email Field */}
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
      placeholder="Enter your email"
      required
    />
  </div>

  {/* Contact Number Field */}
  <div>
    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
      Contact Number
    </label>
    <input
      type="tel"
      id="contact"
      name="contact"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
      placeholder="Enter your contact number"
      required
    />
  </div>

  {/* Subject Field */}
  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
      placeholder="Enter the subject"
      required
    />
  </div>

  {/* Suggestion/Feedback Field */}
  <div>
    <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700">
      Suggestion/Feedback
    </label>
    <textarea
      id="suggestion"
      name="suggestion"
      rows="4"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
      placeholder="Write your suggestion or feedback"
      required
    ></textarea>
  </div>

  {/* I'm Not a Robot Checkbox */}
  <div className="flex items-center">
    <input
      type="checkbox"
      id="robot"
      name="robot"
      className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
      required
    />
    <label htmlFor="robot" className="ml-2 text-sm text-gray-700">
      I'm not a robot
    </label>
  </div>

  {/* Submit Button */}
  <div>
    <button
      type="submit"
      className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
    >
      Submit
    </button>
  </div>
</form>

      </div>

      {/* Contact Information Section */}
      <div className="md:w-1/2 w-full bg-gradient-to-r from-pink-100 to-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col justify-center items-start">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We’d love to hear from you! Whether you have a question, need assistance, or just want to say hello, feel free to reach out to us.
        </p>
        <div className="space-y-4">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            <p className="text-gray-700">123 Love Street, Heartland City, 56789</p>
          </div>
          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-700">+1 (234) 567-890</p>
          </div>
          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-700">support@forevertogether.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
