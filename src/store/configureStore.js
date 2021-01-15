import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from '../reducers/rootReducers';
import rootEpic from '../epics/rootEpic';
import apisMap from '../api/index';
import { errorHandlingMiddleware } from './middlewares';

const epicMiddleware = createEpicMiddleware({
    dependencies: {apis: apisMap}
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore();

function configureStore() {
    const newStore = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                epicMiddleware,
                errorHandlingMiddleware
            )
        )
    );
    epicMiddleware.run(rootEpic);
    return newStore;
}

export default store;