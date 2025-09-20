

import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52351567-9bed95c87e6696adfbadfce62";

export async function fetchImg(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
