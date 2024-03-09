import './App.css';
import ShareBnB from './api';
import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';

import RoutesList from './RoutesList';
import Navbar from './Navbar';

/** App for ShareBnB.
 *
 * Props:
 * - none
 *
 * State:
 * - isLoading
 * - properties
 *
 * App -> { Navbar, RoutesList }
*/

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  /** getPropertiesOnMount: Executes search without a search term. */

  useEffect(function getPropertiesOnMount() {
    search();
  }, []);

  /** addProperty: Makes a request to API to add a new property. Recieves 
   * form data and file upload from form. 
   */

  async function addProperty(formData, file){
    const resp = await ShareBnB.addProperty(formData, file);
    setProperties(p => ([...p, resp.property]))
  }

  /** search: Makes a request to API for properties that matches search term.*/

  async function search(term){
    const { properties } = await ShareBnB.getProperties(term);
    setProperties(properties);
    setIsLoading(false);
  }

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar search={search} />
        <RoutesList
            properties={properties}
            addProperty={addProperty}
            search={search}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
