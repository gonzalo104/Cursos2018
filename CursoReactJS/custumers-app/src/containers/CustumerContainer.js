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
//<p>Datos del cliente "{this.props.custumer.name}"</p>

class CustumerContainer extends Component {

    componentDidMount(){
        if (!this.props.custumer) {
            this.props.fetchCustumers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const {id} = values;
        this.props.updateCustumer(id,values);
        
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/custumers/:dni/edit" children={
            ({match}) => {
                if(this.props.custumer){
                    const CustumerControl = match ? CustumerEdit : CustumerData;
                    return <CustumerControl {...this.props.custumer} onSubmit={this.handleSubmit} onBack={this.handleOnBack}/>  
                }
                
                return null;  
            }
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
};

const mapStateToProps = (state,props) => ({
    custumer: getCustumerByDni(state,props)
});



export default withRouter(connect(mapStateToProps,
    {
        fetchCustumers,
        updateCustumer
    }
)(CustumerContainer));