import { Component } from '@angular/core';
import {UsersService} from './Services/users.service'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class Card  {
  result:any;
  constructor(private userService:UsersService){}

  ngOnInit():void{

  }
  clicktoResult(){
    this.result=this.userService.getCount();
console.log(this.result);
  }
 
}
