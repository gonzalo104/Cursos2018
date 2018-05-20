import {combineReducers} from 'redux';
import {custumers} from './custumers';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
    custumers, 
    form: reduxForm
})