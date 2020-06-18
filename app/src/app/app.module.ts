import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { TabsModule } from './shared/tabs/tabs.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './modules/admin/admin.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TabsModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
