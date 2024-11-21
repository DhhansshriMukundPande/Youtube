import React from 'react';
import { useSelector } from 'react-redux';
import { FaHome, FaVideo, FaFire, FaBell, FaMusic, FaGamepad, FaFilm } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='w-48 shadow-lg pt-28 pl-5 fixed top-0 left-0 h-full bg-white z-20'>
      <h1 className='font-bold text-lg mb-2'>Menu</h1>
      <ul className="space-y-2">
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaHome className='mr-2' /> <Link to ="/">Home</Link>
        </li>
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaFire className='mr-2' /> Trending
        </li>
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaVideo className='mr-2' /> Subscriptions
        </li>
      </ul>
      <h1 className='font-bold text-lg mt-4 mb-2'>Explore</h1>
      <ul className="space-y-2">
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaMusic className='mr-2' /> Music
        </li>
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaGamepad className='mr-2' /> Gaming
        </li>
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaFilm className='mr-2' /> Movies
        </li>
      </ul>
      <h1 className='font-bold text-lg mt-4 mb-2'>Library</h1>
      <ul className="space-y-2">
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaBell className='mr-2' /> Watch Later
        </li>
        <li className="flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
          <FaMusic className='mr-2' /> Liked Videos
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

