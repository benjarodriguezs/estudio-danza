import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { TabsModule } from './shared/tabs/tabs.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AlumnosComponent } from './modules/alumnos/alumnos.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminComponent,
    AlumnosComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
