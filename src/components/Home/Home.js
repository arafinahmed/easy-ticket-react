import React, { useContext } from 'react';
import './Home.css';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import {useHistory } from 'react-router-dom';
import { ContextApi } from '../../App';
const Home = () => {
    const history = useHistory();
    const [transportType, setTransportType] = useContext(ContextApi);
    const HandleClick = () => {
        history.push("/destination");
        setTransportType()
    }
    return (
        <div>
            <h2>{transportType}</h2>
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