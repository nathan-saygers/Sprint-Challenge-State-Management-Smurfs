import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START});
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log('this is the API response', response.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: FETCH_SMURF_FAILURE, payload: error.response });
    })
}
 


export const makeSmurf = (newSmurf) => dispatch => {
  console.log('a thing');
  dispatch({ type: POST_SMURF_START});
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: newSmurf});
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: POST_SMURF_FAILURE, payload: error})
    })
}