import { Component, EventEmitter, Input, output } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export class PerfilComponent {
  @Input() userName: string = '';
  @Input() edad: number = 0;
}

// Evento con @output para enviar datos a HomeComponent
@Output() edadChange = new EventEmitter<number>(); 