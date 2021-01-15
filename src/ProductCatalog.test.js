import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductCatalog from './components/productCatalog/productCatalog';
import {categories, products} from '../db.json';

Enzyme.configure({ adapter: new Adapter() });

const productListProps = {
    loading: false,
    categories: categories, 
    products: products, 
    selectedCategory: categories[0].id,
    fetchCategories: jest.fn(() => { }),
    fetchProducts: jest.fn(() => { })
};

describe('ProductCatalog', () => {

    let wrapper;
    let instance;
    beforeEach(() => {
        wrapper = shallow(<ProductCatalog {...productListProps} />);
        instance = wrapper.instance();
    });

    it('should show the text', () => {
        const element = wrapper.find('.product-list');
        expect(element.children.length).toBe(1);
    });

    it('should show 3 categories', () => {
        expect(instance.props.categories.length).toBe(3);
    });

    it('should show 9 products in props', () => {
        expect(instance.props.products.length).toBe(9);
    });

    it('should render 9 products', () => {
        const element = wrapper.find('.prod-item-name');
        expect(element.length).toBe(9);
    });
      
});