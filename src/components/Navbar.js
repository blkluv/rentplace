import React from 'react'
import logo from "../assets/rentplace.png";
import { BiWorld} from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineUser} from 'react-icons/ai';
import { BsFillHouseAddFill } from 'react-icons/bs';



const Navbar = () => {
  return (
    <div className="flex justify-between items-center 
    border-b">
        {/* Left */}
        <div className=" h-20 flex">
          <img src={logo} alt="logo" className="object-cover "  />
        </div>
        {/* Middle */}
        <div className="flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
        <input type="search" 
        placeholder="" 
        className="py-2.5 w-[20rem] rounded-full outline-0" />
        <div className="flex justify-between absolute w-full p-12 pl-6 font-semibold text-gray-500"> 
        <button className="">Place</button>
        <button className="border-1 border-x px-6">Time</button>
        <button classname="text-gray-500/50 pl-2">Group Size</button>
        </div>
        <div className="bg-[#89CFF0] p-2 rounded-full mr-2">
        <FiSearch className="text-white"/>
        </div>
        </div>
        {/* Right */}
        <div className="flex items-center pr-3 font-semibold ">
          <p className="text-[17 px] flex">Rent </p>
          <BsFillHouseAddFill />
          <BiWorld className="mx-4" />
          <div className="flex items-center border px-3 py-2 
          rounded-full gap-3 bg-[#89CFF0] text-white font-bold
          shadow-lg shadow-gray-300 hover:bg-[#4682B4]
          duration-100 ease-out">
          <p>Sign in</p>
          <AiOutlineUser className="text-[22px]" />
          </div>
        </div>
    </div>
  )
}

export default Navbar