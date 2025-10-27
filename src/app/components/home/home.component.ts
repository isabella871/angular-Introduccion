import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { PerfilComponent } from '../../perfil/perfil.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, PerfilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  usuario: Usuario = {
    userName: '',
    edad: 0
  }
}

interface Usuario{
  userName: string;
  edad: number;
}