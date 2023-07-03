import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import PropTypes from "prop-types";

import styles from "./GlobalFilter.module.scss";

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
    <label className={styles.label}>
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

GlobalFilter.propTypes = {
  preGlobalFilteredRows: PropTypes.arrayOf(PropTypes.shape),
  globalFilter: PropTypes.func,
  setGlobalFilter:PropTypes.func.isRequired,

}