import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SocialsComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class LayoutModule { }