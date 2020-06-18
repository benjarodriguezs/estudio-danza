//#region MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConsultasRoutingModule } from './consultas-routing.module';
//#endregion

//#region COMPONENTS
import { ConsultasComponent } from './consultas.component';
//#endregion

//#region SERVICES
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';
//#endregion

@NgModule({
  declarations: [ConsultasComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [AlumnosService, CursosService],
})
export class ConsultasModule { }
