import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!:number;
  header!:string;
  employee:any = {
    id:null,
    name:'',
    email:'',
    phone:null
  }; 
  constructor(private router:Router, private route:ActivatedRoute, private employeeService:EmployeesService) { 
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';
    if(this.id != 0){
      this.employee = this.employeeService.onGetEmployee(this.id);
    }
  }
  onSubmit(f:NgForm){
    let employee : Employees = {
      id:f.value.id,
      name:f.value.name,
      email:f.value.email,
      phone:f.value.phone
    }
    if(this.id === 0){
      this.employeeService.onAdd(employee);
    }
    else{
      this.employeeService.updateEmployee(employee);
    }
    
    this.router.navigateByUrl('');
  }
}
function onGetEmployee(id: any) {
  throw new Error('Function not implemented.');
}

