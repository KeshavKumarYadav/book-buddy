import { useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <div className=" bg-stone-800">
      {searchClicked && (
        <div className="flex items-center justify-center gap-6 h-[62.71px]">
          <button
            className="w-8 h-8 rounded-full fa fa-arrow-left text-white hover:bg-stone-600"
            onClick={() => setSearchClicked(false)}
          ></button>
          <div>
            <SearchBar />
          </div>
        </div>
      )}
      {searchClicked || (
        <header className="w-5/6 mx-auto flex gap-6 text-slate-100 justify-between items-center py-3 sm:w-[100%] sm:pr-4">
          <div className="flex items-center">
            <img
              src="header_logo.png"
              alt="header logo"
              className="w-12 sm:w-16"
            />
            <h1 className="font-semibold text-2xl sm:text-2xl md:text-4xl">
              <a href="">MOPSHOP</a>
            </h1>
          </div>
          <div className="hidden sm:flex sm:flex-nowrap sm:flex-grow justify-center">
            <SearchBar />
          </div>

          <div className="flex gap-3 items-center text-sm sm:text-base sm:gap-6">
            <button
              className="text-sm sm:hidden fa fa-search hover:bg-stone-600 rounded-full w-7 h-7"
              onClick={() => setSearchClicked(true)}
            ></button>
            <h2>
              <a href="">
                <span className="fa fa-shopping-cart"></span> CART
              </a>
            </h2>
            <h2>
              <a href="">
                <span className="fa fa-user"></span> LOGIN
              </a>
            </h2>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
