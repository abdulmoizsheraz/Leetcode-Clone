import React,{useState} from 'react'
import {AiFillCodeSandboxCircle} from "react-icons/ai";
import {MdPersonPin} from "react-icons/md"
import Link from 'next/link';
import {auth} from "../firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from './Buttons/Logout';
import Timer from './Timer';

const Navbar = () => {
  const [user]=useAuthState(auth)
  const [signup,setsign]=useState(false)
  const [login,setlogin]=useState(false)
  
  return (
    <>
        <nav className="nav h-14 flex items-center ">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href={"/"} className="text-2xl font-bold text-white flex items-center">EATC<AiFillCodeSandboxCircle/>DE</Link>
              </div>
              <div className="flex items-center">
              
              </div>
              <div className="ml-4 mr-11 sm:ml-6">
             { !user ? <button className=" text-black px-4 py-1 rounded-sm border-solid border-2 border-black "><Link href={'/Login'}>SignIn</Link></button>: <span className='flex flex-col items-center justify-center'><Logout/><MdPersonPin size={50}/></span>}
            {/* <Timer/> */}
              </div>
            </div>
          </div>
        </nav>

    </>
      );
    };


  export default Navbar;