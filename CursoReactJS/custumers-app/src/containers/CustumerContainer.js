import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustumerByDni } from '../selectors/custumers';
import {Route, withRouter} from 'react-router-dom';
import CustumerEdit from './../components/CustumerEdit';
import CustumerData  from './../components/CustumerData';
import {fetchCustumers} from './../actions/fetchCustumers';
import {updateCustumer} from './../actions/updateCustumer';
import { SubmissionError } from 'redux-form'
import { deleteCustumer } from '../actions/deleteCustumer';
//<p>Datos del cliente "{this.props.custumer.name}"</p>

class CustumerContainer extends Component {

    componentDidMount(){
        if (this.props.custumer.length === 0) {
            this.props.fetchCustumers();
        }
    }

    handleSubmit = values => {
        //console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustumer(id,values).then(r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
        
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }
    
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }
    
    handleOnDelete = id => {
        console.log("eliminando")
        this.props.deleteCustumer(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderCustumerControl = (isEdit, isDelete) => {
        if(this.props.custumer){
            const CustumerControl = isEdit ? CustumerEdit : CustumerData;
            return <CustumerControl 
                {...this.props.custumer} 
                onSubmit={this.handleSubmit} 
                onBack={this.handleOnBack}  
                onSubmitSuccess={this.handleOnSubmitSuccess} 
                isDeleteAllow={!!isDelete}
                onDelete={this.handleOnDelete}/>  
        }
        
        return null;  
    }

    renderBody = () => (
        <Route path="/custumers/:dni/edit" children={
            ({match: isEdit}) => (
                <Route path="/custumers/:dni/del" children={
                    ( {match: isDelete} ) => (
                        this.renderCustumerControl(isEdit, isDelete))
                }/>)
        }/>
    ) 
    

    render() {
        return (
            <div>
              <AppFrame header={`Cliente ${this.props.dni}`}
                body={this.renderBody()}>
                </AppFrame>           
            </div>
        );
    }
}

CustumerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    custumer: PropTypes.object,
    fetchCustumers: PropTypes.func.isRequired,
    updateCustumer: PropTypes.func.isRequired,
    deleteCustumer: PropTypes.func.isRequired,
};

const mapStateToProps = (state,props) => ({
    custumer: getCustumerByDni(state,props)
});



export default withRouter(connect(mapStateToProps,
    {
        fetchCustumers,
        updateCustumer,
        deleteCustumer
    }
)(CustumerContainer));