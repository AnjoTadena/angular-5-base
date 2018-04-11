import { Component, OnInit } from '@angular/core';
import { UserService } from 'core/services';
import { AuthService } from 'auth/services';
import { routerTransition } from './routes/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    //   email: 'anjo@coderepubliq.com',
    //   password: 'password'
    // this.userService.getAll().subscribe((response) => { console.log(response); });
    // this.authService.login();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
