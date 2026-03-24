import React from "react";
import Logo from "./logo";
import Searchbar from "./Searchbar";

import DropdownlistMenu from "./DropdownlistMenu";
const Navbar = () => {
  return (
    <nav className=" bg-white shadow-md">
      <div className=" max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
        
        {/* Logo */}
        <Logo />

        {/* Search */}
        <Searchbar />

        {/* Profile */}
        <DropdownlistMenu />

      </div>
    </nav>
  );
};

export default Navbar;