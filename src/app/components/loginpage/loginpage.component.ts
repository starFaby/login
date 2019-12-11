import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmitLogin() {
    this.authService.onLoginEmail(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/private']);
      }).catch((err) => {
        console.log(err);
        this.router.navigate(['/login']);
      });
  }
}
