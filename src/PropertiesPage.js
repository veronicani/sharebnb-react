import { useState } from "react";
import PropertyCard from "./PropertyCard";

/** Display all properties.
 *
 * Props:
 * - properties
 * [{name, address, description, price, backyard, pool, images},...]
 *
 * State:
 * - none.
 *
 * RoutesList -> PropertiesPage -> PropertyCard
 */

function PropertiesPage({ properties }) {
  console.log('PropertiesPage properties=', properties);
  return (
    <div class="row">
      {properties.map(p => <PropertyCard property={p} />)}
    </div>
  )
}

export default PropertiesPage;