import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../library.service'
import { UserInfoService } from '../employee.service';
import { MomentPipe } from '../moment.pipe';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  
  // gets current date
  //creationDate = new Date().toISOString();
  creationDate = new Date(2020,2,3).toISOString();

  user = [];
  constructor(private catalogService : LibraryService, private userService : UserInfoService, private httpClient : HttpClient) { }
  
  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/contacts").subscribe((data : [])=>
    {
      this.counteries = data;
    })
  }

  getClasses(index)
  {
    return { active : false, even : index % 2 !== 0, odd : index % 2 === 0}
  }

  counteries : any = [];

  searchText: any;

  contact: { name: string, email: string, id: any} = {
    name: "",
    email: "",
    id: ""
  }

  // note lower case  

  addcontact(form : NgForm)
  { 
    location.reload ();
    this.userService.addContact(form.value).subscribe(()=>{
      console.log("test_is_working")
    })
  }

}
