import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfigurationService } from './configuration/configuration.service';

import { EmailComponent } from './email/email.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [EmailComponent],
    providers: [ConfigurationService],
    exports: [EmailComponent]
})
export class SharedModule {}
