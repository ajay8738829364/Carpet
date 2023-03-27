import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent {


  product = new FormControl('');

  productList: string[] = []
  onGroupSelectList(event:any){

  }
}
