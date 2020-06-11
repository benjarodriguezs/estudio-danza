export interface IAlumno {
  id: number;
  apellido: string;
  nombre: string;
  documento: number;
  email?: string;
  telefono?: number;
  extra?: string;
  curso1?: string;
  curso2?: string;
  curso3?: string;
}