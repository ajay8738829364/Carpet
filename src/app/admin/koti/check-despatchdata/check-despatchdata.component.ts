import { Component, OnInit } from '@angular/core';
import { KotiService } from 'src/app/services/koti.service';

@Component({
  selector: 'app-check-despatchdata',
  templateUrl: './check-despatchdata.component.html',
  styleUrls: ['./check-despatchdata.component.css']
})
export class CheckDespatchdataComponent implements OnInit{

  constructor(private service : KotiService){}
  ngOnInit(): void {
    this.getExcel();
  }
  getExcel(){
    this.service.getExcelData().subscribe((resp)=>{
      console.log(resp.data[0].count);
    });
  }
}
