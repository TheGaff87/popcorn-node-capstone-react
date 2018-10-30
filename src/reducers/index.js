import * as actions from '../actions';

const initialState = {
    user: 'Popcorn',
    videos: [],
    chatHistory: [],
    loading: false
};

export const reducer = (state=initialState, action) => {
    console.log(action);
    if (action.type === actions.SIGNUP_REQUEST) {
        console.log('Signing up User!', action.user);

        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }

    if (action.type === actions.SEARCH_VIDEOS_REQUEST) {
        console.log('Running SEARCH_VIDEOS_REQUEST action');
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }

    if (action.type === actions.APPEND_RESULTS) {
        console.log('Running APPEND_RESULTS action', action.videos);
        return Object.assign({}, state, {
            videos: action.videos,
            loading: false,
            error: null
        });
    }

    return state;
};