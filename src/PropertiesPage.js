import PropertyCard from "./PropertyCard";
import SearchForm from "./SearchForm";

/** Display all properties.
 *
 * Props:
 * - properties
 * [{ id, name, address, backyard, pool, description, price, user_id }, ...]
 * - search: function to call in parent
 * 
 * State:
 * - none.
 *
 * RoutesList -> PropertiesPage -> PropertyCard
 */

function PropertiesPage({ properties, search}) {
  console.log('PropertiesPage properties=', properties);
  return (
    <div className="row">
      <SearchForm search={search} />
      {properties.map(p => <PropertyCard property={p} search={search}/>)}
    </div>
  )
}

export default PropertiesPage;