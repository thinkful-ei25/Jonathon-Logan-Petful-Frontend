import axios from 'axios';
import { API_BASE_URL } from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cats: cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error: error
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  axios.get(`${API_BASE_URL}/api/cats`)
    .then(({ data }) => {
      console.log(data);
      dispatch(fetchCatSuccess(data));
    })
    .catch(error => dispatch(fetchCatError(error)));
}

export const deleteCat = () => dispatch => {
  axios.delete(`${API_BASE_URL}/api/cats`)
    .then(response => {
      dispatch(fetchCat());
    })
    .catch(error => dispatch(fetchCatError(error)));
}