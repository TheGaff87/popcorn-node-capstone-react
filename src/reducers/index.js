import * as actions from '../actions';

const initialState = {
    user: null,
    videos: [],
    chatHistory: [],
    loading: false,
    videoId: null
};

export const reducer = (state=initialState, action) => {
    console.log(action);
    if (action.type === actions.SIGNUP_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }

    if (action.type === actions.SELECT_VIDEO) {
        console.log("play video!", action.id)
        return Object.assign({}, state, {
            videoId: action.id
        });
    }

    if (action.type === actions.LOG_USER) {
        console.log(action.user);
        return Object.assign({}, state, {
            user: action.user,
            loading: false,
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

    if (action.type === actions.CLEAR_RESULTS) {
        console.log('Running CLEAR_RESULTS action', action.videos);
        return Object.assign({}, state, {
            videos: [],
            loading: false,
            error: null
        });
    }

    return state;
};