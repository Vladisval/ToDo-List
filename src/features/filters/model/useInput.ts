import { useState } from "react";

export const useInput = (initialState = "") => {
  const [value, setValue] = useState(initialState);
  return {
    value,
    onChange: (event: any) => setValue(event.target.value),
  };
};
