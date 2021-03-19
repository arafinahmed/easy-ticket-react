import React, { useContext } from 'react';
import './Home.css';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import {useHistory } from 'react-router-dom';
import { ContextApi } from '../../App';
const Home = () => {
    const history = useHistory();
    const setTransportType = useContext(ContextApi)[1];
    const HandleClick = (transport) => {
        history.push("/destination");
        setTransportType(transport);
    }
    return (
        <div className="transportTypeContainer container">
            <section className="transport" onClick={ () => HandleClick("bike")}>
                <h1><MotorcycleIcon fontSize="inherit"/></h1>
                <h3>Bike</h3>
            </section>
            
            <section className="transport" onClick={ () => HandleClick("car")}>
                <h1><MotorcycleIcon fontSize="inherit"/></h1>
                <h3>Car</h3>
            </section>
            

            <section className="transport" onClick={ () => HandleClick("bus")}>
                <h1><MotorcycleIcon fontSize="inherit"/></h1>
                <h3>Bus</h3>
            </section>

            <section className="transport" onClick={ () => HandleClick("train")}>
                <h1><MotorcycleIcon fontSize="inherit"/></h1>
                <h3>Train</h3>
            </section>
            
        </div>
    );
};

export default Home;