import axios from 'axios';

const photoUrl = 'https://jsonplaceholder.typicode.com/photos';

export const baseUrl = axios.create({
  baseURL: photoUrl,
});
