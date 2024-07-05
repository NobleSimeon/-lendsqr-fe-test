import React, { useState } from "react";
import Lensqrlogo from "../assets/Lendsqr.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaSearch, FaBell, FaCaretDown, FaArrowRight } from "react-icons/fa";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center justify-between w-1/2">
        <div className="flex items-center gap-2">
          <img src={Lensqrlogo} alt="Logo" />
          <button>
            <span className="sr-only">Show Navigation</span>
            <FaArrowRightFromBracket className="text-gray-600 cursor-pointer md:hidden" />
          </button>
        </div>
        <div className="items-center hidden ml-4 md:flex">
          <input
            type="text"
            placeholder="Search for anything"
            className="px-2 py-1 border rounded-md focus:outline-none focus:ring"
          />
          <FaSearch className="ml-2 text-gray-600" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaSearch
          className="text-gray-600 cursor-pointer md:hidden"
          onClick={toggleSearch}
        />
        {showSearch && (
          <div className="absolute left-0 right-0 p-4 bg-white shadow-md top-16 md:hidden">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring"
            />
          </div>
        )}
        <a href="/docs" className="hidden text-gray-600 md:block">
          Docs
        </a>
        <FaBell className="text-gray-600" />
        <div className="relative">
          <button onClick={toggleDropdown}>
            <figure className="flex items-center gap-1">
              <img
                src="https://i.pravatar.cc/150?u=fake@pravatar.com"
                alt="User Avatar"
                className="rounded-full cursor-pointer size-8"
              />
              <figcaption>
                <p className="hidden sm:block">Adedeji</p>
              </figcaption>
              <FaCaretDown
                aria-hidden="true"
                className="ml-1 text-gray-600 cursor-pointer"
              />
            </figure>
          </button>
          {showDropdown && (
            <div className="absolute right-0 w-48 mt-2 bg-white border rounded-md shadow-lg">
              <div className="px-4 py-2 text-gray-700">
                <p>Adedeji</p>
                <p className="text-sm">Profile</p>
              </div>
              <div className="border-t">
                <a
                  href="/notifications"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Notifications <FaArrowRight className="ml-auto" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
