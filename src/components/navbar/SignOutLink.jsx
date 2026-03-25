import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner"; 
import { SignOutButton } from "@clerk/react"; // <-- import ถูกต้อง

const SignOutLink = () => {
  const handleLogout = () => {
    toast.success("Logout Successfully!!!", { position: "bottom-left"});
  };

  return (
    <>
      <SignOutButton redirectUrl="/">
        <Button 
        className="font-normal px-0"
          onClick={handleLogout}>
          Logout
        </Button>
      </SignOutButton>
      <Toaster /> {/* แสดง toast */}
    </>
  );
};

export default SignOutLink;