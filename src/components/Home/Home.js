import React, { useEffect, useState } from 'react';
import './Home.css';
import OptionData from '../FakeData/OptionData.json';
import TransPortCard from '../TransPortCard/TransPortCard';

const Home = () => {
    const [transportData, setTransportData] = useState([]);
    useEffect(() => {
        setTransportData(OptionData);        
    }, [])
    
    return (
        <div className="main-conatainer d-flex align-items-center">
            <div className="transportTypeContainer container">
                
                {
                    transportData.map(data => <TransPortCard transportType={data}></TransPortCard>)
                }
                

            </div>
        </div>
    );
};

export default Home;