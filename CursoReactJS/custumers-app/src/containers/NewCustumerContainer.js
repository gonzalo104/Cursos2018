import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustumerEdit from '../components/CustumerEdit';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {insertCustumer} from './../actions/insertCustumer';
import {SubmissionError} from 'redux-form';

class NewCustumerContainer extends Component {

    handleSubmit = (values) =>{
       return this.props.insertCustumer(values).then(r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }   

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }  
    
    handleOnBack = () => {
        this.props.history.goBack();
    }


    renderBody = () => {
        return <CustumerEdit onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess} onBack={this.handleOnBack}/>
    }

    render() {
        return (
            <div>
                <AppFrame header={`Creación de nuevo cliente`}
                    body={this.renderBody()}
                    ></AppFrame>
            </div>
        );
    }
}

NewCustumerContainer.propTypes = {
    insertCustumer: PropTypes.func.isRequired,
};

export default withRouter(connect(null,{insertCustumer})(NewCustumerContainer));