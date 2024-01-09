import { useState } from "react";

export default function SearchForm() {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setSearchTerm(searchFieldValue);
  }

  // console.log(searchFieldValue);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input
          name="searchTerm"
          id="searchTerm"
          value={searchFieldValue}
          onChange={(event) => {
            setSearchFieldValue(event.target.value);
          }}
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
