import { Injectable } from '@angular/core';
import { APP_SETTINGS } from 'src/app/etc/AppSettings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  url = APP_SETTINGS.apiUrl;
  alumnos: any;

  constructor(private http: HttpClient) { }

    getAlumnos() {
      return this.http.get(`${this.url}alumnos`);
    }

}
