import React from 'react';
import PropTypes from 'prop-types';

const CustumerEdit = ({name,dni,age}) => {
    return (
        <div>
            <h2>Edicion del Cliente</h2>
            <h3>Nombre: {name} / Dni: {dni} / Edad: {age}</h3>
        </div>
    );
};

CustumerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

export default CustumerEdit;