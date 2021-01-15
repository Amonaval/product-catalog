import * as actions from './actionTypes';

export function fetchCategories(data) {
    return {type: actions.FETCH_CATEGORIES, payload: data};
}

export function fetchProducts(data) {
    return {type: actions.FETCH_PRODUCTS, payload: data};
}

export function fetchProductDetails(data) {
    return {type: actions.FETCH_PRODUCT_DETAILS, payload: data};
}



export function fetchCategoriesSuccessful(data) {
    return {type: `${actions.FETCH_CATEGORIES}${actions.API_SUFFIX.SUCCESS}`, payload: data};
}

export function fetchProductsSuccessful(data) {
    return {type: `${actions.FETCH_PRODUCTS}${actions.API_SUFFIX.SUCCESS}`, payload: data};
}

export function fetchProductDetailsSuccessful(data) {
    return {type: `${actions.FETCH_PRODUCT_DETAILS}${actions.API_SUFFIX.SUCCESS}`, payload: data};
}

export function requestFailed(payload){
    return {type: actions.REQUEST_FAILED, payload: payload};
}
