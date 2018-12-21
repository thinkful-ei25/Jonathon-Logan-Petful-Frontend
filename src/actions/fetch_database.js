import {API_BASE_URL} from '../config';
import {parse} from './parse'

function fetch_database(){
    return fetch(API_BASE_URL)
    .then(res => res.json()
    )
    .then(repos => {
      return parse(repos)
    })
    .then(array => {
      return array;
    })
}

export {fetch_database};