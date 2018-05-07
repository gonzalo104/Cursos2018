import React from 'react';
import PropTypes from 'prop-types';

const CustumerData = ({name, dni, age}) => {
    return (
        <div>
            <div className="custumer-data">
                    <h2>Datos del cliente</h2>
                    <div><Strong>Nombre</Strong><i>{name}</i></div>
                    <div><Strong>DNI</Strong><i>{dni}</i></div>
                    <div><Strong>Edad</Strong><i>{age}</i></div>                
            </div>
        </div>
    );
};

CustumerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustumerData;