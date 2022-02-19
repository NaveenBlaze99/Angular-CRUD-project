import { Component, OnInit } from '@angular/core';
import { Employees } from '../models/employee.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees!:Employees[] ;
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
  onDel(id:number){
    this.employeeService.onDelete(id);
  }

}
