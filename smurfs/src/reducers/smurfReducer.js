import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE
} from '../actions/smurfActions'

export const initialState = {
  smurfs: [],
  isFetching: false,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      }
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case POST_SMURF_START:
      return {
        ...state,
        isFetching: true
      }
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: false,
      }
    case POST_SMURF_FAILURE:
        console.log(action.payload);
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        }
    default:
      return state;
  }
}

export default reducer;