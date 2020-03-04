import { Injectable } from '@angular/core';
import { ITab } from 'src/app/wrappers/tab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: ITab[] = [];
  tabsTest: ITab[] = [
    {
      name: 'Algo',
      route: '/algo-ruta',
      selectedTab: true
    },
    {
      name: 'Algo 2',
      route: '/algo-ruta',
      selectedTab: false
    },
  ];

  constructor() { }

  addTab(tab: ITab) {
    this.tabs.push(tab);
  }

  addTabs(tabs: ITab[]) {
    this.tabs.push.apply(this.tabs, tabs);
  }

  deleteTab(indexTab: number) {
    this.tabs.splice(indexTab, 1);
  }

  cleanTabs() {
    this.tabs = [];
  }

  setActiveTab(tabs: ITab[], indexTab: number) {
    tabs.forEach((tab, i) => {
      tab.selectedTab = indexTab === i ? true : false;
    });
  }
}
