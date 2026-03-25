import { SignInButton, SignUpButton, useUser } from "@clerk/react"; // <-- แก้ตรงนี้
import { Link } from "react-router"; 
import { Button } from "../ui/button";
import { TextAlignJustify } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import UserIcon from "./UserIcon";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";

const DropdownlistMenu = () => {
  const { isSignedIn } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 rounded-md shadow-sm hover:bg-gray-100">
          <TextAlignJustify size={20} />
          <UserIcon size={24} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg rounded-md">
        <DropdownMenuLabel className="text-gray-700 font-semibold">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link to={item.href} className="text-gray-800 hover:text-blue-500">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Login / Register */}
        {!isSignedIn && (
          <>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <span className="text-gray-800 hover:text-blue-500 cursor-pointer">Login</span>
              </SignInButton>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <span className="text-gray-800 hover:text-blue-500 cursor-pointer">Register</span>
              </SignUpButton>
            </DropdownMenuItem>
          </>
        )}

        {/* Logout */}
        {isSignedIn && (
          <DropdownMenuItem>
            <span className="text-gray-800 hover:text-blue-500 cursor-pointer"><SignOutLink /></span>
              
          </DropdownMenuItem>
        )}

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownlistMenu;