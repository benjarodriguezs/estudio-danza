import { Injectable } from '@angular/core';
import { APP_SETTINGS } from 'src/app/etc/AppSettings';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url = APP_SETTINGS.apiUrl;

  constructor(private http: HttpClient) { }

  getAllCursos() {
    return this.http.get(`${this.url}cursos`);
  }
}
