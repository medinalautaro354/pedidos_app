import {createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import mySaga from '../sagas/index';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};
const middleware = [thunk];
const SagaMiddleware= createSagaMiddleware()

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware, SagaMiddleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

SagaMiddleware.run(mySaga)

export default store;