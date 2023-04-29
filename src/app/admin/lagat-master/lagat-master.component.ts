import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lagat-master',
  templateUrl: './lagat-master.component.html',
  styleUrls: ['./lagat-master.component.css']
})
export class LagatMasterComponent {




  quality=new FormControl('');
  qualityList:any;

  design=new FormControl('');
  designList:any;

}
