const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
console.log("BASE_API_URL:", BASE_API_URL);
/** ShareBnB API. */
class ShareBnB {

  /** addProperty: adds a property with form data and image file. */

  static async addProperty(formData, file) {
    const url = `${BASE_API_URL}/properties`;

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
  static async getProperties(search) {
    let url = new URL(`${BASE_API_URL}/properties`);
    console.log("API url:", url);
    url.search = (search)
      ? new URLSearchParams({ term: search }).toString()
      : "";

    const response = await fetch(url);
    const data = await response.json();
    console.log("API search data", data);
    return data;
  }

}

export default ShareBnB;