import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test-project';
  users = [
    { first_name: 'testname'}

  ];
  constructor(private UsersService: UsersService){
    this.showUsers()
  }

  showUsers() {

    this.UsersService.getUsers()
      .subscribe((data: Object) => {
        window.console.log('data', data);
        this.users = data.data
      })
  }
}
