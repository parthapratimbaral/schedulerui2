import { Component, OnInit } from '@angular/core';
import { AuthenticationDataService } from 'src/app/layouts/services/authentication-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent implements OnInit{

  constructor(private authenticationDataService: AuthenticationDataService) {

  }

  ngOnInit(): void {
    this.authenticationDataService.logout();
  }

}
