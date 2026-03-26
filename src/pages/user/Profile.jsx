import Buttons from "@/components/Form/Buttons";
import FormInputs from "@/components/Form/FormInputs";
import axios from "axios";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProfile } from "@/api/profile";

//clerk
import { useAuth } from "@clerk/react";


const Profile = () => {

  const { getToken, userId } = useAuth();


  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(profileSchema)
  });
  const { errors, isSubmitting } = formState;

  const Bsubmit = async (data) => {
  try {
    const token = await getToken();

    console.log("TOKEN:", token);   
    console.log("USER ID:", userId);

    if (!token) {
      console.log("No token → user not authenticated");
      return;
    }

    const res = await createProfile(token, data);
    console.log(res.data);

  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        
        
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          My Profile
        </h1>

       
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          
          <form
            onSubmit={handleSubmit(Bsubmit)}
            className="flex flex-col gap-5"
          >
            {/* Inputs */}
            <FormInputs
              register={register}
              name="firstname"
              type="text"
              placeholder="Enter your first name"
              errors={errors}
            />

            <FormInputs
              register={register}
              name="lastname"
              type="text"
              placeholder="Enter your last name"
              errors={errors}
            />

            {/* Button */}
            <div className="pt-1">
              <Buttons 
                text={isSubmitting ? "Saving..." : "Create Profile"}
                isPending={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;