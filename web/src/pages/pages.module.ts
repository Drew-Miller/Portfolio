import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        ProjectsComponent,
        ContactComponent
    ],
    exports: [],
    entryComponents: [HomeComponent]
})
export class PagesModule {}
