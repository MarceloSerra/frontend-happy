import L from 'leaflet';
import mapMarkerSvg from '../images/map-marker.svg';

const mapIcon = L.icon({
    iconUrl: mapMarkerSvg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

export default mapIcon;