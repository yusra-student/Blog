'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Post {
  id: string;
  title: string;
  summary: string;
  image: string;
}

const posts: Post[] = [
  {
    id: '1',
    title:  'Healthy Smoothie Recipes',
    summary:  'Try these delicious and nutritious smoothie recipes to kickstart your day.',
    image: '/post1.jpg',
  },
  {
    id: '2',
    title: 'The Benefits of Eating Fresh Vegetables',
    summary: ' Discover the numerous health benefits of incorporating fresh vegetables into your diet.',
    image: '/post2.jpg',
  },
  {
    id: '3',
    title: 'The Power of Nuts and Seeds',
    summary: 'Learn about the health benefits of including nuts and seeds in your diet.',
    image: '/post3.jpg',
  },
  {
    id: '4',
    title: 'Detox with Green Juices',
    summary: 'Find out how green juices can help detoxify your body and boost your health.',
    image: '/post4.jpg',
  },
  {
    id: '5',
    title: 'The Importance of Fruits in Your Diet',
    summary: 'Explore the essential role of fruits in maintaining a balanced diet.',
    image: '/post5.jpg',
  },
  {
    id: '6',
    title: 'Meal Prep Tips for a Healthy Week',
    summary: ' Get tips and tricks for preparing healthy meals for the entire week.',
    image: '/post6.jpg',
  },  
  {
    id: '7',
    title: 'The Power of Natural Foods',
    summary: ' A glass of milk for calcium, a bowl of yogurt for probiotics, and a rainbow of fruits and vegetables packed with essential vitamins and minerals form the foundation of a balanced diet.',
    image: '/post7.jpeg',
  },
  {
    id: '8',
    title: 'Heart-Healthy Foods',
    summary: 'A heart-shaped arrangement of nutrient-packed foods is a beautiful reminder of the role nutrition plays in supporting a healthy heart.',
    image: '/post8.jpeg',
  },
  {
    id: '9',
    title: 'Key Tips For Food Bloggers',
    summary: 'Remember, food blogging is a journey. Be creative, stay authentic, and let your passion guide you. 🌿',
    image: '/post9.jpeg',
  },
];
const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-gray-200 to-gray-400 p-4 sm:p-6 md:p-12 pt-24 md:pt-32">
  <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-black mb-6">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {posts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="bg-orange-100 shadow-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mx-auto w-full flex flex-col"
          >
            <Link href={`/Blog/${post.id}`} className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </Link>
            <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 h-full">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 line-clamp-3">
                {post.summary}
              </p>
              <Link href={`/Blog/${post.id}`} className="text-black font-medium hover:underline transition-all duration-300">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-8 sm:mt-12">
          <button
            onClick={loadMorePosts}
            className="bg-black text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
export default BlogPage;
