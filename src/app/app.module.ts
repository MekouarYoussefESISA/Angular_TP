import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StudentService } from '../services/student/student.service';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent // All the components needs to be declared
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Import all dependencies
  ],
  providers: [TicketService , StudentService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
