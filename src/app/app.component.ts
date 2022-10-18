import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';


  formdata:any;
  password="";
  email="";
  ngOnInit() {
    this.formdata = new FormGroup({
       email: new FormControl("",  Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
     ])),
       password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
       ]))
    });
 }

 Submit(data:any)


  {this.email = data.email;
   this.password =data.password


}}
