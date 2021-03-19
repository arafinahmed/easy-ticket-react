import React, { useContext } from 'react';
import './Home.css';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import TrainIcon from '@material-ui/icons/Train';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { useHistory } from 'react-router-dom';
import { ContextApi } from '../../App';
const Home = () => {
    const history = useHistory();
    const setTransportType = useContext(ContextApi)[1];
    const HandleClick = (transport) => {
        history.push("/destination");
        setTransportType(transport);
    }
    return (
        <div className="main-conatainer d-flex align-items-center">
            <div className="transportTypeContainer container">
                <section className="transport" onClick={() => HandleClick("bike")}>
                    <h1><MotorcycleIcon fontSize="inherit" /></h1>
                    <h3>Bike</h3>
                </section>

                <section className="transport" onClick={() => HandleClick("car")}>
                    <h1><DriveEtaIcon fontSize="inherit" /></h1>
                    <h3>Car</h3>
                </section>


                <section className="transport" onClick={() => HandleClick("bus")}>
                    <h1><DirectionsBusIcon fontSize="inherit" /></h1>
                    <h3>Bus</h3>
                </section>

                <section className="transport" onClick={() => HandleClick("train")}>
                    <h1><TrainIcon fontSize="inherit" /></h1>
                    <h3>Train</h3>
                </section>

            </div>
        </div>
    );
};

export default Home;