
import {createSelector} from 'reselect';

export const getCustumers = state => state.custumers;

export const getCustumerByDni = createSelector(
    (state, props) => state.custumers.find(c => c.dni === props.dni),
    custumer => custumer
)