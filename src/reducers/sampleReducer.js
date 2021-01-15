import {FETCH_CATEGORIES, FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS, API_SUFFIX} from '../actions/actionTypes';

const {SUCCESS} = API_SUFFIX;

export default function sampleReducer(alias, initialState = {}) {
    return (state = initialState, action) => {
        switch (action.type) {
            case FETCH_CATEGORIES:
            case FETCH_PRODUCT_DETAILS:
                return {
                    ...state,
                    loading:true
                };
            case FETCH_PRODUCTS:
                return {
                    ...state,
                    loading:true,
                    selectedCategory: action.payload.id
                };
            case `${FETCH_CATEGORIES}${SUCCESS}`:
                return Object.assign({}, {
                    ...state,
                    loading: false,
                    categories: action.payload.result,
                    selectedCategory: action.payload.selectedCategory
                });
            case `${FETCH_PRODUCTS}${SUCCESS}`:
                    return Object.assign({}, {
                        ...state,
                        loading: false,
                        products: action.payload
                });
            case `${FETCH_PRODUCT_DETAILS}${SUCCESS}`:
                return Object.assign({}, {
                    ...state,
                    loading: false,
                    productDetails: action.payload[0]
                });
            default:
                return state;
        }
    };
}