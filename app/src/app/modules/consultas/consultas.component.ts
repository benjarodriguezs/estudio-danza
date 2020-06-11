import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
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
