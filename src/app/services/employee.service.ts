import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<any> {
    return this.http.get("assets/json/data.json");
  }

  saveEmployeeDetails(emp): Observable<any> {
    //replace dummyUrl with api endpoint in the below line
    //return this.http.post("dummyUrl", emp);

    // for testing application fetching the sample json again 
    // assuming the backend would return updated list of employees
    // comment the below line for actual service and uncomment line 27 replacing the api endpoint
    return this.http.get("assets/json/data.json");
  }

  deleteEmployee(emp) {
    //replace dummyUrl with api endpoint in the below line
    //return this.http.post("dummyUrl", emp);

    //for testing application fetching the sample json again 
    //assuming the backend would return updated list of employees
    //comment the below line for actual service and uncomment line 27 replacing the api endpoint
    return this.http.get("assets/json/data.json");
  }
}
