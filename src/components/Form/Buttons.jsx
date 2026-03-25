import { Button } from '../ui/button'
import { RotateCw } from 'lucide-react';

const Buttons = ({ text, isPending }) => {
  return (
    <Button 
      className='w-full py-5 capitalize mt-2 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400'
      disabled={isPending}
>
  {isPending ?
  <> 
    <RotateCw className='animate-spin mr-2' size={16} />
    Creating ...
  </>  
  : text}
</Button>
  )
}

export default Buttons