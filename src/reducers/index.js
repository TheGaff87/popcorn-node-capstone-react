import * as actions from "../actions";

const initialState = {
  authToken: "",
  chatMsg: "",
  chatHistory: [],
  currentVideo: "",
  error: null,
  loading: false,
  toMain: false,
  time: null,
  user: null,
  userID: "",
  videos: [],
  videoId: "",
  watchlist: []
};

export const reducer = (state = initialState, action) => {
  if (action.type === actions.ERROR) {
    return Object.assign({}, state, {
      error: action.err,
      loading: false
    });
  }

  if (action.type === actions.REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true,
      toMain: false
    });
  }

  if (action.type === actions.SAVE_MESS) {
    return Object.assign({}, state, {
      chatHistory: [...state.chatHistory, action.data]
    });
  }

  if (action.type === actions.CLEAR_MESS) {
    return Object.assign({}, state, {
      chatHistory: []
    });
  }

  if (action.type === actions.SELECT_VIDEO) {
    return Object.assign({}, state, {
      currentVideo: action.currentVideo,
      videoId: action.id,
      loading: false,
      toMain: true,
      time: action.time
    });
  }

  if (action.type === actions.ADD_VIDEO) {
    return Object.assign({}, state, {
      loading: false
    });
  }

  if (action.type === actions.DELETE_VIDEO) {
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
    return Object.assign(
      {},
      {
        authToken: "",
        chatHistory: [],
        currentVideo: "",
        loading: false,
        user: null,
        userID: "",
        videos: [],
        videoId: "",
        watchlist: []
      }
    );
  }

  if (action.type === actions.APPEND_RESULTS) {
    const videos = action.videos.items;
    return Object.assign({}, state, {
      error: null,
      loading: false,
      nextPageToken: action.videos.nextPageToken,
      pageInfo: action.videos.pageInfo,
      videos: videos
    });
  }

  if (action.type === actions.CLEAR_RESULTS) {
    return Object.assign({}, state, {
      error: null,
      loading: false,
      videos: [],
      watchlist: [],
      toMain: false
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
