import { Component, OnInit } from '@angular/core';
import {SignInForm} from '../../../model/signInForm';
import {AuthService} from '../../../service/auth.service';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;
  signInForm: SignInForm;
  status = 'please in the form to login';
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    console.log('check---------->', localStorage.getItem('SUCCESS_KEY'));
    if (localStorage.getItem('SUCCESS_KEY') != null) {
      this.status = localStorage.getItem('SUCCESS_KEY');
    } else {
      this.status = 'Đăng nhập thất bại!';
    }
  }
login(){
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    this.authService.signIn(this.signInForm).subscribe(data => {
      console.log('data---->', data);

      if (data.token != undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setAvatar(data.avatar);
        this.tokenService.setRole(data.roles);
        localStorage.removeItem('SUCCESS_KEY')
        // @ts-ignore
        this.router.navigate(['home']).then(()=>{
          location.reload();
        });
      }
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      if (data.status == 202){
       this.status = 'login failed';
      }
    });
}
}
