import React, { Component } from 'react';
import Radium from 'radium';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

@Radium
export default class MyMap extends Component {
    static defaultProps = {};
    props: {
        lat: number,
        lng: number,
        name: string
    };
    state: void;

    render() {
        const { lat, lng, name } = this.props;

        return (
            <Map center={[lat, lng]} zoom={18} style={STYLES.map}>
                <TileLayer
                    url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    detectRetina="true"
                />
                <Marker position={[lat, lng]}>
                    <Popup>
                        <span>{name}</span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

const STYLES = {
    map: {
        width: '100%',
        height: '200px'
    }
};
