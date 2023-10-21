import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/navbar/Navbar";


const Signup = () => {
  const [ name, setName ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ password, setPassword ] = useState( "" );

  const context = useContext( myContext );
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading( true );
    if ( name === "" || email === "" || password === "" )
    {
      return toast.error( "All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      } );
    }

    try
    {
      const users = await createUserWithEmailAndPassword( auth, email, password );

      // console.log(users)

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection( fireDB, "users" );
      await addDoc( userRef, user );
      toast.success( "SignUp Succesfully Done", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      } );

      setName( "" );
      setEmail( "" );
      setPassword( "" );
      window.location.href = "/login";
      setLoading( false );
    } catch ( error )
    {
      console.log( error );
      toast.error( "SignUp Failed ", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      } );
      setLoading( false );
    }
  };

  return (
    <>
    <Navbar/>
      <div className=" flex justify-center items-center h-screen">
        { loading && <Loader /> }
        <div className=" bg-gray-800 px-12 py-12 rounded-xl">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Signup
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={ name }
              onChange={ ( e ) => setName( e.target.value ) }
              name="name"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="email"
              value={ email }
              onChange={ ( e ) => setEmail( e.target.value ) }
              name="email"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={ password }
              onChange={ ( e ) => setPassword( e.target.value ) }
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={ signup }
              className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
            >
              Signup
            </button>
          </div>
          <div className=" flex justify-center items-center">
            <h2 className="text-white ">
              Have an account{ " " }
              <Link className=" text-red-500 font-bold" to={ "/login" }>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>

  );
};

export default Signup;
