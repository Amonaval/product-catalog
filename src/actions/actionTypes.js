export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';



export const APP_STORE_ERROR = 'APP_STORE_ERROR';
export const REQUEST_FAILED = 'REQUEST_FAILED';


export const API_SUFFIX = {
    SUCCESS: '_SUCCESS',
    IN_PROGRESS: '_IN_PROGRESS',
    FAILURE: '_FAILURE'
};

export function appStoreError(error) {
    return {
        type: APP_STORE_ERROR,
        payload: {
            ...error
        }
    };
}