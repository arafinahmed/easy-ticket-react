import React from 'react';

import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const GoogleMap = () => {

    const defaultView = {
        center: {
          lat: 24.430271,
          lng: 90.785379
        },
        zoom: 12
      };
    
    return (
        <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBNsgqqJKZgKwj_xze2Mcnu1ZOgEu2Rnfs" }}
          defaultCenter={defaultView.center}
          defaultZoom={defaultView.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
};

export default GoogleMap;