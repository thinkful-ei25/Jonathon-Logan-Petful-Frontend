import axios from 'axios';
import { API_BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error: error
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  axios.get(`${API_BASE_URL}/api/dogs`)
    .then(({ data }) => {
      dispatch(fetchDogSuccess(data));
    })
    .catch(error => dispatch(fetchDogError(error)));
}

export const deleteDog = () => dispatch => {
  axios.delete(`${API_BASE_URL}/api/dogs`)
    .then(response => {
      dispatch(fetchDog());
    })
    .catch(error => dispatch(fetchDogError(error)));
}