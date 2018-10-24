import * as actions from '../actions';

const initialState = {
    user: 'Popcorn',
    test: "TEST"
};

export const reducer = (state=initialState, action) => {
    console.log(action);
    if (action.type === actions.LOG_USER) {
        console.log('Changing Log User!', action.user);

        return Object.assign({}, state, {
            user: action.user
        });
    }

    return state;
};