import RxPhoenixHttp from './RxPhoenixHttp/RxPhoenixHttp';
import {simpleMapPipe} from './pipes.api';

const http = new RxPhoenixHttp();

const baseURL = 'http://localhost:8000';

const fetchCategories = `${baseURL}/categories`;
const fetchProducts = `${baseURL}/products`;
const fetchProductDetails = `${baseURL}/productsDetails`;


const fetchCategoryApi$ = () => {
    return http.get(fetchCategories).pipe(simpleMapPipe);
};

const fetchProductsApi$ = (payload) => {
    const productsUrl = `${fetchProducts}?categoryId=${payload.id}`;
    return http.get(productsUrl).pipe(simpleMapPipe);
}

const fetchProductDetailsApi$ = (payload) => {
    const productsDetails = `${fetchProductDetails}?id=${payload.id}`;
    return http.get(productsDetails).pipe(simpleMapPipe);
}





export {
    fetchCategoryApi$,
    fetchProductsApi$,
    fetchProductDetailsApi$
};
