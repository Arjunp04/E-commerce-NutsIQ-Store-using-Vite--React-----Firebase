import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/herosection/HeroSection";
import Filter from "../components/filter/Filter";
import ProductCard from "../components/productCard/ProductCard";
import Track from "../components/track/Track";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-4 mb-4">
        <Link to={ "/allproducts" }>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
