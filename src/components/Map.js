// AIzaSyDV7LAIOHzy4PvS_pylcJaw0ZY4djYH5r8
import { DistanceMatrixService } from '@react-google-maps/api';
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { setOriginAsync } from '../redux/reducers/setterReducer/originSeller/originSeller.thunk';

// const google = window.google;

const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap, Marker} = require("react-google-maps");
let abortController = new AbortController(); 
// let arr ; 
// let dataLocation = [];
var styleStandart = {
    height: 300,
    width: '100%',
}
var style425 = {
    height: 300,
    width: '100%',
}

const MapWithASearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDV7LAIOHzy4PvS_pylcJaw0ZY4djYH5r8&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: `100%` }} ></div>,
    containerElement: <div style={styleStandart} ></div>,
    mapElement: <div style={{ height: `100%`, width: `100%` }} ></div>,
  }),
  lifecycle({
    componentWillMount(e) {
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
        // onBoundsChanged: () => {
        //   this.setState({
        //     // bounds: refs.map && refs.map.getBounds(),
        //     // center: refs.map && refs.map.getCenter(),
        //   })
        // },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref; 
        },
        onMarkerDragEnd: (coord, index) => {
        const nextMarkers = [{position : null}]
        nextMarkers[0].position = coord.latLng;
        const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
        // console.log(nextCenter)
        var destination = {}
        destination.lat = parseFloat(nextMarkers[0].position.lat())
        destination.lng = parseFloat(nextMarkers[0].position.lng())
        let dest = [];
        dest.push(destination)
        this.setState({
            center: nextCenter,
            markers: nextMarkers,
            destination: dest,
            arr: this.props.sellerLocation
        });
        // console.log(destination.lat,destination.lng)
        this.props.store.dispatch(setOriginAsync(destination.lat,destination.lng))
        //   let unique = Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
        //   console.log('unique===>',unique)
        // console.log(`${unique[1].lat}/${unique[1].lng}/${destination.lat}/${destination.lng}`)
            // let max = 0;
            //  unique.map((item)=>{
                // axios.post(`http://127.0.0.1:8000/api/origin/${Number(destination.lat)}/${Number(destination.lng)}`)
                // console.log(item[0]+`/`+item[1])
                // .then((response) => {
                //   console.log('response=>',response);
                // //   dataLocation.push(response.data)
                // }).catch(e=>console.log(e));
                // console.log(this.props.store)
            // })
            
            // dataLocation.map((index)=>{
            // 	if(max<index){
            // 		max = index
            // 		console.log(max)
            // 	}
            // 	console.log(max)
            // })
        },	
        onPlacesChanged: () => {
          const places = refs.searchBox && refs.searchBox.getPlaces();
          const bounds = refs.map.getBounds();
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
            this.props.store.dispatch(setOriginAsync(destination.lat,destination.lng))
            // console.log(places)  
            // console.log('nextMarkers==>',this.markers)
            // console.log('refs', this.refs)

          refs.map.fitBounds(bounds);
        },
        onTrigger: (lat,lng) => {
          this.props.parentCallback(lat,lng);
        },
        onTriggerDestAdress: (childData) => {
            this.props.parentCallbackForDest(childData);
        }
	})
    },
  }),
  withScriptjs, 
  withGoogleMap
)((props) =>
{
    if(props.markers[0]){
        props.onTrigger(props.markers[0].position.lat(),props.markers[0].position.lng())
    }
    //   const [origin,setOrigin] = useState([]);
    //   props.sellerLocation.forEach((item)=>{
        //     console.log(item)
        //   })
        // arr  = props.sellerLocation;
  // const filter = (tag, arr) => arr.filter(item => item.tag === tag);
//   let arr = props.sellerLocation;
	// setArr(props.sellerLocation)
  // var arr = [[55, 4],[55, 4],[40.4244291, 49.8251384], [40.4244291, 49.8251384],[40.41059, 49.813623]];
  // let i = 0;
  // for(i=0; i<arr.length; i++){
  //   arr[i].forEach((item)=>{
  //     console.log(item)
  //     const a = [...new Set(arr[i])]
  //     console.log(a)
  //   });
  // }
  // var unique = [...new Set(arr)]
  // const unique = [...new Set(arr.map(item => item))];
  // console.log(unique)
  // const unique = arr.filter(function(item,pos){
  //   return arr.indexOf(item)==pos;
  // });
  // console.log(unique)


  return (
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        // onBoundsChanged={props.onBoundsChanged}
    >
    <StandaloneSearchBox
		ref={props.onSearchBoxMounted}
		bounds={props.bounds}
		// controlPosition={google.maps.ControlPosition.TOP_LEFT}/
        onPlacesChanged={() => props.onPlacesChanged()}
      >
        <input
          id="inputSearch"
          type="text"
          placeholder="Çatdırılacaq yer.."
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
        ))
    }
    {
      props.markers[0] ? 
      <DistanceMatrixService
            options={{
              destinations: props.destination,
              origins: [{ lng: 49.831215, lat: 40.416847 }],
              travelMode: "DRIVING",
            }}
            callback={(res) => {
            //   props.onTrigger(((res.rows[0].elements[0].distance.value * 0.001 * 0.6).toFixed(2) < 2 ? 2 : (res.rows[0].elements[0].distance.value * 0.001 * 0.6).toFixed(2)))
            props.onTriggerDestAdress(res.destinationAddresses[0])
            //   console.log("RESPONSE", res);
            //   console.log("STATUS", res.rows[0].elements[0]);
            }}
          />
          :
          null
    }
        
  </GoogleMap>)
}
);
export default MapWithASearchBox;
