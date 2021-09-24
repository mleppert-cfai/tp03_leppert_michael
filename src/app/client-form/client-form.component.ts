import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  constructor() { }

  name : string = "";
  surname : string = "";
  civilite : string = "";
  address : string = "";
  city : string = "";
  zipCode : string = "";
  email : string = "";
  phone : string = "";
  login : string = "";
  password : string = "";
  confirmPassword : string = "";

  onSubmit() : void {

  }

  ngOnInit(): void {
  }

}
