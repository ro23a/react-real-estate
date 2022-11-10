import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'bcc50f838cmsh3301586e7c7e2aap1fc29djsnc31d56e0a6fd',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });
    
  return data;
}