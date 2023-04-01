import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-finishing-process',
  templateUrl: './finishing-process.component.html',
  styleUrls: ['./finishing-process.component.css']
})
export class FinishingProcessComponent {



  job = new  FormControl('')
  jobList:string[]=['job 1','job 2'];


  exportQuality = new FormControl('');

  exportQualityList: string[] = ['q1','q2'];

  design=new FormControl('');
  designList: string[]=['d1','d2'];
}
