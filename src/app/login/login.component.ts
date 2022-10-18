import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

   onClickSubmit(data:any) {
      alert("Entered Email id : " + data.emailid);
      alert("Entered password : " + data.passwd);
   }
  ngOnInit(): void {
  }

}
