import {combineEpics} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import productCatalogEpic from './productCatalogEpic';

const rootEpic = (...args) => combineEpics(
    productCatalogEpic()
)(...args, {ajax});

export default rootEpic;