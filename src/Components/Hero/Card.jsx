import React from "react";
import icon1 from "../../assets/icon1.jpg"; // Correct image import
import icon2 from "../../assets/icon2.jpg"; // Add other image imports
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const features = [
  {
    title: "Protection",
    description:
      "All members are well protected by a sensitive and powerful anti-scam system to deal with any kind of data theft.",
    icon: icon1,  // Image URL
    color: "text-pink-500",
  },
  {
    title: "Membership",
    description:
      "Members can upgrade their membership by selecting any economical plan as per their budget and requirement.",
    icon: icon2,  // Image URL
    color: "text-teal-500",
  },
  {
    title: "Verification",
    description:
      "All members are legitimately verified and confirmed by our relevant service providers with valid identification.",
    icon: icon3,  // Image URL
    color: "text-yellow-500",
  },
  {
    title: "Communication",
    description:
      "Members can get engaged to other profiles via chat, email, sharing pictures or by sending interests.",
    icon: icon4,  // Image URL
    color: "text-blue-500",
  },
];

const App = () => {
  return (
    <div className="bg-white p-6 sm:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <div
              className={`flex justify-center items-center mb-4`}
              aria-hidden="true"
            >
              {/* Display image instead of text-based icon */}
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-900 text-xl">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
