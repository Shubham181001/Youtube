import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    //   q: 'music',
    //   part: 'snippet,id',
    //   regionCode: 'US',
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": "ca372d5871msh0b0f48da33bd647p1fd598jsn760709c85433",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
