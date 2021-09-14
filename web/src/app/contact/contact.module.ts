import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent,
    EmailComponent
  ],
  providers: [],
})
export class ContactModule { }
