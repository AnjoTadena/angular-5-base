import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public http: HttpClient) { }

  ngOnInit() {
    //   email: 'anjo@coderepubliq.com',
    //   password: 'password'
    this.http.get('http://demo.envogue.global:8080/api/products').subscribe((response) => {
      console.log(response);
    });
  }
}
