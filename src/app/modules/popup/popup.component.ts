import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(private ref: MatDialogRef<PopupComponent>){

  }

  closePopup(){
    console.log("Popup")
    this.ref.close();
  }

}
