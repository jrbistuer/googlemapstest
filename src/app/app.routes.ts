import { Routes } from '@angular/router';
import {MapComponent} from "./app/map/map.component";

export const routes: Routes = [
  {
    path: '',
    component: MapComponent

  },
  {
    path: '**',
    redirectTo: '/'
  }
];
