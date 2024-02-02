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
    <div className="PropertyCard card">
      <h6 className="card-title">{name}</h6>
      <div className="card-body">
        <h5>Address: {address}</h5>
        <p>{description}</p>
      </div>
      <img class="card-img-top image-fluid" style={{height: "10em"}}
        src={url} alt={name} />
      <div className="card-body">
        <p>Price per night: {price}</p>
      </div>
      <ul className="list-group list-group-flush"><span>Includes:</span>
        {pool && <li className="list-group-item">pool</li>}
        {backyard && <li className="list-group-item">backyard</li>}
      </ul>
      {/* <img src={url} alt={name} /> */}
    </div>
  );
}

export default PropertyCard;