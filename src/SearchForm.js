import React, { useState } from "react";

/** Renders Search form.
 *
 * Appears on Properties Page so that these can be filtered
 * down. Can search using name or address.
 *
 * Props:
 * - search -> function to call in parent
 *
 * State:
 * - searchTerm
 *
 * PropertiesPage -> SearchForm
 */

function SearchForm({ search }) {
  // console.log("SearchForm", "search=", typeof search);

  const [searchTerm, setSearchTerm] = useState("");

  console.log("SearchForm searchTerm=", searchTerm)

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /** Tell parent to filter */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  return (
    <div className="SearchForm mb-4">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-0">
          <div className="col-8">
            <input
              className="form-control form-control-lg"
              name="searchTerm"
              placeholder="Enter search term..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;