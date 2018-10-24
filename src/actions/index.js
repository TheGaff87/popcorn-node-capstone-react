/*
 * action types
*/

export const LOG_USER = "LOG_USER";
export const UPDATE_TIME = "UPDATE_TIME";
export const GET_WATCHLIST = "GET_WATCHLIST";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const ADD_VIDEO = "ADD_VIDEO";
export const SEARCH_VIDEO = "SEARCH_VIDEO";

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

export const deleteVideos = (videos, list) => (
    {
        type: DELETE_VIDEO,
        list
    }
);

export const addVideos = (videos, list) => (
    {
        type: ADD_VIDEO,
        list
    }
);

export const searchVideos = (videos, list) => (
    {
        type: SEARCH_VIDEO,
        list
    }
);