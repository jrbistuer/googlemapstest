import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow} from "@angular/google-maps";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker, MatProgressSpinnerModule, MapInfoWindow, MatIcon],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{

  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  display!: google.maps.LatLngLiteral;
  options!: google.maps.MapOptions;

  properties = [
    {
      direccion: 'Carrer de Mallorca, 401, 08013 Barcelona, España',
      title: 'Posicion 1',
      descripcion: 'Cerca de la Sagrada Familia',
      posicion: {
        lat: 41.4036299,
        lng: 2.1743558
      }
    },
    {
      direccion: 'La Rambla, 91, 08002 Barcelona, España',
      title: 'Posicion 2',
      descripcion: 'Cerca del Mercado de La Boqueria',
      posicion: {
        lat: 41.3825648,
        lng: 2.1722458
      }
    },
    {
      direccion: 'Passeig de Gràcia, 43, 08007 Barcelona, España',
      title: 'Posicion 3',
      descripcion: 'Cerca de la Casa Batlló',
      posicion: {
        lat: 41.3916407,
        lng: 2.1651224
      }
    },
    {
      direccion: 'Parc Güell, 08024 Barcelona, España',
      title: 'Posicion 4',
      descripcion: 'Parque Güell',
      posicion: {
        lat: 41.4144949,
        lng: 2.1526944
      }
    },
    {
      direccion: 'Avinguda Diagonal, 686, 08034 Barcelona, España',
      title: 'Posicion 5',
      descripcion: 'Cerca del Camp Nou',
      posicion: {
        lat: 41.3808961,
        lng: 2.1228208
      }
    }
  ];

  ngOnInit() {
    this.initMap();
  }

  async initMap() {

    const location: google.maps.LatLngLiteral = await this.getCurrentLocation();
    this.center = location;
    this.display = location;

    this.options = {
      zoom: 12
    };

  }

  openInfoWindow(marker: any, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
  }

  getCurrentLocation(): Promise<google.maps.LatLngLiteral> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              console.log(
                'Latitude: ' +
                position.coords.latitude +
                'Longitude: ' +
                position.coords.longitude
              );
              let lat = position.coords.latitude;
              let lng = position.coords.longitude;

              const location = {
                lat,
                lng,
              };
              resolve(location);
            }
          },
          (error) => console.log(error)
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

}
