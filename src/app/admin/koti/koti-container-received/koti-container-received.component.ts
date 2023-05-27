import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-koti-container-received',
  templateUrl: './koti-container-received.component.html',
  styleUrls: ['./koti-container-received.component.css']
})
export class KotiContainerReceivedComponent {

  importerNo= new FormControl();

  importerNoList:any;


  selectImagePan(data :any){

  }
}
