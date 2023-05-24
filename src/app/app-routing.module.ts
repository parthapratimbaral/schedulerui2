import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DoctorComponent } from './modules/doctor/doctor.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { PatientsComponent } from './modules/patients/patients.component';
import { FullscreenComponent } from './layouts/fullscreen/fullscreen.component';
import { AppointmentComponent } from './modules/appointment/appointment.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { RouteGuardService } from './layouts/services/route-guard.service';

const routes: Routes = [{
      path: '',
      component: DefaultComponent,
      canActivate: [RouteGuardService],
      children: [{
        path: 'home',
        component: HomeComponent,
        //component: DashboardComponent,
        canActivate: [RouteGuardService]
      }, {
        path: 'patients',
        component: PatientsComponent,
        canActivate: [RouteGuardService]
      }, {
        path: 'appointment',
        component: AppointmentComponent,
        canActivate: [RouteGuardService]
      }, {
        path: 'appointments',
        component: AppointmentsComponent,
        canActivate: [RouteGuardService]
      }, {
        path: 'appointments/:id',
        component: AppointmentComponent,
        canActivate: [RouteGuardService]
      }, {
        path: 'dashboard',
        component: DashboardComponent,
      }, {
        path: 'doctors',
        component: DoctorComponent,
        canActivate: [RouteGuardService]
      }, {
        path: 'about',
        component: AboutComponent,
        canActivate: [RouteGuardService]
      }]
    }, {
      path: '',
      component: FullscreenComponent,
      children: [{
        path: 'login',
        component: LoginComponent,
       }, { 
        path: 'logout',
        component: LogoutComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

