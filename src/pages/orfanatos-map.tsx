import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/pages/orphanages.css';
import Leaflet from 'leaflet';
import mapMarkerSvg from '../images/map-marker.svg';
import api from "../services/api";

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerSvg,
    iconAnchor: [29, 68],
    iconSize:[58, 68],
    popupAnchor: [170, 2]
});

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
};

function OrfanatosMap()
{
    
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]); //Retorna um array - Lista de Orphanatos e Função para atualiza a lista(setOrphanages)
  //Ao usar <Orphanage> você especif´ca que é um VETOR daquele objeto em questão

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []); //Executar função {} QUANDO ocorrer algo [] - SEMPRE USAR COM CHAMADA DE API - CONCEITO DE HOOKS

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Map"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita:</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>SP</span>
                </footer>
            </aside>

            <Map 
                center={[-23.5856,-46.6713861]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {orphanages.map(orphanage => {
                return (   
                <Marker
                    icon={mapIcon}
                    position={[orphanage.latitude, orphanage.longitude]}
                    key={orphanage.id}
                >

                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#fff" />
                </Link>
                </Popup>
                </Marker>
                )
            })};
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}


export default OrfanatosMap;