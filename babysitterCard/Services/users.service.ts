import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  result:any="ggg";

  constructor(private http:HttpClient) { }
  getCount()
  {
    this.http.get("api/Default").subscribe(res=>
      {
        console.log(res);
        this.result=res;
      })
      console.log(this.result);
      return this.result; 
  }
}
