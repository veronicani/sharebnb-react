import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertiesPage from './PropertiesPage';
import AddPropertyForm from './AddPropertyForm';

/** Routes for ShareBnB. 
 * 
 * Props: 
 * - properties: 
 *    [{ id, name, address, backyard, pool, description, price, user_id }, ...]
 * - addProperty: fn to call in parent
 * - search: fn to call in parent
 * 
 * - State: none
 * 
 * App -> RoutesList -> { PropertiesPage, AddPropertyForm }
*/
function RoutesList({ properties, addProperty }) {
  return (
      <Routes>
        {/* <Route path="/" element={Homepage} /> */}
        <Route path="/" element={<PropertiesPage properties={properties} />} />
        <Route path="/add-property" element={<AddPropertyForm addProperty={addProperty}/>} />
      </Routes>
  )
}

export default RoutesList;