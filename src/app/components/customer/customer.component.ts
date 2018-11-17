import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public awesomeForm = this.formBuilder.group({
    firstName: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(20)])],
    lastName: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(20)])],
    email:  ['', Validators.email]
  })


  ngOnInit() {
  }


  onSubmit() {
    if (this.awesomeForm.valid) {

      console.log('form valid')

      console.log('form Value ', this.awesomeForm.value)
    }
    
  }

}
