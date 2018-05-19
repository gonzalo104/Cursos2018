import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustumerActions from './../components/CustumersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("hablde on click")
        this.props.history.push('/custumers');
    }
 render(){
    return (
        <div>
           <AppFrame 
           header="Home"
           body={
                <div> Esta es la pantalla inicial
                      <CustumerActions>
                      <button onClick={this.handleOnClick}>Listado de clientes</button>                        
                      </CustumerActions>
                </div>
            }
            >
           </AppFrame>

        </div>
    );
}
};



export default withRouter(HomeContainer);