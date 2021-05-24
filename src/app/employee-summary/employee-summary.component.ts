import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css']
})
export class EmployeeSummaryComponent implements OnInit {
  employees: Employee[] = [];
  add: boolean = false;
  editEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = [];
    this.employeeService.getEmployeeDetails().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.employees.push(new Employee(res[i]));
      }
    });
  }

  loadEmployees(employees) {
    this.employees = [];
    for (let i = 0; i < employees.length; i++) {
      this.employees.push(new Employee(employees[i]));
    }
  }

  addEmployee() {
    this.editEmployee = undefined;
    this.add = true;
  }

  deleteEmployee(emp) {
    this.employeeService.deleteEmployee(emp).subscribe(res => {
      this.loadEmployees(res);
    });
  }

  updateEmployee(emp) {
    this.editEmployee = emp;
    this.add = true;
  }

}
