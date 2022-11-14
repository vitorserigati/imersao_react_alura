import { useState } from "react";
export default function useForm(props) {
  const [values, setValues] = useState(props.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    submit() {
      setValues({});
    },
  };
}
