import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows?.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
      <label>     
     Search:
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
              }}
              placeholder={`${count} records...`}
      />
    </label>
  );
};
