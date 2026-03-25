import { FormInput } from "lucide-react";
import { useForm } from "react-hook-form";
import FormInputs from "../../components/Form/FormInputs";
const Camping = () => {
    const { register, handleSubmit } = useForm();
    const Bsubmit = (data) => {
        console.log(data)
    };

  return (
    <section>
      <h1 className='capitalize text-2xl font-semibold mb-4 py-6'>Create Camping</h1>
      <div className='border p-8 rounded-md'>
        <form onSubmit={handleSubmit(Bsubmit)} className="flex flex-col gap-4">
          <input {...register('title')} 
          type='text' name='title' 
          placeholder='Title' 
          className="border p-2 rounded"/>


          <FormInput  register={register}/>

          
          <input 
          {...register('description')}
          type='text' 
          name='description' 
          placeholder='Description' 
          className="border p-2 rounded"/>
          <input
          {...register('address')} 
          type='text' 
          name='address' 
          placeholder='Address' 
          className="border p-2 rounded"/>
          
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Camping