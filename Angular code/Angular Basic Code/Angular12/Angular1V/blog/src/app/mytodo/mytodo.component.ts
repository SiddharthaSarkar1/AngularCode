import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytodo',
  templateUrl: './mytodo.component.html',
  styleUrls: ['./mytodo.component.css']
})
export class MytodoComponent implements OnInit {

  list:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  addTask(item:string){
    console.warn(item);
    this.list.push({id:this.list.length, task:item});
    console.warn(this.list);
  }

  removeTask(id:number){
    console.warn(id);
    this.list = this.list.filter(item=>item.id!==id);
  }
}
