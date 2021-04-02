import React, { useState,useEffect} from 'react';
import { ReactBingmaps } from 'react-bingmaps';



function MapComponent(props) {






    const mapStyle = {
        height: "600px",
        width: "1200px",
        margin: "0 auto",
        marginTop: "50px",
        marginLeft:"-40px"
    }

  
    const pushPins = [
        {
            "location": [props.latitude, props.longitude], "option": { color: 'red' }, "addHandler": { "type": "click" }
        }
    ];

    const latAndLong = [props.latitude, props.longitude];

    return (
        <div style={mapStyle}>
            <ReactBingmaps
                
                bingmapKey="AgOE4RYwhEH-5pwizHGRxlfspQf1A0adxJcISTDPBOU3gin7UzD6mevQrPKabJAQ"
                pushPins={pushPins}
                center={latAndLong}
                zoom={15 }/>
            
        </div>
    );

}

export default MapComponent;