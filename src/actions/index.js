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

export const request =  () => ({
  type: REQUEST
});

export const logUser = user => ({
  type: LOG_USER,
  user
});

export const selectVideo = id => ({
  type: SELECT_VIDEO,
  id
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


export const appendResults = (videos) => ({
  type: APPEND_RESULTS,
  videos
});

export const clearResults = (videos) => ({
  type: CLEAR_RESULTS,
  videos
});

export const addVideo = () => dispatch => {
  dispatch(request());
  // fetch POST a resource, video information, to the endpoint
  // /videos/:id
};

export const signupUser = user => dispatch => {
  console.log('signupUser is dispatched!');
  dispatch(request());
  console.log('LINE 61, actions file: ', user);
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
    .catch((res,err) => {
      console.log('res: ', res);
    });
};


export const searchVideos = text => dispatch => {
  console.log('searchVideos is dispatched!');
  dispatch(request());

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
