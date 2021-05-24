import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { designations, Employee } from '../models/employee.model'
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnChanges {
  positions = designations;
  addEmployee: FormGroup;
  fullName: string;
  address: string;
  position: string;
  phoneNumber: number;
  formValid: boolean = false;
  @Output() loadEmployees: EventEmitter<any> = new EventEmitter();
  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnChanges() {
    this.addEmployee = new FormGroup({
      'fullName': new FormControl(this.fullName),
      'address': new FormControl(this.address),
      'position': new FormControl(this.position),
      'phoneNumber': new FormControl(this.phoneNumber)
    });

    if (this.employee) {
      this.addEmployee.get('fullName').setValue(this.employee.fullName);
      this.addEmployee.get('address').setValue(this.employee.address);
      this.addEmployee.get('phoneNumber').setValue(this.employee.phoneNumber);
      this.addEmployee.get('position').setValue(this.positions.indexOf(this.employee.position) + 1);
    }

    this.addEmployee.valueChanges.subscribe(() => {
      if (this.addEmployee.controls.fullName.invalid || this.addEmployee.controls.address.invalid || this.addEmployee.controls.phoneNumber.invalid ||
        this.addEmployee.controls.position.invalid) {
        this.formValid = false;
      }
      else {
        this.formValid = true;
      }
    });
  }

  saveEmployee(employee) {
    const emp: Employee = {
      'fullName': employee.controls.fullName.value,
      'address': employee.controls.address.value,
      'phoneNumber': employee.controls.phoneNumber.value,
      'position': employee.controls.position.value
    }

    this.employeeService.saveEmployeeDetails(emp).subscribe(res => {
      this.loadEmployees.emit(res);
      //assuming the method returns the updated list of employees
    });
  }

}
