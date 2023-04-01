import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-colour-shade-card',
  templateUrl: './colour-shade-card.component.html',
  styleUrls: ['./colour-shade-card.component.css']
})
export class ColourShadeCardComponent {



  exportQuality = new FormControl('');

  exportQualityList: string[] = ['q1','q2'];
  design=new FormControl('');
  designList: string[]=['d1','d2'];
}
