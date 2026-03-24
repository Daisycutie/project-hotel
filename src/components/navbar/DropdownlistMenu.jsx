import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import { links } from "@/utils/links";

import {  TextAlignJustify } from "lucide-react";
import { Link } from "react-router";

const DropdownlistMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className=" flex items-center gap-2">
          <TextAlignJustify />
          <UserIcon  />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link to={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownlistMenu;