// AIzaSyDV7LAIOHzy4PvS_pylcJaw0ZY4djYH5r8
import { DistanceMatrixService } from '@react-google-maps/api';
// import { Marker } from '@react-google-maps/api';
// import { StandaloneSearchBox } from '@react-google-maps/api';
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";

const google = window.google;

const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap, Marker} = require("react-google-maps");
let abortController = new AbortController();  

const MapWithASearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDV7LAIOHzy4PvS_pylcJaw0ZY4djYH5r8&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: `100%` }} ></div>,
    containerElement: <div style={{ height: `300px`, width: `100%` }} ></div>,
    mapElement: <div style={{ height: `100%`, width: `100%` }} ></div>,
  }),
  lifecycle({
    componentWillMount() {
      abortController.abort();
      const refs = {};
      this.setState({
        bounds: null,
        center: {
          lat: 40.416847, lng: 49.831215
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref; 
        },
        onBoundsChanged: () => {
          this.setState({
            bounds:  refs.map && refs.map.getBounds(),
            center: refs.map && refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref; 
        },
		onMarkerDragEnd: (coord, index) => {
      const nextMarkers = [{position : null}]
      nextMarkers[0].position = coord.latLng;
      const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
      console.log(nextCenter)
      var destination = {}
      destination.lat = parseFloat(nextMarkers[0].position.lat())
      destination.lng = parseFloat(nextMarkers[0].position.lng())
      let dest = [];
      dest.push(destination)
      this.setState({
        center: nextCenter,
        markers: nextMarkers,
        destination: dest
      });
		},
	
        onPlacesChanged: () => {
          const places = refs.searchBox && refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
          places.forEach(place => {
          //  console.log('place===>',place.geometry.location.lat(),place.geometry.location.lng())
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          var destination = {}
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
          destination.lat = parseFloat(nextMarkers[0].position.lat())
          destination.lng = parseFloat(nextMarkers[0].position.lng())
          let dest = [];
          dest.push(destination)
          this.setState({
            center: nextCenter,
            markers: nextMarkers,
            destination: dest
          });
          console.log(places)  
          refs.map && refs.map.fitBounds(bounds);
        },
        onTrigger: (childData) => {
          this.props.parentCallback(childData);
          // childData.preventDefault();
      }
	})
    },
  }),
  withScriptjs, 
  withGoogleMap
)(props => 
{
	//console.log('===>', props)
  return (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
	  onClick={props.onMapClick}

  >
    <StandaloneSearchBox
		ref={props.onSearchBoxMounted}
		bounds={props.bounds}
		// controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={() => props.onPlacesChanged()}
      >
        <input
          type="text"
          placeholder="What's your destination?"
          style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          zIndex: 999
          }}
        />
      </StandaloneSearchBox>
    {props.markers.map((marker, index) =>(
      <Marker 
	  	key={index} 
		  position={marker.position}
	  	draggable={true}
      onDragEnd={props.onMarkerDragEnd}
		/>
	)
    )}
    {
      props.markers[0] ? 
      <DistanceMatrixService
            options={{
              // destinations: [{ lat: 1.296788, lng: 103.778961 }],
              destinations: props.destination,
              origins: [{ lng: 49.831215, lat: 40.416847 }],
              travelMode: "DRIVING",
            }}
            callback={(res) => {
              props.onTrigger(((res.rows[0].elements[0].distance.value * 0.001 * 0.6).toFixed(2) < 2 ? 2 : (res.rows[0].elements[0].distance.value * 0.001 * 0.6).toFixed(2)))
              // console.log("RESPONSE", res);
              console.log("STATUS", res.rows[0].elements[0]);
              // this.setState({
              //   totalTime: res.rows[0].elements[0].duration.text,
              //   totalDistance: res.rows[0].elements[0].distance.text,
              // });
            }}
          />
          :
          null
    }
        
  </GoogleMap>)
}
);
export default MapWithASearchBox;















