import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-addtodata',
  templateUrl: './addtodata.component.html',
  styleUrls: ['./addtodata.component.scss']
})
export class AddtodataComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }
  
  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/posts").subscribe((data : [])=>
    	{

      })
  }

  addtodata(form : NgForm)
  {
    
  }

}
