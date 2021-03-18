import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-profilepageComponent
import { profilepageComponent } from '../components/profilepageComponent/profilepage.component';
//CORE_REFERENCE_IMPORT-loginpageComponent
import { loginpageComponent } from '../components/loginpageComponent/loginpage.component';
//CORE_REFERENCE_IMPORT-editincidentComponent
import { editincidentComponent } from '../components/editincidentComponent/editincident.component';
//CORE_REFERENCE_IMPORT-deleteincidentComponent
import { deleteincidentComponent } from '../components/deleteincidentComponent/deleteincident.component';
//CORE_REFERENCE_IMPORT-incidentdetailsComponent
import { incidentdetailsComponent } from '../components/incidentdetailsComponent/incidentdetails.component';
//CORE_REFERENCE_IMPORT-addincidentComponent
import { addincidentComponent } from '../components/addincidentComponent/addincident.component';
//CORE_REFERENCE_IMPORT-incidentmainComponent
import { incidentmainComponent } from '../components/incidentmainComponent/incidentmain.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profilepageComponent
profilepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginpageComponent
loginpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editincidentComponent
editincidentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-deleteincidentComponent
deleteincidentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-incidentdetailsComponent
incidentdetailsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addincidentComponent
addincidentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-incidentmainComponent
incidentmainComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'incidentpage', component: incidentmainComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'incidentdetails', component: incidentdetailsComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'loginpage', component: loginpageComponent},{path: 'profile', component: profilepageComponent},{path: '', redirectTo: 'incidentpage', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
