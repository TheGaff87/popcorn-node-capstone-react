import * as actions from '../actions';

const initialState = {
    user: null,
    videos: [],
    chatHistory: [],
    watchlist: [],
    loading: false,
    currentVideo: '',
    videoId: 'M4Ufs7-FpvU',
    authToken: '',
    userID: ''
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }

    if (action.type === actions.SELECT_VIDEO) {
        return Object.assign({}, state, {
            videoId: action.currentVideo.id.videoId,
            currentVideo: action.currentVideo
        });
    }


    if (action.type === actions.ADD_VIDEO) {
        return Object.assign({}, state, {
            loading: false
        });
    }

    if (action.type === actions.DELETE_VIDEO) {
        console.log(action.id);
        return Object.assign({}, state, {
            loading: false,
            watchlist: state.watchlist.filter(video => video._id !== action.id)
        });
    }

    if (action.type === actions.GEN_WATCHLIST) {
        return Object.assign({}, state, {
            watchlist: action.videos,
            loading: false
        });
    }

    if (action.type === actions.LOG_USER) {
        return Object.assign({}, state, {
            user: action.user,
            loading: false,
            error: null
        });
    }

    if (action.type === actions.LOG_OUT) {
        return Object.assign({}, {
            user: null,
            videos: [],
            chatHistory: [],
            loading: false,
            currentVideo: '',
            videoId: 'M4Ufs7-FpvU',
            authToken: '',
            userID: ''
        });
    }

    if (action.type === actions.APPEND_RESULTS) {
        return Object.assign({}, state, {
            videos: action.videos,
            loading: false,
            error: null
        });
    }

    if (action.type === actions.CLEAR_RESULTS) {
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
            user: action.currentUser.username,
            userID: action.currentUser.id
        });
    }


    return state;
};