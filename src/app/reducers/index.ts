import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as locationsData from './locations.reducer';
import * as braedCrumbData from './breadcrumb.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
	locationsData : locationsData.locationsReducers,
	braedCrumbData : braedCrumbData.breadcrumbReducers
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
