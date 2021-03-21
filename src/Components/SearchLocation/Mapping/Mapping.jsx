import React from 'react';
import { Map, Marker } from 'pigeon-maps';

const Mapping = () => {
    return (
        <div>
            <Map height={400} defaultCenter={[22.845640, 89.540329]} defaultZoom={11}>
                <Marker width={50} anchor={[22.845640, 89.540329]} />
            </Map>
        </div>
    );
};

export default Mapping;