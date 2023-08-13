import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../department.interface';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  public departments: Array<IDepartment> = [{id: 1, name: 'Manager'}, {id: 2, name: 'Clerk'}, {id: 3, name: 'Cashier'}];

  public deptId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public resetDept(){
    console.log(this.deptId);
  }

}
