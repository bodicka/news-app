import { useState } from "react";

export const useFilters = (initialFilters) => {
  const [filter, setFilter] = useState(initialFilters);

  const changeFilter = (key, value) => {
    setFilter((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filter, changeFilter };
};
