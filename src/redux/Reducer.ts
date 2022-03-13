import {combineReducers} from 'redux';
import Auth from './reducers/Auth';
import {APP_INIT, APP_LOADING} from './types/App';

const defaultState = {
    title: '',
    init: null
};
const App = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case APP_LOADING: {
            return {
                ...state,
                loading: action.payload.loading,
            };
        }
        case APP_INIT: {
            return {
                ...state,
                init: action.payload.init,
            };
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    App, Auth,
});
