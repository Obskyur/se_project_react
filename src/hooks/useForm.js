import { useState } from "react";

// Used to track input values of a form
export default function useForm(inputValues) {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFormFieldChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  console.log(values, errors);

  return { values, handleFormFieldChange, isValid, errors };
}
