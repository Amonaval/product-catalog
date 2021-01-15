import React from 'react';
// import ReactDOM from 'react-dom';
import {Image, Select } from 'antd';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindAll} from 'lodash';

const { Option } = Select;

class ProductCatalog extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, ['fetchProducts']);
    }


    componentDidMount() {
       const {selectedCategory} = this.props;
       if(!selectedCategory) {
        this.props.fetchCategories();
       }
    }
    
    fetchProducts(selectedProduct) {
        this.props.fetchProducts({id: selectedProduct});
    }

    render() {
        const {categories = [], products = [], selectedCategory} = this.props;

        return (
            <div className="container product-list-container">
                <h2>Product Listing Page</h2>
                <div className="category-select-box">
                    <div className="category-select-label">Category: </div>
                    <Select
                        className="category-select"
                        showSearch
                        value={selectedCategory}
                        placeholder="Select a category"
                        optionFilterProp="children"
                        onChange={this.fetchProducts}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        {categories && categories.map((item) => <Option key={item.id} value={item.id}>{item.name}</Option>)}
                    </Select>
                </div>
               
                <br />
               
                <div className="product-list">
                    {products && products.map((item) => {
                        return (<NavLink key={item.id} to={{
                            pathname: `/productDetails/${item.id}`
                        }}>
                            <div class="product-item">
                                <Image
                                    preview={false}
                                    src={`${item.imageUrl}`}
                                />
                                <div className="prod-item-name">{item.name}</div>
                            </div>
                        </NavLink>)
                    })}
                </div>
            </div>
        );
    }
}

ProductCatalog.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    categories: PropTypes.array, 
    products: PropTypes.array,
    selectedCategory: PropTypes.number
};

export default ProductCatalog;
