import React from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./styles.css";
const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
const center = {
    lat: 40.745,
    lng: -70.523
  };

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCEdg7nFRw9J7PcnOeFqtXN9mjCF1mDpSo"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
      ) : <></>
}
export default Map;