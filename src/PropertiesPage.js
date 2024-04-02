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
  // console.log('PropertiesPage properties=', properties);
  return (
    <div className="row">
      <SearchForm search={search} />
      <div className="col">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {properties.map(
            p => <PropertyCard
              property={p}
              search={search}
              key={p.id}
            />)}
        </div>
      </div>
    </div>
  )
}

export default PropertiesPage;