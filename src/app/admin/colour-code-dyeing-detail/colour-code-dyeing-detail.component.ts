import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-colour-code-dyeing-detail',
  templateUrl: './colour-code-dyeing-detail.component.html',
  styleUrls: ['./colour-code-dyeing-detail.component.css']
})
export class ColourCodeDyeingDetailComponent {


  exportQuality = new FormControl('');

  exportQualityList: string[] = ['q1','q2'];

  public arrayColors: any = {

    color2: '#e920e9',

  };

  public color2: string = '';
}
