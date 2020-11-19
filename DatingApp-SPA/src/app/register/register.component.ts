import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  constructor(private authservice: AuthService) { }

  @Output() cancelRegister = new EventEmitter();

  ngOnInit(): void {

  }
  register() {
    console.log(this.model);
    this.authservice.register(this.model).subscribe(() => {
      console.log('registration successfull');
    }, error => {
      console.log(error);
    });
  }
  cancel() {
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}
