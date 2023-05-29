import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar : MatSnackBar) { }

  openSnackBar(message:string, action:string){
    debugger
    if(action === 'error'){
      this._snackBar.open(message,'',{
        horizontalPosition:'right',
        verticalPosition:'top',
        duration:2000,
        panelClass:['black-snackbar']
      });
    }

    else{
      this._snackBar.open(message,'',{
        horizontalPosition:'right',
        verticalPosition:'top',
        duration:2000,
        panelClass: ['green-snackbar']

      });

    }
  }

}
