export interface ITab {
  name: string;
  route?: string;
  selectedTab?: boolean;
  tabClicked?();
}
