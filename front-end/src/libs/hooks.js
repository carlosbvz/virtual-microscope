import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event, custom) => {
      const id = event.target?.id || custom.id;
      const value = event.target?.value || custom.value;
      setValues({
        ...fields,
        [id]: value,
      });
    },
  ];
}
