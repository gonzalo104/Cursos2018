import { UPDATE_CUSTUMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiPut } from './../api';
import { urlCustumers } from '../api/urls';
export const updateCustumer = createAction(UPDATE_CUSTUMERS,
(id, custumers) => apiPut(urlCustumers, id, custumers)());