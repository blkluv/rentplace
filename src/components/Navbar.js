import React from 'react'
import logo from "../assets/rentplace.png";
import { BiWorld} from 'react-icons/bi';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { AiOutlineUser} from 'react-icons/ai';
// import { FiSearch} from 'react-icons/ai';


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
        <div className="flex items-center pr-3">
          <p>Rent House</p>
          <BiWorld />
          <div className="flex items-center">
          <FiMenu />
          <AiOutlineUser />
          </div>
        </div>
    </div>
  )
}

export default Navbar