import * as actions from '../actions';

const initialState = {
    authToken: '',
    chatHistory: [],
    currentVideo: '',
    loading: false,
    onMain: false,
    user: null,
    userID: '',
    videos: [],
    videoId: '',
    watchlist: []
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.REQUEST) {
        return Object.assign({}, state, {
            error: null,
            loading: true,
            onMain: false
        });
    }

    if (action.type === actions.SELECT_VIDEO) {
        return Object.assign({}, state, {
            currentVideo: action.currentVideo,
            videoId: action.id,
            onMain: true
        });
    }


    if (action.type === actions.ADD_VIDEO) {
        return Object.assign({}, state, {
            loading: false,
            onMain: false
        });
    }

    if (action.type === actions.DELETE_VIDEO) {
        console.log(action.id);
        return Object.assign({}, state, {
            loading: false,
            watchlist: state.watchlist.filter(video => video._id !== action.id),
            onMain: false
        });
    }

    if (action.type === actions.GEN_WATCHLIST) {
        console.log('watchlist:', action.videos);
        return Object.assign({}, state, {
            loading: false,
            watchlist: action.videos,
            onMain: false
        });
    }

    if (action.type === actions.LOG_USER) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            user: action.user,
            onMain: false
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
            videoId: '',
            watchlist: [],
            onMain: false
        });
    }

    if (action.type === actions.CHAT) {
        console.log(action, state.chatHistory);
        return Object.assign({}, state, {
            chatHistory: [...state.chatHistory, action.text]
        });
    }

    if (action.type === actions.APPEND_RESULTS) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            videos: [...state.videos, action.videos],
            onMain: false
        });
    }

    if (action.type === actions.CLEAR_RESULTS) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            videos: [],
            onMain: false
        });
    }

    if (action.type === actions.SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken,
            loading: false,
            onMain: false
        });
    }

    if (action.type === actions.AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            user: action.currentUser.username,
            userID: action.currentUser.id,
            onMain: false
        });
    }


    return state;
};