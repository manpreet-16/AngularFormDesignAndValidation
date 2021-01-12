import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  singup! : FormGroup;

  constructor(private fb : FormBuilder) {
    this.signupForm();
   }

  ngOnInit(): void {
  }

  signupForm(){
    this.singup = this.fb.group({
     name: [''],
     password :[''],
     comfirmpassword:['']
    });
  }
}
