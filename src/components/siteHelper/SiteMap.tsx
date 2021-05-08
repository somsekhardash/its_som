import * as React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { Marker } from "react-mapbox-gl";

const accessToken = 'pk.eyJ1Ijoic29tZGFzaHNvbSIsImEiOiJja2NwNXFmenowcm0wMnptb2l4N21rMTR3In0.Shm9zvgMBqQTvXhJs0H8wg';

const Map = ReactMapboxGl({
    maxZoom: 12,
    minZoom: 12,
    accessToken:
        accessToken
});

const SiteMap: React.FC<any> = ({ data }) => {
    return (<section className="site-map" id="map">
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            center={[77.759945, 12.985531]}
            containerStyle={{
                height: '70vh',
                width: 'auto'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[77.759945, 12.985531]} />
            </Layer>
            <Marker
                coordinates={[77.759945, 12.985531]}
                anchor="bottom">
                <span></span>
            </Marker>
        </Map>
    </section>);
}

export default SiteMap;