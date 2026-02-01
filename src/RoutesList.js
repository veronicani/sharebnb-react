import React from 'react';
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertiesPage from './pages/Properties/PropertiesPage';
import AddPropertyPage from './pages/AddProperty/AddPropertyPage';

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
 * App -> RoutesList -> { PropertiesPage, AddPropertyPage }
*/

function RoutesList({ properties, addProperty, search }) {
  return (
    <main className="container py-5">
      <Routes>
        {/* <Route path="/" element={Homepage} /> */}
        <Route path="/" element={
          <PropertiesPage
            properties={properties}
            search={search}
          />}
        />
        <Route path="/add-property" element={
          <AddPropertyPage
            addProperty={addProperty}
          />}
        />
        <Route path="/:term" element={
          <PropertiesPage
            properties={properties}
            search={search}
          />}
        />
        <Route path="*" element={
          <Navigate to="/" />}
        />
      </Routes>
    </main>
  )
}

export default RoutesList;