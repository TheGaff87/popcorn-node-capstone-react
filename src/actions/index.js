import jwtDecode from 'jwt-decode';
import { API_ORIGIN } from "../config";

/*
 * action types
*/

export const LOG_USER = "LOG_USER";
export const REQUEST = "REQUEST";
export const SELECT_VIDEO = "SELECT_VIDEO";
export const UPDATE_TIME = "UPDATE_TIME";
export const GET_WATCHLIST = "GET_WATCHLIST";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const ADD_VIDEO = "ADD_VIDEO";
export const APPEND_RESULTS = "APPEND_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";


/*
 * action creators
 */

export const request = () => ({
  type: REQUEST
});

export const logUser = user => ({
  type: LOG_USER,
  user
});

export const selectVideo = currentVideo => ({
  type: SELECT_VIDEO,
  currentVideo
});

export const updateTime = time => ({
  type: UPDATE_TIME,
  time
});

export const getWatchlist = videos => ({
  type: GET_WATCHLIST,
  videos
});

export const deleteFromWatchlist = videos => ({
  type: DELETE_VIDEO,
  videos
});

export const addToWatchlist = video => ({
  type: ADD_VIDEO,
  video
});

export const appendResults = videos => ({
  type: APPEND_RESULTS,
  videos
});

export const clearResults = videos => ({
  type: CLEAR_RESULTS,
  videos
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken) => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const addVideo = obj => dispatch => {
  console.log('addVideo is dispatched!');
  console.log(obj);
  console.log(JSON.stringify(obj));
  dispatch(request());
  fetch(`${API_ORIGIN}/videos`, {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(obj)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
        // const err = new Error('Missing `title` in request body');
        // err.status = 400;
      }
      return res.json();
    })
    .then(res => {
      console.log(res);
      dispatch(addToWatchlist(res));
    })
    .catch(err => {
      console.log("actions index.js line 94", err);
    });
};

const storeAuthInfo = (authToken, dispatch) => {
  console.log(authToken);
  const decodedToken = jwtDecode(authToken);
  console.log(decodedToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken));
  // saveAuthToken(authToken);
};

export const login = user => dispatch => {
  console.log(user);
  dispatch(request());
  fetch(`${API_ORIGIN}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(authToken => storeAuthInfo(authToken.token, dispatch))
    .catch((res, err) => {
      console.log("res: ", res);
    });
};

export const signupUser = user => dispatch => {
  dispatch(request());
  fetch(`${API_ORIGIN}/auth/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      dispatch(logUser(user.username));
    })
    .catch((res, err) => {
      console.log("res: ", res);
    });
};

export const searchVideos = text => dispatch => {
  dispatch(request());
  fetch(`${API_ORIGIN}/videos/${text}`, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      dispatch(appendResults(res.response.body));
    })
    .catch(err => {
      console.log("actions index.js line 94", err);
    });
};
