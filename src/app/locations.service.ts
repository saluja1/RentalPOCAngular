import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { map, filter } from "rxjs/operators";
import  *  as  data  from  '../assets/catalog.json';
import * as AddLocations from './action/locations.actions'
import * as BreadCrumbActions from './action/breadcrumb.actions'
import { Store, select } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  currentLocation:string;
  currentBranch:string;
  currentCat:string;
  currentSubCat:string;
  constructor(private store: Store<[]>, private http: HttpClient) { }

  getLocations(){
    return this.http.get<[]>("../assets/catalog.json");
  }

  addLocations(locationsData:[]){
    this.store.dispatch(new AddLocations.AddLocations({locations: locationsData}) );
  } 

  getBranches(locationID): Observable<any>{
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    return locationsData = locationsData.pipe( 
      map(x => x.filter(x =>
        x["dealers_id"]==locationID
       )
      )
    );    
  }

  getCategories(locationID , branchID): Observable<any>{
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    return locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["branches"].filter( (data)=> data["branch_id"] == branchID ))));    
  }

  getSubCategories(locationID , branchID, categoryID): Observable<any>{
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    locationsData = locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["branches"].filter( (data)=> data["branch_id"] == branchID ))));    
    return locationsData.pipe(map( x =>  x.map(data => data.map( dataX => dataX["categories"].filter((dataF) => dataF["name"] == categoryID) ))))
  }

  getSubCategoryData(locationID , branchID, categoryID, subID){
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    locationsData = locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["branches"].filter( (data)=> data["branch_id"] == branchID ))));    
    return locationsData.pipe(map( x => x.map(data => data.map( dataX => dataX["categories"].filter((dataF) => dataF["name"] == categoryID) ).map( (dataC)=> dataC.map((dataSc) => dataSc["subcategories"].filter((dataSC) => dataSC["name"] == subID) ) )      )))
  }

  addBreadcrumbs(locationID = "", location = "", branchID="", branch="", category="", subcat=""){
    this.store.dispatch(new BreadCrumbActions.AddLocation(
      {locationID, location, branchID, branch, category, subcat}
      ) 
    );
  }

  getLocationbyID(locationID):any{
      var locationsData = this.store.select((data)=> data['locationsData'].locations )
      return locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["name"])));      
  }

  getBranchbyID(locationID, branchID):any{
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    return locationsData = locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["branches"].filter( (data)=> data["branch_id"] == branchID ).map(x => x["name"]))));    
  }
}
