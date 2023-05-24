import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { PatientsComponent } from 'src/app/modules/patients/patients.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DoctorComponent } from 'src/app/modules/doctor/doctor.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentsComponent } from 'src/app/modules/appointments/appointments.component';
import { AppointmentComponent } from 'src/app/modules/appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AppointmentComponent,
    AppointmentsComponent,
    PatientsComponent,
    DashboardComponent,
    DoctorComponent,
    AboutComponent,  
    OrderByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DefaultModule { }
