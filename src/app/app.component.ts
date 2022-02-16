import { Component } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LocalStoreExample';


  data = {
    todo : ['Get to work', 'Pick up groceries', 'Walk dog'],
    test : [ 'Go home', 'Fall asleep','Check e-mail'],
    done : ['Get up', 'Brush teeth', 'Take a shower']

  }

  ngOnInit(){{
    this.setItems()
  }}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
addTodo(todo : any){

    this.data.todo.push(todo.value)
    localStorage.setItem('todo',JSON.stringify(this.data.todo))

    todo.value = '';

  }
  setItems(){
   
    if(! localStorage.getItem('todo'))
    {
      localStorage.setItem('todo',JSON.stringify(this.data.todo))
    }
   
   
    if( !  localStorage.getItem('test'))
    {
      localStorage.setItem('test',JSON.stringify(this.data.test))
    }
     
    if( !  localStorage.getItem('done'))
    {
      localStorage.setItem('done',JSON.stringify(this.data.done))
    }
     
     
    
  
  }
}

