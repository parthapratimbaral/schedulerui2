import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationDataService {

  user: string
  roll: string
  displayName:string
  isDoctorRoll: boolean

  constructor(private http:HttpClient) { 

  }

  authenticate(username: string, password: string){
    console.log(" Authenticate started : ");
    if(username==='partha' && password==='dummy'){
      this.user = username;
      this.prepareRollForUser(this.user);
      console.log(" Authenticate success for Partha: ");
      sessionStorage.setItem('authenticatedUser', username)
      sessionStorage.setItem('ROLL', this.roll);
      
      return true;

    } else if(username==='sutapa' && password==='dummy'){
      this.user = username;
      this.prepareRollForUser(this.user);
      console.log(" Authenticate success for Sutapa: ");
      sessionStorage.setItem('authenticatedUser', username)
      sessionStorage.setItem('ROLL', this.roll);
      return true;
      
    }else if(username==='ankur' && password==='dummy'){
      this.user = username;
      this.prepareRollForUser(this.user);
      console.log(" Authenticate success for Ankur: ");
      sessionStorage.setItem('authenticatedUser', username)
      sessionStorage.setItem('ROLL', this.roll);
      return true;
      
    }else if(username==='soumen' && password==='dummy'){
      this.user = username;
      this.prepareRollForUser(this.user);
      console.log(" Authenticate success for Soumen: ");
      sessionStorage.setItem('authenticatedUser', username)
      sessionStorage.setItem('ROLL', this.roll);
      return true;
      
    }else if(username==='subrata' && password==='dummy'){
      this.user = username;
      this.prepareRollForUser(this.user);
      console.log(" Authenticate success for Subrata: ");
      sessionStorage.setItem('authenticatedUser', username)
      sessionStorage.setItem('ROLL', this.roll);
      return true;

    }else{
      console.log(" Authenticate fails : ");
      return false;
    }
    
  }

  getUserName(){
    return this.user;
  }
  getUserRoll(){
    return this.roll;
  }
  isUserDoctor(){
    if(this.isDoctorRoll === true)
      return true;
    else
      return false;
  }
  getUserDisplayName(){
    return this.displayName;
  }

  prepareRollForUser(user: string){
    if(this.user ==='partha'){
      this.roll = 'Admin';
      this.displayName = 'Partha Pratim Baral';

    }else if(this.user ==='sutapa'){
      this.roll = 'Secretary';
      this.displayName = 'Sutapa Baral';

    }else if(this.user ==='ankur'){
      this.roll = 'Doctor';
      this.isDoctorRoll = true;
      this.displayName = 'Dr. Ankur Baral';
    }else if(this.user ==='soumen'){
      this.roll = 'Doctor';
      this.isDoctorRoll = true;
      this.displayName = 'Dr. Soumen Das';
    }else if(this.user ==='subrata'){
      this.roll = 'Doctor';
      this.isDoctorRoll = true;
      this.displayName = 'Dr. Subrata Roy';
    }else{

    }

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('ROLL')
  }
}
