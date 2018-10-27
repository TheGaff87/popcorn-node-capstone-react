import {API_ORIGIN} from '../config';

/*
 * action types
*/

export const LOG_USER = "LOG_USER";
export const UPDATE_TIME = "UPDATE_TIME";
export const GET_WATCHLIST = "GET_WATCHLIST";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const ADD_VIDEO = "ADD_VIDEO";
export const SEARCH_VIDEO = "SEARCH_VIDEO";
export const APPEND_RESULTS = "APPEND_RESULTS";

/*
 * action creators
 */

export const logUser = (user) => (
    {
        type: LOG_USER,
        user
    }
);

export const updateTime = (time) => (
    {
        type: UPDATE_TIME,
        time
    }
);

export const getWatchlist = (videos, list) => (
    {
        type: GET_WATCHLIST,
        list
    }
);

export const deleteFromWatchlist = (videos, list) => (
    {
        type: DELETE_VIDEO,
        list
    }
);

export const addToWatchlist = (videos, list) => (
    {
        type: ADD_VIDEO,
        list
    }
);

export const appendResults = () => (
    {
        type: APPEND_RESULTS
    }
);

export const searchVideos = (text) => dispatch => {
    console.log(text);
    fetch(`${API_ORIGIN}/${text}`)
        .then(data => {
            console.log(data);

        })
        .catch(err => {
            console.log('uh-oh', err);
        });
};