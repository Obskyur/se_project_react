import { useState } from "react";

// Used to track input values of a form
export default function useForm(inputValues) {
  const [values, setValues] = useState({});

  const handleFormFieldChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return { values, handleFormFieldChange, setValues };
}
