import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm = new FormGroup({
    firstname: new FormControl(`${this.EditEmployer.employerData.firstname}`, []),
    lastname: new FormControl(`${this.EditEmployer.employerData.lastname}`, []),
    age: new FormControl(`${this.EditEmployer.employerData.age}`, []),
    email: new FormControl(`${this.EditEmployer.employerData.email}`, []),
  })

  constructor(public EditEmployer: EmployerService, private router: Router) { }

  ngOnInit(): void {
    
  }

  get firstname(){return this.editForm.get('firstname')}
  get lastname(){return this.editForm.get('lastname')}
  get age(){return this.editForm.get('age')}
  get email(){return this.editForm.get('email')}

  handleEdit(){
    if(this.editForm.valid){
      this.EditEmployer.EditEmployer(this.EditEmployer.employerData._id, this.editForm.value).subscribe(
        (res) => { console.log(res.Message)},
        (err) => { console.log(err)},
        () => {this.router.navigateByUrl('/')}
      )
    }
   
  }
}
