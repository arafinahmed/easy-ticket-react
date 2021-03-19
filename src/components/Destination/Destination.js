import React, { useContext, useState } from 'react';
import { ContextApi } from '../../App';
import DestinationForm from '../DestinationForm/DestinationForm';
import map from '../../images/Map.png';
import './Destination.css';
import ShowDestination from '../ShowDestination/ShowDestination';
const Destination = () => {
    const [transportType] = useContext(ContextApi);
    const [pickFrom, setPickFrom] = useState("");
    const [pickTo, setPickTo] = useState("");
    return (
        <div className="container main-destination-container">
            <div className="destination-container">
                <div>
                    {
                        pickFrom ? <ShowDestination transportType={transportType} pickFrom={pickFrom} pickTo={pickTo} key="showDestination"></ShowDestination> :
                            <DestinationForm key="destinationForm" setPickFrom={setPickFrom} setPickTo={setPickTo}></DestinationForm>
                    }
                </div>
                <div className="image-container">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;