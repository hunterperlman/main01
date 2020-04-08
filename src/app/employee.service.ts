import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private list : any= [];

  private counteries : any = [];

  listObserve = new Subject<[]>();

  constructor(private httpClient : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/posts").subscribe((data : [])=>
    {
      this.counteries = data;
    })
  }

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

  addContact(contact)
  {
    return this.httpClient.post("http://localhost:3000/contacts", contact);
  }
}


