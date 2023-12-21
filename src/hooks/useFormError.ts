import { useState } from "react";

interface error {
  field: string;
  message: string;
}

export default function useFormErrors() {
  const [errors, setErrors] = useState<error[]>([]);

  function addError(field: string, message: string) {
    setErrors((prevstate) => [
      ...prevstate,
      { field: field, message: message },
    ]);
  }
  function removeError(errorField: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== errorField)
    );
  }
  function getErrorByFieldName(fieldName: string) {
    return errors.find((error) => error.field === fieldName)?.message;
  }
  return { errors, addError, removeError, getErrorByFieldName };
}
