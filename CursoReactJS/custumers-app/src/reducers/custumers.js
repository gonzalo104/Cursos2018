import { handleActions } from 'redux-actions';
import { FETCH_CUSTUMERS } from '../constants';

export const custumers = handleActions({
    [FETCH_CUSTUMERS]: (state, action) => [...action.payload],
}, []);

