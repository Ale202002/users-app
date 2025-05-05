// src/app/interfaces/user.interface.ts

// Definimos la interfaz 'User' que describe la estructura de un objeto de usuario
export interface User {
  id: number; // El identificador único del usuario
  name: string; // El nombre completo del usuario
  username: string; // El nombre de usuario (puede ser un alias o nickname)
  email: string; // La dirección de correo electrónico del usuario
  address: { // Dirección del usuario
    street: string; // Calle donde vive el usuario
    suite: string; // Apartamento o unidad dentro del edificio (si aplica)
    city: string; // Ciudad de residencia
    zipcode: string; // Código postal
    geo: { // Coordenadas geográficas de la dirección
      lat: string; // Latitud
      lng: string; // Longitud
    };
  };
  phone: string; // Número de teléfono del usuario
  website: string; // Página web del usuario
  company: { // Información sobre la empresa donde trabaja el usuario
    name: string; // Nombre de la empresa
    catchPhrase: string; // Lema o frase de la empresa
    bs: string; // Descripción de la actividad empresarial
  };
}
