import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { global } from 'src/app/shared/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public frmLogin!: FormGroup;

  hide:boolean=true;
responseMessage:any;

  constructor(private _formBuilder: FormBuilder, private userService : UserAuthService, private router : Router , private _snackBar : SnackBarService) {}
  ngOnInit(): void {
    this.frmLogin = this._formBuilder.group({

      password: ['',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],

      mobile: ['',[Validators.required]],

    });
  }



  login() {

    const formData = this.frmLogin.value;
    var data={
      password :formData.password,
      mobile:formData.mobile
    }


    this.userService.login(data).subscribe((resp:any)=>{

      this.responseMessage = resp.message;
      localStorage.setItem('token',resp.token);
      var to = localStorage.getItem('token');
      console.log(to);
      this._snackBar.openSnackBar(this.responseMessage,'');
      this.router.navigate(['/admin/dashboard']);

    },    (error: any) => {
      debugger
              if (error.error.message) {
                this.responseMessage = error.error.message;
              } else {
                this.responseMessage =global.genricError;
              }
              this._snackBar.openSnackBar(this.responseMessage, global.error);
              console.log('data', data);
            }
    );


    console.log(data);

  }
}
