import { API_ORIGIN } from "../config";

/*
 * action types
*/

export const LOG_USER = "LOG_USER";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const UPDATE_TIME = "UPDATE_TIME";
export const GET_WATCHLIST = "GET_WATCHLIST";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const ADD_VIDEO = "ADD_VIDEO";
export const SEARCH_VIDEOS_REQUEST = 'SEARCH_VIDEOS_REQUEST';
export const APPEND_RESULTS = "APPEND_RESULTS";

/*
 * action creators
 */

export const signupRequest =  () => ({
  type: SIGNUP_REQUEST
});

export const logUser = user => ({
  type: LOG_USER,
  user
});

export const updateTime = time => ({
  type: UPDATE_TIME,
  time
});

export const getWatchlist = (videos) => ({
  type: GET_WATCHLIST,
  videos
});

export const deleteFromWatchlist = (videos) => ({
  type: DELETE_VIDEO,
  videos
});

export const addToWatchlist = (videos) => ({
  type: ADD_VIDEO,
  videos
});

export const searchVideosRequest = () => ({
    type: SEARCH_VIDEOS_REQUEST
});

export const appendResults = (videos) => ({
  type: APPEND_RESULTS,
  videos
});

export const signupUser = user => dispatch => {
  console.log('signupUser is dispatched!');
  dispatch(signupRequest());
  console.log('From from: ', user);
  fetch(`${API_ORIGIN}/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
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
      console.log(res);
      dispatch(logUser(user.username));
    })
    .catch(err => {
      console.log('actions index.js line 74', err);
    })
};


export const searchVideos = text => dispatch => {
  console.log('searchVideos is dispatched!');
  dispatch(searchVideosRequest());

  fetch(`${API_ORIGIN}/videos/${text}`, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(res => {
        // console.log(res.response);
        dispatch(appendResults(res.response.body));
    })
    .catch(err => {
      console.log('actions index.js line 94', err);
    });
};
