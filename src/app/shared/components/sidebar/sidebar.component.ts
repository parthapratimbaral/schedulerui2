import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationDataService } from 'src/app/layouts/services/authentication-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  constructor(private router: Router, public authenticationDataService: AuthenticationDataService){

  }

  ngOnInit(): void {
    
  }

}
