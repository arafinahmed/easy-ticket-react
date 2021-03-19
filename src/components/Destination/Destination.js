import React, { useContext, useState } from 'react';
import { ContextApi } from '../../App';
import DestinationForm from '../DestinationForm/DestinationForm';
import map from '../../images/Map.png';
import './Destination.css';
const Destination = () => {
    const [transportType] = useContext(ContextApi);
    const [pickFrom, setPickFrom] = useState("");
    const [pickTo, setPickTo] = useState("");
    return (
        <div className="container">
            <div className="destination-container">
            <div>
                <p>{pickFrom}</p>
                <p>{pickTo}</p>
                <DestinationForm key="destinationForm" setPickFrom={setPickFrom} setPickTo={setPickTo}></DestinationForm>
            </div>
            <div>
                <img className="img-fluid" src={map} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Destination;