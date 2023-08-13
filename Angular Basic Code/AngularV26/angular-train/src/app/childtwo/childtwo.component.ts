import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {

  @Output() updateDataEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
