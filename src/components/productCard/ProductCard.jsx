import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";

const ProductCard = () => {
  const context = useContext(myContext);
  const { mode, product, searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,} = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems)

  // add to cart
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to Cart", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  //---------------------storing in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-blue-600 rounded"
           style={{ backgroundColor: mode === "dark" ? "#db2777" : "" }}></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {product
            .filter((obj) => obj.title.toLowerCase().includes(searchkey))
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .slice(0, 8)
            .map((item, index) => {
              const { title, price, description, imageUrl, id } = item;
              return (
                <div key={index} className="p-4 md:w-1/4  drop-shadow-lg "
                onClick={() =>
                  (window.location.href = `/productinfo/${id}`)
                }>
                  <div
                    className="h-full border-2 hover:shadow-blue-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-blue-300 border-opacity-60 rounded-2xl overflow-hidden hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55) " : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                    onClick={() =>
                      (window.location.href = `/productinfo/${id}`)
                    }
                  >
                    <div
                      className="flex justify-center cursor-pointer"
                    >
                      <img
                        className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                        src={imageUrl}
                        alt="product images "
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-blue-700 mb-1"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        NutIQ Store
                      </h2>
                      <h1
                        className="title-font text-lg font-medium text-gray-900 mb-3"
                      style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {title.substring(0,49)}
                      </h1>
                      {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                      <p
                        className="leading-relaxed mb-3"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        ₹ {price}
                      </p>
                      <div className=" flex justify-center">
                        <button
                          onClick={() => addCart(item)}
                          type="button"
                          className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                          style={{ backgroundColor: mode === "dark" ? "#db2777" : "" }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
