import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SignUpForm} from '../../model/signUpForm';
import {AuthService} from '../../service/auth.service';
import {error} from 'protractor';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
form: any = {};
emailFormControl = new FormControl('', [ Validators.email]);
  hide = true;
  signUpForm: SignUpForm;
  status = 'please fill in the form account';


  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
register(){
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    // this.authService.signUP(this.signUpForm).subscribe(data =>)
    this.authService.signUP(this.signUpForm).subscribe(data => {
      console.log('data===>', data);
      if (data.message === 'nouser'){
        this.status = 'username is existed, please try again';
        return;
      }
      if (data.message === 'noemail') {
       this.status = 'email no existed';
       return;
      }
      if (data.message === 'yes') {
        this.status = 'create account success';
        this.router.navigate(['login']).then(()=>{
          location.reload();
        });

        return;
      }

      // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        console.log('error-----', error);
        this.status = 'mail invalid';
        return;
    });
}
}
