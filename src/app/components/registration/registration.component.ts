import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';  
  password = '';
  email = '';
  value1 = ''
  value2 = ''
  value3 = ''
  constructor(private router: Router) {}
}
