import React from 'react';
import PropTypes from 'prop-types';
import CustumerListItem from './CustumerListItem';

const CustumersList = ({custumers}) => {
    return (
        <div>
            <div className="custumers-list">
                {custumers.map(c =>
                    <CustumerListItem
                        key={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}>
                    </CustumerListItem>)
                }
            </div>
        </div>
    );
};

CustumersList.propTypes = {
    custumers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustumersList;