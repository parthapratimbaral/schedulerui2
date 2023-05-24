import { Component, OnInit } from '@angular/core';
import { AuthenticationDataService } from 'src/app/layouts/services/authentication-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(public authenticationDataService: AuthenticationDataService) {

  }

  ngOnInit(): void {
    
  }
}
