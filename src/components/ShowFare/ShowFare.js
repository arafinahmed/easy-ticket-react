import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import TrainIcon from '@material-ui/icons/Train';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import './ShowFare.css';
import { useHistory } from 'react-router';
const element = <FontAwesomeIcon icon={faUserFriends} />
const ShowFare = ({ info }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/ticketConfirmed");
    }
    return (
        <div className="from-to fareInfo">
            <h5 onClick={handleClick} className="d-flex justify-content-between">
                <span>
                    {
                        info.type === "bike" ? <MotorcycleIcon fontSize="inherit"/> : <></>
                    }
                    {
                        info.type === "bus" ? <DirectionsBusIcon fontSize="inherit"/> : <></>
                    }
                    {
                        info.type === "car" ? <DriveEtaIcon fontSize="inherit"/> : <></>
                    }
                    {
                        info.type === "train" ? <TrainIcon fontSize="inherit"/> : <></>
                    }
                    {info.name}</span> <span>{element} {info.seats}</span> <span>${info.fare}</span>
            </h5>
        </div>
    );
};

export default ShowFare;