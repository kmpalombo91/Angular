<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = '';
  title = 'assignment-two';

  constructor() {
    this.checkEmptyStatus();
  }

  ngOnInit(): void {}

  checkEmptyStatus() {
    if (this.username.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  onReset() {
    this.username = '';
  }


=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-one';
>>>>>>> origin/master
}
