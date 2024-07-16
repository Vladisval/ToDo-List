import { useState } from "react";

export const useInput = (initialState = "") => {
  const [value, setValue] = useState(initialState);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
