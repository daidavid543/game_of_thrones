import {AUTH_CHANGE} from '../types/Auth';

const defaultState = {
    user: null,
};

export default function (state: any = defaultState, action: any) {
    switch (action.type) {
        case AUTH_CHANGE: {
            return {
                ...state,
                user: action.payload.user,
            };
        }

        default: {
            return state;
        }
    }
};
