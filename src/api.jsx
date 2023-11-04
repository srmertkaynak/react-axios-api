import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID U8_pv04jrKg3mOpLA7sR_NHffdmpJ4-Pz0D7-WeZGYI",
    },
    params: {
      query: term,
    },
  });

  return response;
};

export default searchImages;
