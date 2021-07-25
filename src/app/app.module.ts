import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LocationModule } from './location/location.module';
import { BranchModule } from './branch/branch.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { LocationmenublockModule } from './locationmenublock/locationmenublock.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HeaderModule,
    LocationModule,
    BranchModule,
    AppRoutingModule,
    CategoryModule,
    SubcategoryModule,
    HomeModule,
    BreadcrumbsModule,
    LocationmenublockModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
