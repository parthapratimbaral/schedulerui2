import { Component , OnInit, ViewChild} from '@angular/core';
import { Appointment } from 'src/app/modules/appointments/appointments.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentDataService } from 'src/app/layouts/services/appointment-data.service';
import { NgForm, NgModel } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit{

  id: number
  appointment: Appointment;
  appointments: Appointment[];
  message!: string
  warnMessage!: string
  stop: string


  @ViewChild('appointmentForm') form: NgForm;

  constructor(private appointmentService: AppointmentDataService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.message = "";
    this.warnMessage = "";
    this.id = this.route.snapshot.params['id']
    if(this.id === undefined){
      this.id = -1;
    }
    if(this.id != -1){
      console.log("The ID of Appointment to be retrieved. "+this.id);
      this.appointmentService.retrieveAppointment(this.id)
          .subscribe(
              data => this.appointment = data
          )
      console.dir(" Retrieve data of ID "+ JSON.stringify(this.appointment));
      this.form.controls['patientName'].disable();
    }else{
      this.appointment = new Appointment(this.id, "","","", new Date(), new Date(), "","","","","");
      this.id = -1;
    }
  }

  saveAppointment() {
    if(this.id == -1){
      console.log(" Add appointment data");
       this.stop = this.isValidated(this.appointment)
      if( this.stop == 'true') {
          console.log(" Doctor name "+this.form.controls['doctorName'].value);
          this.appointmentService.createAppointmentService(this.appointment )
            .subscribe(
              data => {
                console.log(" Appointment Service called "+data);
                this.message = "Appointment save successfully."
              }
            )
          this.form.reset();
          this.warnMessage = "";
        }else{
          this.warnMessage = "Please fillup data correctly"
        }
    } else {
      console.log(" Update Appointment data "+this.id);
      this.appointmentService.updateAppointmentService(this.id, this.appointment)
        .subscribe(
          data => {
            console.log(data)
            this.message = `Appointment Updated successfully`;
            this.router.navigate(['appointments']);
          }
        )
    }
  }

 
  isValidated(appointment: Appointment){
    console.log(" DR Name" +appointment.doctorName );
    if(appointment.patientName =="")
      return 'false';
    else if(appointment.doctorName =="")
      return 'false';
    else if(appointment.appointmentTime =="")
      return 'false';
    else if(appointment.doctorSpeciality =="")
      return 'false';
    else
      return 'true';
  }

}
