import './App.css';
import ShareBnB from './api';
import { useState, useEffect } from "react";
import RoutesList from './RoutesList';
import Navbar from './Navbar';

import { BrowserRouter } from 'react-router-dom';
/** App for ShareBnB.
 *
 * Props:
 * - none
 *
 * State:
 * - isLoading
 * - properties
 *
 *
 * App -> RoutesList
*/

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  console.log('App properties state: ', properties);
  /** getProperties: Makes a request to API to get all properties. */

  useEffect(function getPropertiesOnMount() {
    console.log('useEffect getPropertiesOnMount');
    search();
  }, []);

  /** addProperty: Makes a request to API to add a new property. */

  async function addProperty(formData, file){
    const resp = await ShareBnB.addProperty(formData, file);
    setProperties(p => ([...p, resp.property]))
  }

  /** search: Makes a request to API for properties that matches search term.*/

  async function search(term){
    console.log("App search term=", term)
    const { properties } = await ShareBnB.getProperties(term);
    console.log("search properties", properties)
    setProperties(properties);
    setIsLoading(false);
  }


  if (isLoading === true) return <p>Loading...</p>;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
