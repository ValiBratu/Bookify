import React, { useState, useEffect } from 'react';
import { ReactBingmaps } from 'react-bingmaps';


function MapComponent(props) {

    const mapStyle = {
        height: "600px",
        width: "800px",
        margin: "0 auto",
        marginTop:"100px"
    }


    return (
        <div className="Map" style={mapStyle}>
            <ReactBingmaps 
                bingmapKey="AgOE4RYwhEH-5pwizHGRxlfspQf1A0adxJcISTDPBOU3gin7UzD6mevQrPKabJAQ" >
            </ReactBingmaps>
        </div>
    );

}

export default MapComponent;