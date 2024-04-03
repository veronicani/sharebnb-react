import './SearchForm.scss';
import React, { useState } from "react";

import Button from './Button';

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
  // console.log("SearchForm searchTerm=", searchTerm);

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
        <div className="row justify-content-center">
          <div className="col-8">
            <input
              className="form-control form-control-lg"
              name="searchTerm"
              placeholder="Search by location or name"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <Button
              bsClasses="btn btn-lg btn-primary btn-white-text"
              handleClick={handleSubmit}
              label="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;