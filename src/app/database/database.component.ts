import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserInfoService } from '../employee.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  counteries : any = [];

  searchText: any;

  user: { username: string, password: string, id: any} = {
    username: "",
    password: "",
    id: ""
  }

  // note lower case
  constructor(private httpClient : HttpClient, private userService : UserInfoService) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/posts").subscribe((data : [])=>
    	{
        this.counteries = data;
      })
  }
  getClasses(index)
  {
    return { active : false, even : index % 2 !== 0, odd : index % 2 === 0}
  }

  adddata(form : NgForm)
  { 
    location.reload ();
    this.userService.addUser(form.value).subscribe(()=>{
      console.log("test_is_working")
    })
  }
  

  
}