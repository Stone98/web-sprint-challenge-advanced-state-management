import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF, SET_ERROR_MESSAGE } from '../actions';
export const initialState = { // Sets state with starting values
    smurfs: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START): // Begins the fetch
            return ({
                ...state,
                isLoading: true,
                error: ''
            })
        case (FETCH_SUCCESS): // Used to set state upon fetch success
            return ({
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            })
        case (FETCH_FAILURE): // Used to set state upon fetch failure
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
        case (ADD_SMURF): // Used to set state when a new smurf is added
            return ({
                ...state,
                isLoading: false,
                error: '',
                smurfs: [...state.smurfs, { id: Date.now(), ...action.payload }]
            })
        case (SET_ERROR_MESSAGE): // Used to set state when their is an error with adding a smurf via the form
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
        default: // Returns the initial state if none of the cases are true
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.