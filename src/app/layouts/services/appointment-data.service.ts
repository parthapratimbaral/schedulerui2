import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../../modules/appointments/appointments.component';
import { API_URL } from 'src/app/app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {

  constructor(private http:HttpClient) { 

  }

  retrieveListOfAppointments(username: string){
    console.log("call through Http client appointment data service "+username);
    if(username === 'ankur'){
      return this.http.get<Appointment[]>(`${API_URL}/gateway/api/appointments?doctorName=`+username);
      
    }else if(username === 'soumen'){
      return this.http.get<Appointment[]>(`${API_URL}/gateway/api/appointments?doctorName=`+username);

    }else if(username === 'subrata'){
      return this.http.get<Appointment[]>(`${API_URL}/gateway/api/appointments?doctorName=`+username);

    }else{
      return this.http.get<Appointment[]>(`${API_URL}/gateway/api/appointments`);

    }
    
  }

  updateAppointmentService(id:number, appointment: Appointment){
    console.log("Update appointment service "+id);
    return this.http.put(`${API_URL}/gateway/api/appointments/${id}`, appointment);
  }

  retrieveAppointment(id: number){
    console.log("call through Http client appointment data service "+id);
    return this.http.get<Appointment>(`${API_URL}/gateway/api/appointments/`+id);
  }

  createAppointmentService(appointment: Appointment){
    console.log("Create appointment data service ");
    return this.http.post(`${API_URL}/gateway/api/appointments`, appointment);
  }


}
