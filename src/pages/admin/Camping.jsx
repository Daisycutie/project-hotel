import { useForm } from "react-hook-form";
import FormInputs from "../../components/Form/FormInputs";
import TextAreaInputs from "@/components/Form/TextAreaInputs";
import { zodResolver } from '@hookform/resolvers/zod';
import { campingSchema } from "@/utils/schemas";
import Buttons from "@/components/Form/Buttons";
import CategoryInput from "@/components/Form/CategoryInput";

const Camping = () => {

  const { register, handleSubmit, formState,setValue } = useForm({
    resolver: zodResolver(campingSchema)
  });

  const { errors, isSubmitting } = formState;

  const Bsubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <section>
      <h1 className='capitalize text-center text-2xl font-semibold  py-4'>
        create camping
      </h1>

      <div className='border p-8 rounded-md'>
        <form
          onSubmit={handleSubmit(Bsubmit)}
          className="flex flex-col gap-4"
        >

          <FormInputs  
            register={register} 
            name="name" 
            type="text"
            placeholder="Input your name hotel"
            errors={errors}
          />

          <FormInputs  
            register={register} 
            name="price" 
            type="number"
            placeholder="Input your price"
            errors={errors}
          />

          <TextAreaInputs  
            register={register} 
            name="description" 
            rows={5}
            placeholder="Input your description"
            errors={errors}
          />

          <TextAreaInputs
            register={register} 
            name="address" 
            rows={3}
            placeholder="Input your address"
            errors={errors}
          />

          <CategoryInput  
            name='category' 
            register={register}
            setValue={setValue}
           
          />

          <Buttons text='create camping' isPending={isSubmitting} />

        </form>
      </div>
    </section>
  );
};

export default Camping;