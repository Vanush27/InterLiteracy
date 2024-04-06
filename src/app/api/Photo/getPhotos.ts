import {baseUrl} from '../baseUrl';

const getPhotos = async () => {
  const {data} = await baseUrl.get('');
  return data;
};

export default getPhotos;
