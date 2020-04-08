import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private list : any= [];

  listObserve = new Subject<[]>();

  constructor(private httpClient : HttpClient) { }

  add(user)
    {
      this.list.push({...user})
      this.listObserve.next(this.list);
    }

  getList()
    {
        return this.listObserve;
    }

  addUser(user)
  { 
    return this.httpClient.post("http://localhost:3000/posts", user);
  }
}

