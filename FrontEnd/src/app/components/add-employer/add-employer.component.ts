import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from 'src/app/services/employer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css']
})
export class AddEmployerComponent implements OnInit {

  employerForm = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    age: new FormControl('',[Validators.required, Validators.minLength(1)]),
    email: new FormControl('',[Validators.email, Validators.required])
  })

  constructor(public createEmployer: EmployerService, private router: Router) { }

  ngOnInit(): void {}

  get firstname(){return this.employerForm.get('firstname')}
  get lastname(){return this.employerForm.get('lastname')}
  get age(){return this.employerForm.get('age')}
  get email(){return this.employerForm.get('email')}


  handleAddEmployer(){
    if(this.employerForm.valid){
      this.createEmployer.AddEmployer(this.employerForm.value).subscribe(
        (): void => {},
        (err) => console.log(err),
        () => {
          this.employerForm.reset()
          this.router.navigateByUrl("/")
        }
      )
    }
  }

}
