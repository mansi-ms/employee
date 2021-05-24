import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../services/employee.service';
import { EmployeeSummaryComponent } from './employee-summary.component';
import { from } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmployeeSummaryComponent', () => {
  let component: EmployeeSummaryComponent;
  let fixture: ComponentFixture<EmployeeSummaryComponent>;
  let employeeService: EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSummaryComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSummaryComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch employee list', () => {
    const spy = spyOn(employeeService, 'getEmployeeDetails').and.callFake(() => {
      return from([{}]);
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.employees).toBeDefined();
  });
});
