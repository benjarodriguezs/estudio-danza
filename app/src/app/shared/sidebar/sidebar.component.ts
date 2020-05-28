import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from 'src/app/wrappers/tab';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() addTab = new EventEmitter<ITab>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
   }

  // onEvent(event) {
  //   event.stopPropagation();
  // }

  navigateTo(name: string, route: string) {
    const tab: ITab = { name, route, selectedTab: true };
    this.addTab.emit(tab);
    setTimeout(() => {
      this.router.navigate([route]);
    }, 300);
  }
}
