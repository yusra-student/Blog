import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-yellow-50 via-gray-200 to-gray-400 p-4 sm:p-12 pt-24">
      <main className="flex-1 flex flex-col items-center sm:px-12 sm:py-16">
        <div className="text-center sm:text-left mb-8 sm:mb-12 max-w-3xl px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-black mb-6">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center mb-4 sm:mb-6 leading-tight font-light">
          <p>
           Welcome to Healthy Bites Blog, your trusted companion on the journey to better health and nutrition. Our mission is simple: to make healthy living accessible, enjoyable, and sustainable for everyone.
         </p>
        <p>
         We believe that food is more than just fuel—it&apos;s a source of joy, connection, and vitality. Through our carefully crafted content, we aim to inspire you with:
        </p>
        <ul>
       <li>
      <strong>Expert Insights:</strong> Evidence-based articles to help you make informed food choices.
     </li>
      <li>
      <strong>Delicious Recipes:</strong> Wholesome dishes that are as easy to prepare as they are enjoyable to eat.
      </li>
     <li>
      <strong>Lifestyle Tips:</strong> Practical advice to integrate healthy habits into your daily routine.
     </li>
     </ul>
     <p>
     Whether you&apos;re taking your first steps toward a healthier lifestyle or are a seasoned wellness enthusiast, Healthy Bites Blog is here to guide and support you. Together, let&apos;s explore the power of nutrition to transform lives—starting with yours.
      </p>

          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 leading-tight md:leading-relaxed font-light">
          Thank you for being a part of our community. Here’s to a happier, healthier you! 🌿
          </p>
        </div>
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300">
          <Image
            src="/about1.jpeg"
            alt="About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default About;
