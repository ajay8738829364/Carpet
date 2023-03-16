import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar : MatSnackBar) { }

  openSnackBar(message:string, action:string){
    debugger
    if(action === 'error'){
      this._snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:50000,
        panelClass:['black-snackbar']
      });
    }

    else{
      this._snackBar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:50000,
        panelClass: ['green-snackbar']

      });

    }
  }

}
