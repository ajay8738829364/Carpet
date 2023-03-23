import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { global } from 'src/app/shared/global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public frmRegister!: FormGroup;
  open: boolean = true;
  hide = true;

  responsMessage: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: SnackBarService,
    private userService: UserAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.frmRegister = this._formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.minLength(3),
        ],
      ],
      password: [
        '',
        [
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'
          ),
        ],
      ],
      mobile: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      // image: [''],
      // type: [''],
      // address: ['', [Validators.required]],
      // gender: [''],
    });
  }

  register() {
    const formData = this.frmRegister.value;

    var data = {
      name: formData.name,
      password: formData.password,
      mobile: formData.mobile,
      email: formData.email,
      
    };




    this.userService.register(data).subscribe(
     (response:any) => {
      debugger
        this.responsMessage=response.msg;
        this._snackBar.openSnackBar(this.responsMessage, '');
        this.router.navigate(['/']);
      },
      (error: any) => {
debugger
        if (error.error.msg) {
          this.responsMessage = error.error.msg;
        } else {
          this.responsMessage =global.genricError;
        }
        this._snackBar.openSnackBar(this.responsMessage, global.error);
        console.log('data', data);
      }
    );


  }
}
