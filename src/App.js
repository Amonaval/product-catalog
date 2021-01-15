import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import ProductCatalog from './components/productCatalog/productCatalog.Connect';
import ProductDetails from './components/productDetails/productDetails.Connect';

const App = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                      <Route exact path="/" render={(props) => <ProductCatalog {...props} />} />
                      <Route exact path="/productDetails/:id" render={(props) => <ProductDetails {...props} />} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
