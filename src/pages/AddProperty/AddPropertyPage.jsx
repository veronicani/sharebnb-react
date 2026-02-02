import "./AddPropertyPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

const INITIAL_FORM_DATA = {
  name: "",
  address: "",
  description: "",
  price: 0,
  backyard: false,
  pool: false,
};

/** Form to add property.
 *
 * Props:
 * - addProperty: function to call in parent.
 *
 * State:
 * - formData
 * - file: image upload for property.
 *
 * RoutesList -> AddPropertyPage
 */

function AddPropertyPage({ addProperty }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [file, setFile] = useState(null);

  /** Update form input fields */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  /** Update file uploaded */
  function handleFileChange(evt) {
    setFile(evt.target.files[0])
  }
  /** Updated form checkbox inputs */
  function handleCheckBoxChange(evt) {
    let field = evt.target;
    setFormData(fData => ({ ...fData, [field.name]: field.checked }));
  }

  const navigate = useNavigate()

  /** Calls parent function with form data, and clears the form and file upload. */
  async function handleSubmit(evt) {
    evt.preventDefault()
    await addProperty(formData, file);
    setFormData(INITIAL_FORM_DATA);
    setFile(null);
    navigate("/");

    // TODO: handle any errors thrown
  }

  return (
    <div className="AddPropertyPage">
      <div className="container col-md-8 col-lg-6">
        <h3>Add your backyard or pool!</h3>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Property Name</label>
                <input
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  id="address"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  id="backyard"
                  type="checkbox"
                  name="backyard"
                  className="form-check-input"
                  value={formData.backyard}
                  onChange={handleCheckBoxChange}
                />
                <label htmlFor="backyard" className="form-check-label ms-2">Backyard</label>
              </div>
              <div className="mb-3">
                <input
                  id="pool"
                  type="checkbox"
                  name="pool"
                  className="form-check-input"
                  value={formData.pool}
                  onChange={handleCheckBoxChange}
                />
                <label htmlFor="pool" className="form-check-label ms-2">Pool</label>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                  id="image"
                  type="file"
                  name="image"
                  className="form-control"
                  value={formData.image}
                  onChange={handleFileChange}
                />
              </div>

              {/* {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null}

            {saveConfirmed
              ?
              <Alert type="success" messages={["Updated successfully."]} />
              : null} */}

              <div className="d-grid">
                <Button
                  bsClasses="btn btn-primary btn-white-text"
                  handleClick={handleSubmit}
                  label="Add Property"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPropertyPage;