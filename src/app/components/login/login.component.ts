import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    //Validations
    this.login = this.fb.group({
      username: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }
 
  // Form Declaration 
  login: FormGroup;

  //Validations Methods
  validationError(controlName: string): boolean {
    return this.login.get(controlName).invalid && (this.login.get(controlName).dirty || (this.login.get(controlName).touched))
  }
  controlError(controlName: string, errorName: string): boolean {
    return this.login.get(controlName).hasError(errorName) && this.validationError(controlName)
  }

  get loginValues(){
    return this.login.controls;
  }

  loginProcess() {
    this.authService.login(this.loginValues.username.value, this.loginValues.password.value).subscribe(() => {
      console.log("It works");
      this.route.navigate(['home']);
    },
    (err) => {
      console.error(err);
    })
  }

   
  


}
