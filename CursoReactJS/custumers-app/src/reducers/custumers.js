import { handleActions } from 'redux-actions';
import { FETCH_CUSTUMERS, INSERT_CUSTUMERS,UPDATE_CUSTUMERS, DELETE_CUSTUMER } from '../constants';

export const custumers = handleActions({
    [FETCH_CUSTUMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTUMERS]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTUMERS]: (state, action) => { 
        const custumerPayload = action.payload;
        const {id} = custumerPayload ;
        const custumers = state;
        const initialValue = [];
        const newCustumers = custumers.reduce( (acc,custumer) => {
            if (custumer.id === id) {
                return [...acc, custumerPayload];
            }else{
                return [...acc, custumer];
            }
        }, initialValue);
        return newCustumers;
    },
    [DELETE_CUSTUMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);

