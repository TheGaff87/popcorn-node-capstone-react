import * as actions from '../actions';

const initialState = {
    user: null,
    videos: [],
    chatHistory: [],
    loading: false,
    currentVideo: '',
    videoId: 'M4Ufs7-FpvU',
    authToken: ''
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }

    if (action.type === actions.SELECT_VIDEO) {
        console.log("%%%%%%%%%%%%%%%%%%%%%% SELECT_VIDEO RAN!!!!!!");
        return Object.assign({}, state, {
            videoId: action.currentVideo.id.videoId,
            currentVideo: action.currentVideo
        });
    }


    if (action.type === actions.ADD_VIDEO) {
        console.log("%%%%%%%%%%%%%%%%%%%%%% ADD_VIDEO RAN!!!!!!");
        return Object.assign({}, state, {
            loading: false
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

    if (action.type === actions.SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    }

    if (action.type === actions.AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            user: action.currentUser.username
        });
    }


    return state;
};