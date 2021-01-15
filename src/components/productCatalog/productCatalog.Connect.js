import {connect} from 'react-redux';
import ProductCatalog from './productCatalog';
import {fetchCategories, fetchProducts} from '../../actions/productAction';

const mapStateToProps = (state) => {
    const {sampleReducer = {}} = state;
    const {categories = [], products = [], selectedCategory = ''} = sampleReducer;
    return {
        selectedCategory,
        categories,
        products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (payload) => {
            dispatch(fetchCategories(payload));
        },
        fetchProducts: (payload) => {
            dispatch(fetchProducts(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog);
