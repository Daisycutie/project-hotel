import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const TextAreaInputs= ({register,name,row,placeholder,errors}) => {
  return (
    <div className='mb-2'>
        <Label htmlFor={name} className="capitalize mb-2 ">{name}</Label>
        <Textarea
        {...register(name)} 
        rows={row}
        placeholder ={placeholder} 
        className={`border p-2 rounded ${errors[name] ? "border-red-500" : ""}`}/>
        {errors[name] && (
        <p className='text-red-500 text-sm mt-1'>
        {errors[name].message}</p>
    )}
    </div>
  )
}

export default TextAreaInputs;
