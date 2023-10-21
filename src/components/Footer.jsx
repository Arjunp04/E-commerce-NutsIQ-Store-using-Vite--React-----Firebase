import React, { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../context/data/myContext";


const Footer = () => {
  const context = useContext( myContext );
  const { mode } = context;
  return (

    <div>

      <footer
        className="text-gray-600 body-font bg-gray-300 "
        style={ {
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        } }
      >
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-bold text-gray-900 tracking-widest text-base mb-3"
                style={ { color: mode === "dark" ? "white" : "" } }
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-1">
                <li>
                  <Link to={ "/" }
                    className="text-gray-700 hover:text-blue-600"
                    style={ { color: mode === "dark" ? "white" : "" } }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={ "/order" }
                    className="text-gray-700 hover:text-blue-600"
                    style={ { color: mode === "dark" ? "white" : "" } }
                  >
                    Order
                  </Link>
                </li>
                <li>
                  <Link to={ "/cart" }
                    className="text-gray-700 hover:text-blue-600"
                    style={ { color: mode === "dark" ? "white" : "" } }
                  >
                    Cart
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-bold text-gray-900 tracking-widest text-base mb-3 uppercase"
                style={ { color: mode === "dark" ? "white" : "" } }
              >
                Customer Service
              </h2>
              <nav className="list-none mb-1">
                <li>
                  <Link
                    to={ "/returnpolicy" }
                    className="text-gray-700 hover:text-blue-600"
                    style={ { color: mode === "dark" ? "white" : "" } }
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={ "/about" }
                    className="text-gray-700 hover:text-blue-600"
                    style={ { color: mode === "dark" ? "white" : "" } }
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={ "/contact" }
                    className="text-gray-700 hover:text-blue-600"
                    style={ { color: mode === "dark" ? "white" : "" } }
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-bold text-gray-900 tracking-widest text-base mb-3"
                style={ { color: mode === "dark" ? "white" : "" } }
              >
                Services
              </h2>
              <nav className="list-none mb-1">
                <li>
                  <Link
                    to={ "/privacypolicy" }
                    className="text-gray-700 hover:text-blue-600"
                    style={ { color: mode === "dark" ? "white" : "" } }
                  >
                    Privacy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="payment services acceptable cards image" />
            </div>
          </div>
        </div>

        <div
          className="bg-blue-600"
          style={ {
            backgroundColor: mode === "dark" ? "#db2777" : "",
            color: mode === "dark" ? "white" : "",
          } }
        >
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to={ "/" } className="flex">
              <div className="flex ">
                <h1
                  className=" text-2xl font-bold text-white  px-2 py-1 rounded hover:text-blue-100"
                  style={ { color: mode === "dark" ? "white" : "" } }
                >
                  NutIQ Store
                </h1>
              </div>
            </Link>
            <p
              className="text-base text-yellow-100 sm:ml-6 sm:mt-0 mt-4"
              style={ { color: mode === "dark" ? "white" : "" } }
            >
              © 2023 NutIQ Store —
              <a
                href="/"
                rel="noopener noreferrer"
                className="text-yellow-100 ml-1 hover:text-yellow-300"
                target="_blank"
                style={ { color: mode === "dark" ? "white" : "" } }
              >
                www.nutiqstore.com
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-white hover:text-blue-900">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={ 2 }
                  className="w-5 h-5"
                  viewBox="0 0 24 24"

                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-white hover:text-blue-200">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={ 2 }
                  className="w-5 h-5"
                  viewBox="0 0 24 24"

                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-white hover:text-red-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={ 2 }
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={ 20 } height={ 20 } x={ 2 } y={ 2 } rx={ 5 } ry={ 5 } />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-white hover:text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={ 2 }
                  className="w-5 h-5"
                  viewBox="0 0 27 27"
                >
                  <path d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z" />
                </svg>


              </a>
            </span>
          </div>
        </div>
      </footer >

    </div>

  );
}

export default Footer