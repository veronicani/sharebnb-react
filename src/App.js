import './App.css';
import ShareBnB from './api';
import { useState, useEffect } from "react";
import RoutesList from './RoutesList';
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

  /** getProperties: Makes a request to API to get all properties. */

  useEffect(function getPropertiesOnMount() {
    async function fetchProperties() {
      const { properties } = await ShareBnB.getProperties(); 
      console.log('properties=', properties);
      setProperties(properties);
      setIsLoading(false);
    }
    fetchProperties();
  }, []);  

  /** addProperty: Makes a request to API to add a new property. */

  async function addProperty(formData, file){
    const resp = await ShareBnB.addProperty(formData, file);
    console.log("addProperty resp=", resp);
  }

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <div className="App">
      <BrowserRouter>
      <RoutesList properties={properties} addProperty={addProperty}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
