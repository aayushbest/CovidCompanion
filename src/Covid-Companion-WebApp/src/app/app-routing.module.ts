import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { LocationsComponent } from './patient/locations/locations.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { BootstrapperComponent } from './bootstrapper/bootstrapper.component';


const routes: Routes = [
  {path: 'doctors', component: DoctorDashboardComponent},
  {path: 'patients', component: PatientDashboardComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'faqs', component: FaqComponent},
  {path: '', pathMatch: 'full', component: BootstrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
