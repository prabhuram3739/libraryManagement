import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  router: Router;
  password: string;
  email:string;

  constructor(_router: Router) {
    this.router = _router;
   }

  ngOnInit() {
  }

  onSubmit() {
    if(this.password==="1234" && this.email==="abc@a.com"){
      this.router.navigateByUrl('/home');
    }    
  }
}
