import {connect} from 'react-redux';
import ProductDetails from './productDetails';
import {fetchProductDetails} from '../../actions/productAction';

const mapStateToProps = (state, ownProps) => {
    const {sampleReducer = {}} = state;
    const {productDetails} = sampleReducer;
    return {
        ownProps,
        productDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductDetails: (payload) => {
            dispatch(fetchProductDetails(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
