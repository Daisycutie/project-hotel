import React from "react";
import Logo from "./logo";
import Searchbar from "./Searchbar";
import DropdownlistMenu from "./DropdownlistMenu";

const Navbar = () => {
  return (
 <nav className="bg-white shadow-md w-full">
  <div className="max-w-7xl mx-auto flex items-center py-4 px-6">
    
    {/* Logo */}
    <Logo />

    {/* Search */}
    <div className="flex-1 flex justify-center px-4">
      <div className="w-full max-w-xl">
        <Searchbar />
      </div>
    </div>

  <div className="justify-center px-4">
    {/* Profile */}
    <DropdownlistMenu />
  </div>
    

  </div>
</nav>
  );
};

export default Navbar;