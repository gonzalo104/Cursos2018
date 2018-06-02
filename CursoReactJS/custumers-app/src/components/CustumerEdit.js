import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {setPropsAsInitial} from './../helpers/setPropsAsInitial';
import CustumersActions from './CustumersActions';
import {Prompt} from 'react-router-dom';

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


const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();

const toLower = value => value && value.toLowerCase();

const onlyGrow = (value, previousValue, values) => 
    value && (!previousValue ? value : (value > previousValue ? value : previousValue));




class CustumerEdit extends Component{

    componentDidMount(){
       if (this.txt) {
           this.txt.focus();
       }
    }


     renderField = ({input, meta, type, label, name, withFocus}) => (
        <div>
         <label htmlFor={name}>{label}</label>
        <input {...input} 
        type={!type ? "text" : type}
        ref={withFocus && (txt => this.txt = txt)}/>
        {
          !meta.active &&  meta.error && <span>{meta.error}</span>
        }            
        </div>
    );


    render(){
        const {handleSubmit,submitting,onBack, pristine, submitSucceeded} = this.props;        
        return (
            <div>
                <h2>Edicion del Cliente</h2>
              
    
                <form onSubmit={handleSubmit}>                   
                        <Field 
                            withFocus
                            name="name" 
                            component={this.renderField} 
                            type="text"                       
                            label="Nombre"
                            parse={toUpper}
                            format={toLower}>                        
                        </Field>                                
                        
                        <Field 
                            name="dni"
                            component={this.renderField} 
                            type="text"                        
                            label="Dni">
                         </Field>
                   
                        <Field 
                            name="age" 
                            component={this.renderField} 
                            type="number"
                            validate={isNumber}
                            label="Edad"
                            parse={toNumber}
                            normalize={onlyGrow}>                       
                        </Field>
                        
                    <CustumersActions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                    </CustumersActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderan los datos si continua"></Prompt>
                    
                </form>
            </div>
        );
    }
} 
    
   

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