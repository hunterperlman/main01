import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { UserInfoService } from '../employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class LoginComponent implements OnInit 
{

  user: { username: string, password: string, id: any} = {
    username: "",
    password: "",
    id: ""
  }

  // creates router object
  constructor(private router : Router, private userService : UserInfoService) { }
  
  newlogin(newuserform)
  {
    //this.httpClient.post("http://localhost:3000/admin", newuserform);
    //this.router.navigate(["/catalog"]);
  }

  adddata(form : NgForm)
  { 
    return this.userService.addUser(form.value).subscribe(()=>{
      console.log("test_is_working")
    })
  }
    
  ngOnInit(): void {}
}
