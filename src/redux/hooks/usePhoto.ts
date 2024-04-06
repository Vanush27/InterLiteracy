import {useAppDispatch, useAppSelector} from '@hooks';
import {setProducts} from '@redux/slices/productsSlice';

export const usePhoto = () => {
  const dispatch = useAppDispatch();

  const {products} = useAppSelector(state => state.products);

  const dispatchSetLanguages = (lang: string) => {
    dispatch(setProducts(lang));
  };

  return {
    products,
    dispatchSetLanguages,
  };
};
