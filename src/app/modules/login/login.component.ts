import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationDataService } from 'src/app/layouts/services/authentication-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username: string
  password: string
  errorMessage ='invalid Credentials'
  invalidLogin = false

  constructor(private router: Router, private authenticationDataService: AuthenticationDataService,) {


  }

  ngOnInit(): void {

    
  }

  handleLogin(){
    console.log(" Login started")
    if(this.authenticationDataService.authenticate(this.username, this.password)){
      this.router.navigate(['appointments'])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
    console.log(this.username)
    console.log(this.password)
    console.log(this.invalidLogin)
  }

}
