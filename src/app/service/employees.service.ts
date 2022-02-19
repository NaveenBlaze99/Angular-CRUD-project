import { Injectable } from '@angular/core';
import { Employees } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: Employees[] = [
    {
      id:1,
      name:'Blaze',
      email:'blaze@123',
      phone:123456789
    },
    {
      id:2,
      name:'Slash',
      email:'slash@123',
      phone:789456123
    }
  ];

  constructor() { }
  onGet(){
    return this.employees;
  }
  onAdd(employee:Employees){
    this.employees.push(employee);
  }
  onDelete(id:number){
    let emp:any=this.employees.find(x=>x.id === id);
    let index:any= this.employees.indexOf(emp,0);
    this.employees.splice(index,1);
  }
  onGetEmployee(id:number){
    return this.employees.find(x=>x.id === id);
  }
  updateEmployee(emp:Employees){
    let oldEmp:any = this.employees.find(x=>x.id === emp.id);
    oldEmp.name = emp.name;
    oldEmp.email = emp.email;
    oldEmp.phone = emp.phone;
  }
}
