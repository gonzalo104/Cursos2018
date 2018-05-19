import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import CustumersList from '../components/CustumersList';
import CustumersActions from '../components/CustumersActions';
import {fetchCustumers} from '../actions/fetchCustumers';

const custumers = [
    {
        "dni": "2700000",
        "name": "Juan Perez",
        "age": "37"
    },
    {
        "dni": "3000000",
        "name": "Otro",
        "age": "35"
    },
    {
        "dni": "3300000",
        "name": "Luis Martinez",
        "age": "32"
    },
];


class CustumersContainer extends Component {

    componentDidMount () {
        this.props.fetchCustumers();
    }



    handleAddNew = () => {
        this.props.history.push('/custumers/new');
    }

    renderBody = custumers => (
        <div>
            <CustumersList custumers={custumers} 
            urlPath={'custumer/'}>
            </CustumersList>
            <CustumersActions>
            <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustumersActions> 
       </div>

    );


    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                    body={this.renderBody(this.props.custumers)}
                ></AppFrame>
            </div>
        );
    }
}

CustumersContainer.propTypes = {
    fetchCustumers: PropTypes.func.isRequired,
    custumers: PropTypes.array.isRequired,
};

CustumersContainer.defaultProps = {
    custumers: []
}

const mapStateToProps = state => ({
    custumers: state.custumers,
});



export default withRouter(connect(mapStateToProps, {fetchCustumers})(CustumersContainer));