import React, { useContext, useState } from 'react';
import { ContextApi } from '../../App';
import DestinationForm from '../DestinationForm/DestinationForm';
import './Destination.css';
import ShowDestination from '../ShowDestination/ShowDestination';
import GoogleMap from '../GoogleMap/GoogleMap';
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
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Destination;