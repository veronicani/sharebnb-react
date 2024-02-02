
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
  const { name, description, price, address, backyard, pool, images } = property;
  console.log('images=', images);
  console.log('image 0: ', images[0]);
  const { url } = images[0]; //images is an arr, but we only have 1 img
  console.log('typeof url: ', typeof url);
  console.log('url: ', url);

  return (
    <div className="PropertyCard card">
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p>{description}</p>
        <p>Price per night: {price}</p>
        <p>Address: {address}</p>
        <ul><span>Includes:</span>
        {pool && <li>pool</li>}
        {backyard && <li>backyard</li>}
        </ul>
        <img src={url} alt={name} />
      </div>
    </div>
  );
}

export default PropertyCard;