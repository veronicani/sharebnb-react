import './App.css';
import { useState } from "react";
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


  function addProperty(){

  }


  return (
    <div className="App">
      <BrowserRouter>
      <RoutesList properties={properties} addProperty={addProperty}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
