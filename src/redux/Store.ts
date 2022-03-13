import {applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState') || "") : {};

if (persistedState && persistedState.App) {
    persistedState.App.loading = false;
    persistedState.App.init = null;
}

const store = createStore(rootReducer, persistedState, applyMiddleware(...middleware));

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
export default store;
