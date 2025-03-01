import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BlogPage.css"; // Custom CSS for animations and styles

const BlogData = [
  {
    id: 1,
    title: "Delicious Pizza Recipes",
    image:
      "https://static.vecteezy.com/system/resources/previews/053/522/915/non_2x/a-collection-of-spices-and-herbs-falling-onto-a-wooden-board-photo.jpeg",
    description: "Learn how to make the most mouth-watering pizzas at home.",
    date: "March 1, 2025",
  },
  {
    id: 2,
    title: "Healthy Smoothies",
    image:
      "https://oversigning.com/wp-content/uploads/2025/01/Foodvideography-2.webp",
    description: "Discover smoothie recipes packed with vitamins and energy.",
    date: "February 25, 2025",
  },
  {
    id: 3,
    title: "Quick & Easy Desserts",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/048/631/676/small/pizza-ingredients-suspended-in-air-with-dynamic-splashes-free-photo.jpg",
    description: "Indulge in simple and tasty desserts for any occasion.",
    date: "February 20, 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="header">
        <h1>Our Latest Blog Posts</h1>
        <p>Explore our latest articles on food, recipes, and cooking tips.</p>
      </div>

      <div className="blog-posts">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {BlogData.map((post) => (
            <SwiperSlide key={post.id} className="blog-card">
              <div className="blog-card-content">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-info">
                  <h3>{post.title}</h3>
                  <p className="date">{post.date}</p>
                  <p>{post.description}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogPage;
