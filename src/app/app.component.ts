import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importamos RouterOutlet para gestionar la navegación entre vistas

@Component({
  selector: 'app-root', // El selector define el nombre del componente en el HTML
  standalone: true, // Esto indica que el componente es independiente y no depende de un módulo
  imports: [RouterOutlet], // Importamos RouterOutlet para habilitar la navegación entre las rutas configuradas en la aplicación
  templateUrl: './app.component.html', // Ruta del archivo HTML que contiene el template del componente
  styleUrl: './app.component.css' // Ruta del archivo CSS que define el estilo del componente
})
export class AppComponent {
  title = 'users-app'; // Variable que define el título de la aplicación
}
