import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';

const routes: Routes = [
  { path: '', component: WorldMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
