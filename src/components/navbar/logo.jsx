import { Link } from "react-router";
import { Button } from "../ui/button";
import logoImg from "../../assets/logo.jpg"; 

const Logo = () => {
  return (
    <Button asChild>
      <Link to="/" className="flex items-center">
        <img src={logoImg} alt="Logo" className="h-10 w-auto" />
         {/* <span className="ml-2 font-extrabold text-lg text-gray-400 ">Agody</span> */}
      </Link>
    </Button>
  );
};

export default Logo;