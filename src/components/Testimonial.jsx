import React from "react";
import { useContext } from "react";
import myContext from "../context/data/myContext";

const Testimonial = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-blue-700">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-blue-300 bg-gray-100"
                  src="https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg?w=360&t=st=1697784792~exp=1697785392~hmac=004699ff419aac9c2fb55edbab9593aa7b3c668b7209fa78430059d1a02d6e51"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "#4b5563" }}
                  className="leading-relaxed"
                >
                  "I recently tried the dry fruits from NutIQ Store store, and I must say I'm thoroughly impressed with the quality. Their almonds and cashews are exceptionally fresh and crunchy, and the packaging is top-notch. I'll definitely be a repeat customer!"
                </p>
                <span className="inline-block h-1 w-10 rounded mt-6 mb-4" 
                style={{
                  backgroundColor: mode === "dark" ? "#db2777" : "#2563eb",
                  color: mode === "dark" ? "white" : "",
                }}/>
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "#2563eb" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Rohit Jain
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-800"
                >
                 Delicious Healthy Snack
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-blue-300 bg-gray-100"
                  src="https://img.freepik.com/free-photo/beautiful-woman-standing-against-yellow-wall_23-2148204587.jpg?w=740&t=st=1697784712~exp=1697785312~hmac=4c764e062ee073de1325a8b1c05a66e6285718b491ca01bc586f17a10a2593ed"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "#4b5563" }}
                  className="leading-relaxed"
                >
                  "I can't get enough of NutIQ Store store's products. The pistachios are so flavorful, and the raisins are plump and juicy. Their commitment to quality is evident in every bite. I highly recommend their products for anyone looking for premium dry fruits."
                </p>
                <span className="inline-block h-1 w-10 rounded mt-6 mb-4" 
                style={{
                  backgroundColor: mode === "dark" ? "#db2777" : "#2563eb",
                  color: mode === "dark" ? "white" : "",
                }}/>
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "#2563eb" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Riya Singh
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-800"
                >
                   Premium Customer
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-blue-300 bg-gray-100"
                  src="https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?w=1060&t=st=1697784610~exp=1697785210~hmac=5e435ecd585f8c514b4874611b00fac2e135ff811bc849edd6e44ee0c7dce3c2"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "#4b5563" }}
                  className="leading-relaxed"
                >
                  "NutIQ Store store is my go-to for high-quality dry fruits. Their selection of products is outstanding, and the taste is consistently excellent. The apricots are a personal favorite, and I appreciate that I can trust their products to be fresh and delicious every time."
                </p>
                <span className="inline-block h-1 w-10 rounded  mt-6 mb-4" 
                style={{
                  backgroundColor: mode === "dark" ? "#db2777" : "#2563eb",
                  color: mode === "dark" ? "white" : "",
                }}/>
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "#2563eb" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Suraj Maurya
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-800"
                >
                  Special Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
