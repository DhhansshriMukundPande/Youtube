import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import {cacheResults} from "../utils/searchSlice"




const Header = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([])
  const searchCache = useSelector((store)=>store.search)
 
useEffect (()=>{


 const timer = setTimeout(()=> {
if(searchCache[searchQuery]){
  setSuggestions(searchCache[searchQuery]);
}
else{
  getSearchSuggestions()
}
 
},200);

 return ()=>{
  clearTimeout(timer);
 }



},[searchQuery]);

const getSearchSuggestions = async ()=>{
  console.log(searchQuery)
 
  const data = await fetch( YOUTUBE_SEARCH_API +searchQuery);
  const json =await data.json();
  setSuggestions(json[1]);
 

  dispatch(cacheResults(
    {[searchQuery ]:json[1],
  }));
}



  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full bg-white shadow-lg top-0 fixed z-50">
      <div className="grid grid-flow-col p-2 items-center max-w-screen-xl mx-auto">
        {/* Menu Icon and Logo */}
        <div className="flex items-center col-span-1">
          <button onClick={toggleMenuHandler} className="focus:outline-none">
            <img
              className="w-12 h-12 cursor-pointer"
              alt="menu"
              src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            />
          </button>
          <a href="/">
            <img
              className="w-32 ml-5"
              alt="logo"
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="col-span-10 flex justify-center relative">
  <form className="flex w-full max-w-xl"> 
    {/* Input field */}
    <input
      className="flex-grow border border-gray-400 shadow-lg rounded-l-full py-1 px-4 text-center"
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    {/* Search Button */}
    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-r-full">
      <img
        alt="search-icon"
        className="w-6 h-6"
        src="https://cdn1.iconfinder.com/data/icons/web-and-mobile-ui-outline-icon-kit/512/UI_Icons_2-01-512.png"
      />
    </button>
  </form>

  {/* Suggestion List */}
  <div className="absolute top-full left-40 w-full max-w-xl bg-white border border-gray-300 rounded-lg shadow-lg z-10">
    <ul className="divide-y divide-gray-200">
      {suggestions.map((s, index) => (
        <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
          {s}
        </li>
      ))}
    </ul>
  </div>
</div>


        {/* User Icon */}
        <div className="flex justify-end col-span-1">
          <img
            className="w-12 h-12"
            alt="user-icon"
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

