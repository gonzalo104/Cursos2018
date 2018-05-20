import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {setPropsAsInitial} from './../helpers/setPropsAsInitial';
import CustumersActions from './CustumersActions';

/*const isRequired = value => (
    !value && "Este campo es requerido" 
);*/

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const validate = values => {
    const error = {};

    if(!values.name){
        error.name = "El campo nombre es requerido"
    }
    if(!values.dni){
        error.dni = "El campo dni es requerido"
    }
    

    return error;
}

const MyField = ({input, meta, type, label, name}) => (
    <div>
     <label htmlFor={name}>{label}</label>
    <input {...input} type={!type ? "text" : type}/>
    {
      !meta.active &&  meta.error && <span>{meta.error}</span>
    }            
    </div>
);


const CustumerEdit = ({name,dni,age,handleSubmit,submitting,onBack}) => {
    
    return (
        <div>
            <h2>Edicion del Cliente</h2>
            <form onSubmit={handleSubmit}>               
                   
                    <Field 
                        name="name" 
                        component={MyField} 
                        type="text"                       
                        label="Nombre">
                    </Field>
                
                
                    <Field 
                        name="dni"
                        component={MyField} 
                        type="text"                        
                        label="Dni">
                     </Field>
               
                    <Field 
                        name="age" 
                        component={MyField} 
                        type="number"
                        validate={isNumber}
                        label="Edad">
                    </Field>
                <CustumersActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustumersActions>
                
            </form>
        </div>
    );
};
CustumerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustumerEditForm = reduxForm(
    {
        form: 'CustumerEdit',
        validate
    })(CustumerEdit);

export default setPropsAsInitial(CustumerEditForm);