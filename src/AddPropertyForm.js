import "./AddPropertyForm.css";
import { useState } from "react";
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
 * - addProperty - function to call in parent.
 *
 * State:
 * - formData
 *
 * RoutesList -> AddPropertyForm
 */

function AddPropertyForm({ addProperty }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [file, setFile] = useState(null);
  console.debug("formData state=", formData,
                "file state=", file,
  )
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
    let field = evt.target
    setFormData(fData => ({ ...fData, [field.name]: field.checked }));
  }

  /** Calls parent function with form data, and clears the form and file upload. */
  async function handleSubmit(evt) {
    evt.preventDefault()
    const url = 'http://localhost:5001/properties'
    const newFormData = new FormData();
    newFormData.append('file', file);
    newFormData.append('fileName', file.name);

    for (let input in formData){
      const [name, value] = input;
      newFormData.append(name, value);
    }

    const config = {
      headers: {
        'content-type':'multipart/form-data'
      }
    };

    const response = await fetch(url, newFormData, config);
    const data = response.json;

    console.log("data", data)
  }

  return (
    <div className="AddPropertyForm">
      <div className="container col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3>Add your backyard or pool!</h3>
        <div className="card">
          <div className="card-body">
            <form method="POST" encType="multipart/form-data">
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
                <label className="form-check-label ms-2">Backyard</label>
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  name="pool"
                  className="form-check-input"
                  value={formData.pool}
                  onChange={handleCheckBoxChange}
                />
                <label className="form-check-label ms-2">Pool</label>
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
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