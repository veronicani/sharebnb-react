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
    <div className="col-6 col-md-4 col-lg-3">
      <div className="PropertyCard card mb-3">
        <img className="card-img-top image-fluid"
          src={url} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-text text-secondary">{description}</h6>
          <p className="card-text fw-light text-secondary my-1">{address}</p>
          <p className="text-secondary">
            <span className="fw-bold">${price}</span>
            /day
          </p>
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