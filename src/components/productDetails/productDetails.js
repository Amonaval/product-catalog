import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  
    componentDidMount() {
        const {match = {}} = this.props;
        const {params = {}} = match;
        this.props.fetchProductDetails({id: params.id});
    }

    render() {
        const {productDetails = {}} = this.props;

        return (
            <div className="container">
                <h2>Product Details Page</h2>
               
                <div class="product-details">
                    <img alt='' src={`${productDetails.imageUrl}`} ></img>
                    <div className="product-detail-item">
                        <div><div className="prod-detail">Product Name: </div> {productDetails.name}</div>
                        <div><div className="prod-detail">Description: </div> {productDetails.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductDetails.propTypes = {
    productDetails:PropTypes.func.isRequired,
    initData: PropTypes.object
};

export default ProductDetails;
