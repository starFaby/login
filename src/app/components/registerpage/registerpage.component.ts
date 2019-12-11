import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit() {
  }
  onSubmitAddUser() {
    this.authService.onRegisterUser(this.email, this.password)
      .then((res) => {
        this.route.navigate(['/private']);
      }).catch((err) => {
        console.log(err);
      });
  }
}
