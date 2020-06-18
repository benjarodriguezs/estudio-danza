import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  modalRef: BsModalRef;
  page: number = 1;
  alumnos: any;
  cursos: any;

  constructor(
    private modalService: BsModalService,
    public alumnosService: AlumnosService,
    public cursosService: CursosService
  ) { }

  ngOnInit() {
    this.alumnosService.getAlumnos()
      .subscribe((alumnos: any) =>{
        this.alumnos = alumnos
        console.log(this.alumnos)
      }, err => console.error(err));
    this.cursosService.getAllCursos()
      .subscribe((cursos: any) =>{
        this.cursos = cursos
        console.log(this.cursos)
      }, err => console.error(err));
  }

  openModalCrearAlumno(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm my-0 modal-dialog-centered', 
    // backdrop: 'static'
  });
  }

  openModalInfo(templateInfo: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateInfo, { class: 'modal-sm my-0 modal-dialog-centered' });
  }
  
  openModalEdit(templateEdit: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateEdit, { class: 'modal-sm my-0 modal-dialog-centered' });
  }

  openModalHistorial(templateHistorial: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateHistorial, { class: 'modal-sm my-0 modal-dialog-centered' });
  }

  close() {
    this.modalRef.hide();
  }

}
