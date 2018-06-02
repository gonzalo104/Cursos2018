import { DELETE_CUSTUMER } from './../constants';
import { createAction } from 'redux-actions';
import { apiDelete } from './../api';
import { urlCustumers } from '../api/urls';
export const deleteCustumer = createAction(DELETE_CUSTUMER,
(id) => apiDelete(urlCustumers, id)());