'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const posts = [
    {
        id: '1',
        title:  'Healthy Smoothie Recipes',
        summary:  'Try these delicious and nutritious smoothie recipes to kickstart your day.',
        content: `Smoothies are a quick, delicious, and nutritious way to fuel your body with essential vitamins and minerals. By blending fruits, vegetables, and superfoods, you can create a variety of smoothies that cater to your health needs—whether it’s boosting energy, aiding digestion, or improving skin health.

From green detox smoothies with spinach and avocado to fruity blends with berries and bananas, the possibilities are endless. Add ingredients like chia seeds, almond butter, or protein powder for an extra nutritional punch. Smoothies are perfect for breakfast, a post-workout snack, or a refreshing mid-day treat!

Would you like to include a few simple smoothie recipes in your post? 🍓🥑🍌`,
    },
    {
        id: '2',
        title: 'The Benefits of Eating Fresh Vegetables',
        summary: ' Discover the numerous health benefits of incorporating fresh vegetables into your diet.',
        content: `Fresh vegetables are a cornerstone of a healthy diet, offering a wide range of vitamins, minerals, and antioxidants essential for your overall well-being. Eating vegetables regularly supports digestion, boosts immunity, improves heart health, and helps maintain a healthy weight. Vegetables like spinach, broccoli, carrots, and bell peppers are low in calories but packed with nutrients, making them a perfect addition to every meal.

     Incorporating fresh, colorful veggies into your diet ensures you’re getting a variety of nutrients to fuel your body and mind. Whether steamed, roasted, or eaten raw, vegetables are key to living a vibrant and healthy life! 🥦🥕

      Would you like to pair this with a vegetable-focused recipe or image?`,
    },
    {
        id: '3',
        title: 'The Power of Nuts and Seeds',
        summary: 'Learn about the health benefits of including nuts and seeds in your diet.',
        content: `Nuts and seeds are tiny nutritional powerhouses packed with essential vitamins, minerals, healthy fats, and antioxidants. They are excellent for heart health, boosting brain function, and providing sustained energy. Including a variety of nuts like almonds, walnuts, and cashews, along with seeds such as chia, flax, and sunflower seeds, can enhance your diet with fiber, protein, and omega-3 fatty acids.

        These versatile superfoods can be enjoyed as snacks, added to smoothies, or sprinkled over salads for an extra crunch and nutritional boost. A handful a day is all you need to reap their amazing health benefits! 🌰✨

        Would you like to add a quick recipe using nuts and seeds?
        `,
    },
    {
        id: '4',
        title: 'Detox with Green Juices',
        summary: 'Find out how green juices can help detoxify your body and boost your health.',
        content: `Green juices are a fantastic way to cleanse your body and nourish it with essential nutrients. Made with fresh leafy greens, fruits, and hydrating vegetables, they are packed with vitamins, minerals, and antioxidants. These juices help flush out toxins, boost your energy levels, support digestion, and even strengthen your immune system. Whether you’re starting your day or looking for a healthy mid-day boost, green juices are a simple and delicious way to refresh your body and mind.

        Experiment with ingredients like spinach, kale, cucumber, green apple, and a hint of ginger to create your perfect detox blend! 🌿🍏

        Would you like to include a simple green juice recipe in this post? `,
    },
    {
        id: '5',
        title: 'The Importance of Fruits in Your Diet',
        summary: 'Explore the essential role of fruits in maintaining a balanced diet.',
        content: ` Fruits are essential for a balanced diet, offering numerous health benefits:

        Packed with Nutrients: Rich in vitamins, minerals, and fiber.
        Boosts Immunity: Citrus fruits strengthen your body’s defenses.
        Improves Digestion: High-fiber fruits aid in healthy digestion.
        Heart Health: Bananas and berries help regulate blood pressure.
        Natural Energy: A perfect source of quick, healthy energy.
        Weight Management: Low-calorie and filling for appetite control.
        Keeps You Hydrated: Water-rich fruits refresh and hydrate.
        Include a variety of fruits daily to stay healthy and energized. Which fruit is your favorite? Share in the comments! 🍎🍓🍊
        `,
    },
    {
        id: '6',
        title: 'Meal Prep Tips for a Healthy Week',
        summary: ' Get tips and tricks for preparing healthy meals for the entire week.',
        content: `Meal prepping is the key to a stress-free and healthy week! Here’s how to get started:

        Plan Your Meals: Choose simple recipes with overlapping ingredients.
        Grocery Shop Smart: Stick to your list and buy seasonal produce.
        Batch Cook: Prepare staples like grains, proteins, and roasted veggies.
        Portion Your Meals: Use labeled containers for easy grab-and-go options.
        Prep Snacks: Keep fruits, nuts, and yogurt ready for quick bites.
        Store Properly: Use airtight containers and freeze meals for later.
        Stay Flexible: Mix and match ingredients to keep meals exciting.
        Meal prep saves time, reduces stress, and keeps you on track with healthy eating. Start small and build your routine! 🌿

        Would you like me to add more customization to this post?`,
    },
    {
        id: '7',
        title: 'The Power of Natural Foods',
        summary: ' A glass of milk for calcium, a bowl of yogurt for probiotics, and a rainbow of fruits and vegetables packed with essential vitamins and minerals form the foundation of a balanced diet.',
        content: `There's nothing quite like the goodness of nature to fuel your body and mind. The vibrant colors of fresh fruits, vegetables, and wholesome ingredients remind us that nutrition can be both beautiful and delicious.

        This image perfectly captures the essence of healthy living—nourishment straight from the earth. A glass of milk for calcium, a bowl of yogurt for probiotics, and a rainbow of fruits and vegetables packed with essential vitamins and minerals form the foundation of a balanced diet.

        Embrace the power of natural, whole foods to energize your day and uplift your well-being. Whether you're snacking on strawberries, blending a smoothie, or preparing a hearty salad, every bite brings you closer to a healthier, happier you.

        Tip: Start small by incorporating more colorful fruits and vegetables into your meals. It’s a simple step that makes a big impact!

        How do you add natural foods to your daily diet? Let us know in the comments below! 🌿✨`,
    },
    {
        id: '8',
        title: 'Heart-Healthy Foods',
        summary: 'A heart-shaped arrangement of nutrient-packed foods is a beautiful reminder of the role nutrition plays in supporting a healthy heart.',
        content: `A heart-shaped arrangement of nutrient-packed foods is a beautiful reminder of the role nutrition plays in supporting a healthy heart. From protein-rich salmon and lean chicken to fiber-filled lentils, nuts, and avocado, every ingredient here contributes to your overall well-being.

        Avocado & Nuts: Rich in healthy fats that lower bad cholesterol and improve heart health.
        Salmon: Packed with omega-3 fatty acids, essential for reducing inflammation and supporting cardiovascular function.
        Lentils & Seeds: Loaded with fiber, which helps regulate blood pressure and maintain a healthy weight.
        Fresh Vegetables & Fruits: Full of antioxidants, vitamins, and minerals to keep your body strong and vibrant.
        Incorporating these foods into your diet is a delicious way to show love to your heart. Whether it's a fresh salad, a hearty soup, or a simple snack, the choices you make today can protect your heart for years to come.

        Challenge: Try adding at least one of these heart-healthy ingredients to your meals this week and feel the difference!

        How do you stay mindful of heart health in your nutrition? Share your tips in the comments below! ❤️🍊`,
    },
    {
        id: '9',
        title: 'Key Tips For Food Bloggers',
        summary: 'Remember, food blogging is a journey. Be creative, stay authentic, and let your passion guide you. 🌿',
        content: `Food blogging is more than just sharing recipes—it's about inspiring, connecting, and creating. Here's how to make your food blog stand out:

        Know Your Audience: Understand what your readers are looking for, whether it’s quick meals, healthy eating tips, or gourmet recipes.
        Tell a Story: Share personal anecdotes or behind-the-scenes moments to make your blog relatable.
        Create Eye-Catching Visuals: Beautiful food photos can draw readers in. Use natural light and a clean setup, like in this image, to make your dishes shine.
        Experiment with Content: Add videos, step-by-step guides, or quick tips to keep your blog fresh and engaging.
        Consistency is Key: Post regularly and maintain a consistent voice and style.

        What’s the first thing you’d share on your food blog? Let us know in the comments! 😊`,
    },
];

const PostPage = () => {
    const { id } = useParams(); 
    const post = posts.find((p) => p.id === id); 

    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');
    useEffect(() => {
        const storedComments = localStorage.getItem(`comments-${id}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [id]);

    const addComment = () => {
        if (newComment.trim()) {
            const updatedComments = [...comments, newComment.trim()];
            setComments(updatedComments);
            setNewComment('');
            localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
        }
    };

    if (!post) {
        return <div className="text-center py-10 text-lg text-red-500">Post not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-white via-gray-200 to-gray-400 p-6 sm:p-12 pt-16 md:pt-24">
            <div className="container mx-auto mt-8 md:mt-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{post.title}</h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">{post.content}</p>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mt-8 sm:mt-10">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

                    <div className="mb-6">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="border border-gray-300 p-3 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            onClick={addComment}
                            className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-600 transition-colors duration-300"
                        >
                            Add Comment
                        </button>
                    </div>
                    <div>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="border-t border-gray-200 pt-2">
                                    <p className="text-gray-700">{comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
