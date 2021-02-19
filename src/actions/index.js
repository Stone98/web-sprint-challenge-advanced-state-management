import axios from 'axios';
export const FETCH_START = 'FETCH_START'; // Constants to keep from making mistakes with code
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const fetchSmurfs = () => { // Gets an array of smurfs from the server to be displayed in SmurfList
    return dispatch => {
        dispatch({ type: FETCH_START });
        axios.get('http://localhost:3333/smurfs')
            .then((res) => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: FETCH_FAILURE, payload: err.Response.body.Error })
            })
    }
}

export const addSmurf = (smurf) => { // Allows a new smurf to be added to the array of smurfs from the server and displayed in SmurfList following the other smurfs
    return dispatch => {
        dispatch({ type: FETCH_START })
        axios.post('http://localhost:3333/smurfs', smurf)
            .then((res) => {
                dispatch({ type: ADD_SMURF, payload: smurf })
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: SET_ERROR_MESSAGE, payload: err.response.data.Error })
            })
    }
}

export const setError = (error) => { // Sets an error message for the add smurf form
    return dispatch => {
        dispatch({ type: SET_ERROR_MESSAGE, payload: error })
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.