import { useForm } from "react-hook-form";
import FormInputs from "../../components/Form/FormInputs";
import TextAreaInputs from "@/components/Form/TextAreaInputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schemas";
import Buttons from "@/components/Form/Buttons";
import CategoryInput from "@/components/Form/CategoryInput";

const Camping = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const { errors, isSubmitting } = formState;

  const Bsubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-4xl">
        
        
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6 capitalize mt-12">
          Create Camping
        </h1>

        
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8">
          
          <form
            onSubmit={handleSubmit(Bsubmit)}
            className="flex flex-col gap-6"
          >

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInputs
                register={register}
                name="name"
                type="text"
                placeholder="Camping / Hotel name"
                errors={errors}
              />

              <FormInputs
                register={register}
                name="price"
                type="number"
                placeholder="Price per night"
                errors={errors}
              />
            </div>

            
            <TextAreaInputs
              register={register}
              name="description"
              rows={5}
              placeholder="Write details about this place..."
              errors={errors}
            />

           
            <TextAreaInputs
              register={register}
              name="address"
              rows={3}
              placeholder="Full address"
              errors={errors}
            />

            
            <CategoryInput
              name="category"
              register={register}
              setValue={setValue}
            />

            
              <div className="pt-2">
                <Buttons
                  text={isSubmitting ? "Creating..." : "Create Camping"}
                  isPending={isSubmitting}
                />
              
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Camping;