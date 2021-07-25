import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LocationmenublockModule } from '../locationmenublock/locationmenublock.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LocationmenublockModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
