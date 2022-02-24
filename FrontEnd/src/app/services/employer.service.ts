import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  commonURL = 'http://localhost:3001/crude/'

  employerData:any = null


  constructor( private http: HttpClient ) { }

  Home():Observable<any>{
    return this.http.get(`${this.commonURL}`)
  }

  AddEmployer( employerData:any ):Observable<any>{
    return this.http.post(`${this.commonURL}register`, employerData)
  }

  DeleteEmployer( _id:any):Observable<any>{
    return this.http.delete(`${this.commonURL}${_id}`)
  }

  DeleteAll():Observable<any>{
    return this.http.delete(`${this.commonURL}`)
  }


  EditEmployer(_id:any, employerData:any):Observable<any>{
    return this.http.patch(`${this.commonURL}edit/${_id}`, employerData)
  }
}
