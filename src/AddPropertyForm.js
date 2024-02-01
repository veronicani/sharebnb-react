import "./AddPropertyForm.css";
import { useState } from "react";

/** Form to add property.
 *
 * Props:
 * - addProperty - function to call in parent.
 *
 * State:
 * - formData
 *
 * RoutesList -> AddPropertyForm
 */

function AddPropertyForm({ addProperty }) {
  const initialData = {
    name: "",
    address: "",
    description: "",
    price: 0,
    backyard: "",
    pool: "",
  };

  const [formData, setFormData] = useState(initialData);

  /** */
  function handleChange(evt) {

  }
  /** */
  function handleCheckBoxChange(evt) {


  }

  /** */
  function handleSubmit(evt) {

  }

  return (
    <div className="AddPropertyForm">
      <div className="container col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3>Add your backyard or pool!</h3>
        <div className="card">
          <div className="card-body">
            <form method="POST" enctype="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Property Name</label>
                <input
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  name="backyard"
                  className="form-check-input"
                  value={formData.backyard}
                  onChange={handleCheckBoxChange}
                />
                <label className="form-check-label">
                  Backyard
                </label>
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  name="pool"
                  className="form-check-input"
                  value={formData.pool}
                  onChange={handleCheckBoxChange}
                />
                <label className="form-check-label"> Pool</label>
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  value={formData.image}
                  onChange={handleChange}
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
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );


}

export default AddPropertyForm;