import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { RouterModule } from '@angular/router';
import { LocationRoutingModule } from './location-routing.module';


@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
