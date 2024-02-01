const BASE_API_URL = "http://localhost:5001";

/** ShareBnB API. */
class ShareBnB {

  /** addProperty: adds a property with form data and image file. */

  static async addProperty(formData, file) {
    const url = `${BASE_API_URL}/properties`

    const newFormData = new FormData();
    newFormData.append('image', file);

    for (let key in formData) {
      newFormData.append(key, formData[key]);
    }

    const payload = {
      method: "POST",
      body: newFormData,
    };

    const response = await fetch(url, payload);
    const data = await response.json();
    return data;
  }

  /** getProperties: get all properties. */

}

export default ShareBnB;