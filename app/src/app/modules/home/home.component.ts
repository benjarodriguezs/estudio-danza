import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/services/tabs/tab.service';
import { ITab } from 'src/app/wrappers/tab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private tabService: TabService,
  ) { }

  ngOnInit() {
    const tab: ITab = { name: 'HOME', route: '/home', selectedTab: true };
    this.tabService.cleanTabs();
    this.tabService.addTab(tab);
  }

}
