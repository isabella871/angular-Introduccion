import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  number: number = 0;

  addOne() {
    this.number++;
  }

  todo: Todo = {
    id: 0,
    titulo: '',
    descripcion: '',
    fechaLimite: new Date
  }
}

interface Todo{
  id: number;
  titulo: string;
  descripcion?: string;
  fechaLimite?: Date;
}
