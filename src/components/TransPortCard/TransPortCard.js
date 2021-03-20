import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextApi } from '../../App';
import './TransportCar.css';
const TransPortCard = ({transportType}) => {
    const history = useHistory();
    const setTransportType = useContext(ContextApi)[1];
    const HandleClick = (transport) => {
        history.push("/destination");
        setTransportType(transport);
    }
    
    
    return (
        <section className="transport" onClick={() => HandleClick("bike")}>
            <img className="img-fluid" src={transportType.imgUrl} alt=""/>
            <h3>{transportType.type}</h3>
        </section>
    );
};

export default TransPortCard;