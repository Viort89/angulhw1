import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [{
    name: 'add angular',
    done:  true
  }, {
    name: 'create todo list',
    done: true
  }, {
    name: 'upload to Git',
    done: true
  }];
  

  addtask() {
    this.tasks.push({
      name: 'new task',
      done: false
    });
  }
}

