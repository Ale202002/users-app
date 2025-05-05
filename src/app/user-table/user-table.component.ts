import { Component, Input } from '@angular/core'; // Importamos los decoradores Component e Input
import { TableModule } from 'primeng/table'; // Importamos el módulo Table de PrimeNG para crear tablas
import { User } from '../interfaces/user.interface'; // Asegúrate de que la ruta esté correcta para la interfaz de 'User'

@Component({
  selector: 'app-user-table', // El selector con el que este componente se utilizará en el HTML
  standalone: true, // Indicamos que este componente es independiente (standalone)
  templateUrl: './user-table.component.html', // Ruta al archivo HTML del componente
  styleUrl: './user-table.component.css', // Ruta al archivo CSS del componente
  imports: [TableModule] // Importamos el módulo Table de PrimeNG para poder usar el componente p-table en el template
})
export class UserTableComponent {
  @Input() users: User[] = []; // Recibimos los usuarios como input desde el componente padre
}
