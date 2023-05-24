import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentDataService } from 'src/app/layouts/services/appointment-data.service';
import { AuthenticationDataService } from 'src/app/layouts/services/authentication-data.service';




export class Appointment {
  
  constructor(
    public id: number,
    public patientName: string,
    public indication: string,
    public doctorName: String,
    public appointmentDate: Date,
    public createdDate: Date,
    public appointmentTime: string,
    public appointmentDuration: string,
    public doctorSpeciality: string,
    public status: string,
    public doctorFee: string
  )
  {

  }
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})



export class AppointmentsComponent implements OnInit{

  appointments: Appointment[]
  message: string
  username: string
  userRoll: string
  patientName: String
  page: number = 1
  key : any
  reverse: boolean = false

  constructor(private appointmentDataService: AppointmentDataService,
              public  authenticationDataService: AuthenticationDataService,
              private router: Router, 
              private route: ActivatedRoute){
    
  }

  ngOnInit() {
    this.username = this.authenticationDataService.getUserName();
    this.userRoll = this.authenticationDataService.getUserRoll();
    console.log(" Username "+this.username + " Doctor "+this.authenticationDataService.isUserDoctor);
    console.log(" AppointmentsComponent TS username "+this.username);
    this.refreshList();
  }

  refreshList(){
    this.appointmentDataService.retrieveListOfAppointments(this.username).subscribe(
      response =>{
        console.log(response)
        this.appointments =response;
      }
    );
  }

  updateAppointment(id: number){
    console.log(`Update appointment ${id}`);
    this.router.navigate(['appointments',id]);
  }

  addAppointment(){
    console.log("Add Appointment from Appointments list page");
    this.router.navigate(['appointments',-1]);
  }
  sortBy(){
    console.log("Sort By called");

  }

  search()  {
    console.log("Search By called ");
    if(this.patientName == ''){
      this.ngOnInit()
    }else{
      this.appointments = this.appointments.filter(
        res => {
          return res.patientName.toLocaleLowerCase().match(this.patientName.toLocaleLowerCase())
        })
    }
  }
  
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
