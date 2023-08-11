import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { dataType } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular training project';

  constructor(private viewContainer:ViewContainerRef, private cfr:ComponentFactoryResolver){

  }

  async loadAdmin(){
    this.viewContainer.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async loadUser(){
    this.viewContainer.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }

  getData(){
    const data:dataType = {
      name : "Anil Kumar",
      id : 1001,
      indian : true,
      address : "43/18 shibpur,Howrah-4"
    }
  }

}
