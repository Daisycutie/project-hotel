import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const FormInputs= ({register}) => {
  return (
    <div>
        <Label>title</Label>
        <Input
        {...register('price')} 
        type='number' name='price' 
        placeholder='Price' 
        className="border p-2 rounded"/>
    </div>
  )
}

export default FormInputs
