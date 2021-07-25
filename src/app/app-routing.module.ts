import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'location/:locationID',
    loadChildren: () => import('./location/location.module').then(x => x.LocationModule)
  },
  {
    path: 'location/:locationID/branch/:branchID',
    loadChildren: () => import('./branch/branch.module').then(x => x.BranchModule)
  },
  {
    path: 'location/:locationID/branch/:branchID/category/:categoryID',
    loadChildren: () => import('./category/category.module').then(x => x.CategoryModule)
  },
  {
    path: 'location/:locationID/branch/:branchID/category/:categoryID/sub/:subID',
    loadChildren: () => import('./subcategory/subcategory.module').then(x => x.SubcategoryModule)
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
