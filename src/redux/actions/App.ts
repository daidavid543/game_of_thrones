import {APP_TITLE, APP_INIT, APP_LOADING} from '../types/App';

export const actionAppLoading = (loading: boolean) => async (dispatch: any) => {
    dispatch({
        type: APP_LOADING,
        payload: {
            loading,
        },
    });
};

export const actionAppInit = (init: any) => async (dispatch: any) => {
    dispatch({
        type: APP_INIT,
        payload: {
            init,
        },
    });
};
