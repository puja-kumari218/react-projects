import React from 'react'

function useForm(intial) {
    const [form, setForm] = useState(intial)
    const handleChange =(e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
  return {form, handleChange};

export default useForm
}