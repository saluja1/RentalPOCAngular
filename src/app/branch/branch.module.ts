import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { RouterModule } from '@angular/router';
import { BranchRoutingModule } from './branch-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BranchRoutingModule,
    LazyLoadImageModule
  ]
})
export class BranchModule { }
