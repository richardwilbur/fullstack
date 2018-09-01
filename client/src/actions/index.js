import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  // Redux Thunk will see that we returned a function. It will then call the
  // function, passing it the dispatch function, which we can call when we are
  // done
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
