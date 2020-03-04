import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from 'src/app/wrappers/tab';
import { TabService } from 'src/app/services/tabs/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: ITab[];

  constructor(
    private router: Router,
    private tabService: TabService,
  ) { }

  ngOnInit() { }

  navigateTo(tab: ITab, index: number) {
    if (tab.selectedTab) return;
    this.tabService.setActiveTab(this.tabs, index);
    if (tab.tabClicked) tab.tabClicked();
    if (tab.route) this.router.navigate([tab.route]);
  }
}
