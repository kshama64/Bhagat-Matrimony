import React from "react";
import marrige from "../assets/marrige.jpg"

export default function About() {
  return (
    <>
   <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
  {/* Banner Image */}
  <img
    src="https://www.rxwallpaper.site/wp-content/uploads/contact-us-for-wedding-website-indian-marriage-e-invitation-card.jpg" // Replace with your banner image URL
    alt="Banner"
    className="w-full h-full object-cover"
  />
</div>



    <div className="w-full bg-gradient-to-r from-pink-100 to-white py-12 px-6 md:px-16 text-center rounded-lg shadow-lg">
  <h1 className="text-6xl font-extrabold text-gray-800 mb-6">
    <span className="text-[#ED3D63]">About</span> Us
  </h1>
  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed md:leading-loose font-serif">
  At <strong className="text-gray-900">Forever Together</strong>, we believe every love story is a masterpiece waiting to unfold. Guided by a heartfelt commitment to uniting souls, our platform is meticulously crafted to help you discover your perfect match with trust, ease, and joy.  
  
  With years of expertise, personalized matchmaking, and an extensive network, we ensure your journey from the first connection to a lifelong partnership is as seamless as it is magical.  

  Your dreams, your love, your forever—let us turn them into reality. Together, let’s create a timeless tale of love, trust, and togetherness, because your happiness is our ultimate mission.  

  <span className="font-semibold text-gray-800">
    Let us be a part of your beautiful journey towards forever.
  </span>
</p>

</div>

<div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white rounded-lg shadow-lg">
  {/* Image Section */}
  <div className="w-full md:w-1/2">
    <img 
      src={marrige} 
      alt="Placeholder Image" 
      className="w-full h-auto rounded-lg object-cover mt-5"
    />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-1/2">
    <h2 className="text-4xl font-bold text-pink-600 mb-4 mt-20 text-center">Leader in Matrimonial</h2>
    <p className="text-2xl text-gray-700 leading-relaxed font-serif">
    We are proud to be a pioneering force in the matrimonial industry. With a steadfast commitment to creating meaningful connections, we offer a personalized and seamless matchmaking experience tailored to your unique preferences. Our platform, backed by years of expertise, is designed to help you find your perfect partner with ease, trust, and confidence.

We don’t just bring people together; we build lasting relationships founded on love, respect, and shared values. Join countless others who have found their happily ever after through our trusted services.

At Forever Together, we believe in not just matching hearts but creating lifelong bonds. Let us guide you on your journey to finding love and happiness.
    </p>
  </div>
</div>

<div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden pt-5">
  {/* Banner Image */}
  <img
    src="https://static.vecteezy.com/system/resources/previews/054/332/221/non_2x/pink-influencer-new-year-theme-for-facebook-cover-free-editor_template.jpeg" // Replace with your banner image URL
    alt="Banner"
    className="w-full h-full object-cover"
  />
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white rounded-lg shadow-lg">
  {/* Image Section */}
  <div className="w-full md:w-1/2">
    <img 
      src="https://img.freepik.com/premium-photo/wedding-love-bride-with-groom-garden-marriage-ceremony-celebration-commitment-romantic-partners-trust-bridal-couple-hug-embrace-happy-romance-calm-peace-park_396607-92954.jpg"
      alt="Placeholder Image" 
      className="w-full h-96 rounded-lg object-cover mt-5"
    />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-1/2">
    <h2 className="text-4xl font-semibold text-pink-600 mb-4 text-center mt-5">To find Suitable Matches</h2>
    <p className="text-xl text-gray-700 leading-relaxed font-serif">
    We are proud to be a pioneering force in the matrimonial industry. With a steadfast commitment to creating meaningful connections, we offer a personalized and seamless matchmaking experience tailored to your unique preferences. Our platform, backed by years of expertise, is designed to help you find your perfect partner with ease, trust, and confidence.

We don’t just bring people together; we build lasting relationships founded on love, respect, and shared values. Join countless others who have found their happily ever after through our trusted services.

At Forever Together, we believe in not just matching hearts but creating lifelong bonds. Let us guide you on your journey to finding love and happiness.
    </p>
  </div>
</div>


    </>
  );
}
