import { Component, OnInit } from '@angular/core';
import { ITab } from 'src/app/wrappers/tab';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  styles: [
    `
    :host >>> .tabs {
      background-color: #b3b3b3 !important;
    }`
  ]
})
export class AdminComponent implements OnInit {
  tabs: ITab[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.tabs.push({ name: 'consultas', route: '/consultas', selectedTab: true });
    this.router.navigate(['/consultas']);
  }

  addtab(tab: ITab) {
    this.tabs = [];
    this.tabs.push(tab);
  }
}
