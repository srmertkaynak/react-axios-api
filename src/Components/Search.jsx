import React from "react";

const handleFormSubmit = (term) => {
  console.log(term);
};

function Search({ search }) {
  const handleSubmit = () => {
    search("can");
  };
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex flex-direction-column">
          <label>Ne arıyorsunuz burada?</label>
          <input type="text" name="searchValue" />
        </div>
      </form>
    </div>
  );
}

export default Search;
