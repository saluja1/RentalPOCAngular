import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationmenublockComponent } from './locationmenublock.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LocationmenublockComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[LocationmenublockComponent]
})
export class LocationmenublockModule { }
