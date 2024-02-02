import "./PropertyCard.css";

/** Renders a card for a property.
 *
 * Props:
 * - property
 *
 * State: none
 *
 * PropertiesPage -> PropertyCard
 */
function PropertyCard({ property }) {
  console.log('PropertyCard property', property);
  const { name, description, price, address, backyard, pool } = property;

  const images = property.images[0];
  console.log("images", images)
  const { url } = images; //images is an arr, but we only have 1 img
  console.log("url", url)


  return (
    <div className="PropertyCard card" style={{width: "18rem;"}}>
      <img className="card-img-top image-fluid"
        src={url} alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-text">{description}</h6>
        <p className="card-text">Address: {address}</p>
        <p>Price per night: {price}</p>
      <ul className="list-group list-group-flush"><span>Includes:</span>
        {pool && <li className="list-group-item">pool</li>}
        {backyard && <li className="list-group-item">backyard</li>}
      </ul>
      </div>
    </div>
  );
}

export default PropertyCard;