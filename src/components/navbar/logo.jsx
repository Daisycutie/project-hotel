import { Link } from "react-router";
import {Button} from "../ui/button";

const logo = () => {
  return (
    <Button asChild>
        <Link to="/">Logo</Link>
    </Button>
  )
}

export default logo
