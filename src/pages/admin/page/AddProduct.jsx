import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout"

const AddProduct = () => {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;

  // Initialize the products object with default values (not null)
  if (products.title === null) {
    setProducts({ ...products, title: "" });
  }
  if (products.price === null) {
    setProducts({ ...products, price: "" });
  }
  if (products.imageUrl === null) {
    setProducts({ ...products, imageUrl: "" });
  }
  if (products.category === null) {
    setProducts({ ...products, category: "" });
  }
  if (products.description === null) {
    setProducts({ ...products, description: "" });
  }

  return (
    <>
      <Layout>
        <div>
          <div className=" flex justify-center items-center h-screen">
            <div className=" bg-gray-800 px-10 py-10 rounded-xl">
              <div className="">
                <h1 className="text-center text-white text-xl mb-4 font-bold">
                  Add Product
                </h1>
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  value={products.title}
                  onChange={(e) =>
                    setProducts({ ...products, title: e.target.value })
                  }
                  className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-white placeholder:text-gray-100 outline-none"
                  placeholder="Product title"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="price"
                  value={products.price}
                  onChange={(e) =>
                    setProducts({ ...products, price: e.target.value })
                  }
                  className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-white placeholder:text-gray-100 outline-none"
                  placeholder="Product price"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={products.imageUrl}
                  name="imageurl"
                  onChange={(e) =>
                    setProducts({ ...products, imageUrl: e.target.value })
                  }
                  className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-white placeholder:text-gray-100 outline-none"
                  placeholder="Product imageUrl"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={products.category}
                  name="category"
                  onChange={(e) =>
                    setProducts({ ...products, category: e.target.value })
                  }
                  className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-white placeholder:text-gray-100 outline-none"
                  placeholder="Product category"
                />
              </div>
              <div>
                <textarea
                  cols="30"
                  rows="6"
                  name="description"
                  value={products.description}
                  onChange={(e) =>
                    setProducts({ ...products, description: e.target.value })
                  }
                  className=" bg-gray-500 mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-white placeholder:text-gray-100 outline-none"
                  placeholder="Product Description"
                ></textarea>
              </div>
              <div className=" flex justify-center mb-3">
                <button
                  onClick={addProduct}
                  className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddProduct;
