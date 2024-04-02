import "./PropertyCard.css";

/** Renders a card for a property.
 *
 * Props:
 * - property
 *  { id, name, address, backyard, pool, description, price, user_id }
 *
 * State: none
 *
 * PropertiesPage -> PropertyCard
 */
function PropertyCard({ property }) {
  // console.log('PropertyCard property', property);
  const { name, description, price, address, backyard, pool } = property;

  const images = property.images[0];
  const { url } = images; //images is an arr, but we only have 1 img

  return (
    <div className="col">
      <div className="PropertyCard card h-100">
        <img 
          className="card-img-top image-fluid"
          src={url}
          alt={name} 
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
          <h5 className="card-title">{name}</h5>
          <h6 className="card-text text-secondary">{description}</h6>
          </div>
          <div>
            <p className="card-text fw-light text-secondary my-1">{address}</p>
            <p className="text-secondary my-0">
              <span className="fw-bold">${price}</span>
              /day
            </p>
          </div>
          <div className="card-badges">
            {pool &&
              <span className="badge rounded-pill mx-1">pool</span>}
            {backyard &&
              <span className="badge rounded-pill mx-1">backyard</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;