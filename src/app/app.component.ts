import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-drag-drop';

  todos = [
    {
      name: 'Flutter',
      category: 'Mobile Development'
    },
    {
      name: 'Docker',
      category: 'DevOps'
    },
    {
      name: 'Kubernetes',
      category: 'DevOps'
    }
   
  ];

  completed = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Spring Ecosystem',
      category: 'backend'
    },
    {
      name: 'Java',
      category: 'Software development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'RxJS',
      category: 'Reactive Development'
    }
    
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
