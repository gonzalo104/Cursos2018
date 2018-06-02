import { INSERT_CUSTUMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiPost } from './../api';
import { urlCustumers } from '../api/urls';
export const insertCustumer = createAction(INSERT_CUSTUMERS,
 custumers => apiPost(urlCustumers, custumers)());