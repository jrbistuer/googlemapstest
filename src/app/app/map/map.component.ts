import {Component, OnInit} from '@angular/core';
import {GoogleMap, MapAdvancedMarker} from "@angular/google-maps";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{

  center!: google.maps.LatLngLiteral;
  zoom = 4;
  display!: google.maps.LatLngLiteral;
  options!: google.maps.MapOptions;
  testPin!: google.maps.marker.PinElement;

  ngOnInit() {
    this.initMap();
  }

  async initMap() {

    const location: google.maps.LatLngLiteral = await this.getCurrentLocation();
    this.center = location;
    this.display = location;

    this.options = {
      zoom: 15
    };

    this.testPin = new google.maps.marker.PinElement({
      scale: 1.5,
    });

  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng!.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }

  buildContent(property: any) {
    const content = document.createElement("div") as HTMLElement;
    content.className = 'custom-marker-elem';
    content.innerHTML = '<div style="color:black">Hello World!</div>'
    return content;
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
