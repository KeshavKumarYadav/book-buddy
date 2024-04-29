import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className=" bg-stone-800">
      <header className="w-5/6 mx-auto flex gap-6 text-slate-100 justify-between items-center py-3 sm:w-[100%] sm:pr-4">
        <div className="flex items-center">
          <img
            src="header_logo.png"
            alt="header logo"
            className="w-12 sm:w-16"
          />
          <h1 className="font-semibold text-2xl sm:text-4xl">
            <a href="">MOPSHOP</a>
          </h1>
        </div>
        <div className="hidden sm:flex sm:flex-nowrap sm:flex-grow">
          <SearchBar />
        </div>

        <div className="flex gap-3 text-xs sm:text-base sm:gap-6">
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
    </div>
  );
};

export default Header;
