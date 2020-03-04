import { Component, OnInit } from '@angular/core';
import { ITab } from 'src/app/wrappers/tab';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  tabs: ITab[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.tabs.push({ name: 'HOME', route: '/home', selectedTab: true });
    this.router.navigate(['/home']);
  }

  addTab(tab: ITab) {
    this.tabs = [];
    this.tabs.push(tab);
  }
}
