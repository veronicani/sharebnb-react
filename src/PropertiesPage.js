import { useState } from "react";
import PropertyCard from "./PropertyCard";

function PropertiesPage({ properties }) {
  console.log('PropertiesPage properties=', properties);
  return (
    properties.map(p => <PropertyCard property={p} />)
  )
}

export default PropertiesPage;