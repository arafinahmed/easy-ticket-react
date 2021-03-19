import React, { useContext } from 'react';
import { ContextApi } from '../../App';

const Destination = () => {
    const [transportType] = useContext(ContextApi);
    return (
        <div>
            <h2>This is destination</h2>
            <h3>{transportType}</h3>
        </div>
    );
};

export default Destination;