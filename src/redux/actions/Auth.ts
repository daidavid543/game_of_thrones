import {AUTH_CHANGE} from "../types/Auth";

export const actionAuthChange = (user: any) => async (dispatch: any) => {
    dispatch({
        type: AUTH_CHANGE,
        payload: {
            user: user,
        },
    });
};
