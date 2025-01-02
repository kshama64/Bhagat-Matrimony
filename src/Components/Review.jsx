import React from "react";
import user from "../assets/user.png"

export default function Review() {
  const reviews = [
    {
      name: "Amit",
      image:user,
      feedback:
        "Thanks to this amazing service, we found each other and started a beautiful journey together. Highly reliable, professional, and worth it!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      image:user,
      feedback:
        "Meeting my soulmate felt effortless with this service. Their dedication and attention to detail made all the difference. Truly grateful!",
      rating: 4.5,
    },
    {
      name: "Paritosh Singh",
      image:user,
      feedback:
        "Finding my partner felt effortless with their help. The team’s professionalism and care made me feel valued. I’m forever grateful for this life-changing experience!",
      rating: 5,
    },
    {
      name: "Nikita",
      image:user,
      feedback:
        "Their commitment to understanding my preferences and finding the perfect match was exceptional. I’ve found my forever partner, and it’s all thanks to them.",
      rating: 4.8,
    },
    {
      name: "Saurabh Singh",
      image:user,
      feedback:
        "A fantastic service that truly understands the importance of a life partner. Their dedication and personalized approach are unparalleled. Highly recommended!",
      rating: 4.9,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={`full-${index}`} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
        {halfStar && (
          <span className="text-yellow-500 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4"
            >
              <path d="M12 2.1c-.5 0-1 .4-1.2 1l-2 4.4-4.8.7c-.6.1-1 .6-1 1.2 0 .3.1.7.4 1l3.4 3.3-.8 4.8c-.1.6.2 1.1.8 1.4.5.3 1.2.3 1.7 0l4.3-2.3 4.3 2.3c.5.3 1.2.3 1.7 0 .6-.3.9-.9.8-1.4l-.8-4.8 3.4-3.3c.3-.3.4-.6.4-1 0-.6-.4-1.1-1-1.2l-4.8-.7-2-4.4c-.3-.5-.7-.9-1.3-.9zm0 2.5 1.5 3.4c.2.4.6.6.9.6l3.7.6-2.7 2.6c-.3.3-.4.6-.3 1l.7 3.7-3.3-1.7c-.4-.2-.8-.2-1.2 0l-3.3 1.7.7-3.7c.1-.4 0-.7-.3-1l-2.7-2.6 3.7-.6c.4-.1.7-.3.9-.6l1.5-3.4z" />
            </svg>
          </span>
        )}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300 text-lg">
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 w-full max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900">
          <span className="text-[#ED3D63]">TESTIMONIALS</span>
        </h1>
        <p className="text-lg text-gray-600">
          Hear from our happy clients and their success stories!
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-32 h-32 rounded-full mb-6 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              {review.name}
            </h3>
            <p className="text-gray-900 text-xl text-center mt-4">
              {review.feedback}
            </p>
            <div className="mt-6">{renderStars(review.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
