import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  counteries : any = [];
  enteruser : string = "";
  enterpass : string = "";

  constructor(private userService : UserInfoService, private httpClient : HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/posts").subscribe((data : [])=>
    {
      this.counteries = data;
    })
  }

  
  user: { username: string, password: string, id: any} = {
    username: "",
    password: "",
    id: ""
  }

  // note lower case  
  loginuser(loginform : NgForm)
  { 
      //this.userService.loginUser(loginform.value)
    this.enteruser = loginform.value.username;
    this.enterpass = loginform.value.password;

    let curuser = "";
    let curpass = "";
    let success =0;
    
    for(let i =0; i < this.counteries.length; i++)
    {
      curuser = this.counteries[i].username;
      curpass = this.counteries[i].password;
      
      if(curuser == this.enteruser)
      {
        if(curpass == this.enterpass)
        {
          if(this.enteruser != "admin1")
          {
            success = 1;
          }

          if(this.enteruser == "admin1")
          {
            success = 2;
          }
        }
      }
    }
    if(success==0)
    {
      //failure
      this.router.navigate(['/home'])
    }
    if(success==1)
    {
      //user success
      this.router.navigate(['/contacts'])
    }
    if(success==2)
    {
      //admin success
      this.router.navigate(['/database'])
    }

  }

  
}

/*

*/
