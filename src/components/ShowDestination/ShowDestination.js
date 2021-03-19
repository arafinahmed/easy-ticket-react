import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/FakeData.json';
import ShowFare from '../ShowFare/ShowFare';
import './ShowDestination.css';
const ShowDestination = ({ pickFrom, pickTo, transportType }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const allData = fakeData;
        const filteredData = allData.filter(dt => dt.type === transportType);
        setData(filteredData);
    }, [])
    console.log(data);
    return (
        <div>
            <div className="from-to">
                <h5>{pickFrom}</h5>
                <h5>{pickTo}</h5>
            </div>
            {
                data.map(dt => <ShowFare info={dt}></ShowFare>)
            }
        </div>
    );
};

export default ShowDestination;