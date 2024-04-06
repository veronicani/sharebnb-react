import './App.scss';
import ShareBnB from './api';
import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';

import RoutesList from './RoutesList';
import Navbar from './Navbar';
import Footer from './Footer';

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
  const [propertiesData, setProperties] = useState({
    data: null,
    errors: null
  });

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
    try {
      const { properties } = await ShareBnB.getProperties(term);
      setProperties({
        data: properties,
        errors: null
      });
      setIsLoading(false);
    } catch (err) {
      setProperties({
        data: null,
        errors: err
      });
      setIsLoading(false);
    }
  }

  if (isLoading === true && propertiesData.data === null) {
    return (
      <div className="CompanyList-loader">
        <div id="html-spinner"></div>
        <i>Loading...</i>
      </div>
    );
  } else if (propertiesData.errors) return <i>Server error. Please try again.</i>

  return (
    <body className="App d-flex flex-column vh-100">
      <BrowserRouter>
        <Navbar search={search} />
        <RoutesList
            properties={propertiesData.data}
            addProperty={addProperty}
            search={search}
        />
        <Footer />
      </BrowserRouter>
    </body>
  );
}

export default App;
