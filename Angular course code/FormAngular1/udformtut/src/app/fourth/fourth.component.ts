import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  food = [
    {id: 1, select:false, name: 'Dumpling'},
    {id: 2, select:true, name: 'Burger'},
    {id: 3, select:false, name: 'Sandwitch'}
];

  constructor() { }

  ngOnInit(): void {
  }

  onchangeFood(event: any){
    const id = event.target.value;
    const ischecked = event.target.checked;
    console.log('id : '+id, 'ischecked : '+ischecked);

    this.food = this.food.map((d) => {
      if(d.id == id){
        d.select = ischecked;
        return d;
      }
      return d;
    });
    console.log(this.food);
  }

}
