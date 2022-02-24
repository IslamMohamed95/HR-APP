import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employers: any = []
  msg = ""
  searchBox:any
  checkDataLength:Boolean = false

  constructor(public allEmployers: EmployerService, private router: Router) { 
    allEmployers.Home().subscribe(
      (res) =>{
        if(this.employers.length <= 0){
          this.employers = res.Data
        }else {
          this.msg = res.Message
        }
      }, (err) => {console.log(err)}
    )
  }

  ngOnInit(): void {
  }

  handleDelete(employer:any){
    this.allEmployers.DeleteEmployer(employer._id).subscribe(
      (): void => {
        this.employers.splice(this.employers.indexOf(employer), 1)
      },
      (err) => {console.log(err)}
    )
  }

  handleEditButt(employer:any){
    this.allEmployers.EditEmployer(employer._id, employer).subscribe(
      (res) => {
        this.allEmployers.employerData = employer
        console.log(employer)
      },
      (err) => {console.log(err)},
      () => {
        this.router.navigateByUrl(`/edit`)
      }
    )
  }

  handleDeleteAll(){
    if(this.employers.length > 0) {
      this.allEmployers.DeleteAll().subscribe(
        res => {
          console.log(res.Message)
          this.employers = []
          this.checkDataLength = !this.checkDataLength
        },
        err => {console.log(err)}
      )
    }
    }
    

}

