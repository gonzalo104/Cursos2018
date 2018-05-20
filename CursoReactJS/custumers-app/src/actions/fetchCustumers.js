import {FETCH_CUSTUMERS} from './../constants';
import { createAction } from 'redux-actions';
import {apiGet} from './../api/';
import { urlCustumers } from '../api/urls';

export const fetchCustumers = createAction(FETCH_CUSTUMERS, apiGet(urlCustumers));

