import './App.css';
import { useState } from "react";
import RoutesList from '../RoutesList';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <RoutesList properties={properties} />
      </BrowserRouter>
    </div>
  );
}

export default App;
