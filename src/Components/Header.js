import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
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
        <div className="col-span-10 flex justify-center">
          <form className="flex w-full max-w-xl"> {/* Make search bar responsive */}
            <input
              className="flex-grow border border-gray-400 shadow-lg rounded-l-full py-1 px-4 text-center"
              type="text"
              placeholder="Search"
            />
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-r-full">
              <img
                alt="search-icon"
                className="w-6 h-6"
                src="https://cdn1.iconfinder.com/data/icons/web-and-mobile-ui-outline-icon-kit/512/UI_Icons_2-01-512.png"
              />
            </button>
          </form>
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

