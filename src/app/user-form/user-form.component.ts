import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  singup! : FormGroup;
  email : string = "";
  password : string ="";
  confirmpassword:string="";
  isDetailShow:boolean=false;

  constructor(private fb : FormBuilder) {
    this.signupForm();
   }

  ngOnInit(): void {
  }

  signupForm(){
    this.singup = this.fb.group({
     name: [''],
     password :[''],
     confirmpassword:['']
    });
  }

  SubmitSignUpForm(){
    this.email = this.singup.controls['name'].value;
    this.password = this.singup.controls['password'].value
    this.confirmpassword = this.singup.controls['confirmpassword'].value
    }

    showDetails(){
      this.isDetailShow=true;
    }
}
