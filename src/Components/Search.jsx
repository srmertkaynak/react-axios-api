import React from "react";
import { useState } from "react";

function Search({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="SearchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne arıyorsunuz?</label>
        <input type="text" value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Search;
