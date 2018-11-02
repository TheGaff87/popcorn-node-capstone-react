import * as actions from '../actions';

const initialState = {
    authToken: '',
    chatHistory: [],
    currentVideo: '',
    loading: false,
    user: null,
    userID: '',
    videos: [],
    videoId: 'M4Ufs7-FpvU',
    watchlist: []
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.REQUEST) {
        return Object.assign({}, state, {
            error: null,
            loading: true
        });
    }

    if (action.type === actions.SELECT_VIDEO) {
        return Object.assign({}, state, {
            currentVideo: action.currentVideo,
            videoId: action.currentVideo.id.videoId
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
            loading: false,
            watchlist: action.videos
        });
    }

    if (action.type === actions.LOG_USER) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            user: action.user
        });
    }

    if (action.type === actions.LOG_OUT) {
        return Object.assign({}, {
            authToken: '',
            chatHistory: [],
            currentVideo: '',
            loading: false,
            user: null,
            userID: '',
            videos: [],
            videoId: 'M4Ufs7-FpvU',
            watchlist: []
        });
    }

    if (action.type === actions.APPEND_RESULTS) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            videos: action.videos
        });
    }

    if (action.type === actions.CLEAR_RESULTS) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            videos: []
        });
    }

    if (action.type === actions.SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken,
            loading: false
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