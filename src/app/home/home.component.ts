import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importamos HttpClient para hacer peticiones HTTP
import { UserTableComponent } from '../user-table/user-table.component'; // Importamos el componente para la tabla de usuarios
import { User } from '../interfaces/user.interface'; // Importamos la interfaz que define la estructura de un usuario

@Component({
  selector: 'app-home', // Selector del componente para usarlo en HTML
  standalone: true, // Esto indica que el componente es independiente, sin necesidad de un módulo
  templateUrl: './home.component.html', // Ruta del archivo HTML correspondiente
  styleUrls: ['./home.component.css'], // Ruta del archivo CSS correspondiente
  imports: [UserTableComponent, HttpClientModule] // Importamos el componente de la tabla de usuarios y el módulo HTTP
})
export class HomeComponent implements OnInit {
  users: User[] = []; // Variable que almacenará los usuarios obtenidos de la API

  // Inyectamos HttpClient para realizar las peticiones HTTP
  constructor(private http: HttpClient) {}

  // ngOnInit se ejecuta al inicializar el componente, en este caso obtenemos los usuarios
  ngOnInit(): void {
    this.getUsers(); // Llamamos al método para obtener los usuarios desde la API
  }

  // Método que hace la petición HTTP para obtener los usuarios
  getUsers(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data; // Asignamos los usuarios obtenidos a la variable 'users'
      });
  }
}
