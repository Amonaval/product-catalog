import {map, switchMap, concatMap} from 'rxjs/operators';
import {from as fromRxOperator} from 'rxjs';
import * as actionTypes from '../actions/actionTypes';
import {fetchCategoriesSuccessful, fetchProducts, fetchProductsSuccessful, fetchProductDetailsSuccessful} from '../actions/productAction';
import {combineEpics} from 'redux-observable';

const API_NAME = 'productsApi';

const {FETCH_CATEGORIES, FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS} = actionTypes;

const fetchCategoriesEpic = (action$, state$, {apis}) => {
    const action = FETCH_CATEGORIES;
    return action$
        .ofType(action)
        .pipe(
            switchMap((data) => {
                return apis[API_NAME].fetchCategoryApi$();
            }),
            concatMap((result) => fetchCategoriesReponseHandler(result))
        );
};

const fetchProductsEpic = (action$, state$, {apis}) => {
    const action = FETCH_PRODUCTS;
    return action$
        .ofType(action)
        .pipe(
            switchMap((data) => {
                const {id} = data.payload;
                return apis[API_NAME].fetchProductsApi$({id});
            }),
            map((result) => fetchProductsSuccessful(result))
        );
};

const fetchProductDetailsEpic = (action$, state$, {apis}) => {
    const action = FETCH_PRODUCT_DETAILS;
    return action$
        .ofType(action)
        .pipe(
            switchMap((data) => {
                const {id} = data.payload;
                return apis[API_NAME].fetchProductDetailsApi$({id});
            }),
            map((result) => fetchProductDetailsSuccessful(result))
        );
};

const fetchCategoriesReponseHandler = (result) => {
    const actions = []
    if(result) {
        actions.push(fetchCategoriesSuccessful({result, selectedCategory: result[0].id}))
        actions.push(fetchProducts({id: result[0].id}));
    }
    return fromRxOperator(actions);
}


// COMBINE ALL EPICS
const productCatalogEpic = () => {
    return combineEpics(
        fetchCategoriesEpic,
        fetchProductsEpic,
        fetchProductDetailsEpic
    );
};

export default productCatalogEpic;