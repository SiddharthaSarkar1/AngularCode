import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;

  constructor(private router: Router, private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.arouter.snapshot.params['id'],
      name: this.arouter.snapshot.params['name']
    }
    this.arouter.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name']
      }
    })

    //console.log(this.arouter.snapshot.queryParams);
    //console.log(this.arouter.snapshot.fragment);

    this.arouter.queryParams.subscribe((data)=>{
      console.log(data);
    })

    this.arouter.fragment.subscribe((data)=>{
      console.log(data);
    })


  }

  onCategoriesClick(){
    //this.router.navigateByUrl('/categories');
    this.router.navigate(['/categories']);
  }

  getRamaDetails(){
    this.router.navigate(['/users', 10, 'Rama'], {queryParams: {page: 101, search: 'Ramaya'}, fragment: 'loading'});
  }

}
