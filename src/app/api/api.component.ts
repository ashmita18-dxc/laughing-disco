import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  //Dependency injection
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response=this.http.get('https://api.github.com/users/ashmita18-dxc');
    response.subscribe(function(data){
      console.log(data['id']);
      console.log(data['login']);
    });
  }

}
