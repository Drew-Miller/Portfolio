import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigurationService } from 'src/shared/shared.services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public readonly NavItems: NavItem[] = [
        { Title: 'About', Link: '/home' },
        { Title: 'Projects', Link: '/projects' },
        { Title: 'Contact Me', Link: '/contact' }
    ]

    public constructor(private route: Router, private configService: ConfigurationService) { }

    public get CurrentRoute(): string {
        return this.route.url;
    }

    public get Base(): string {
        return this.configService.Base;
    }
}

export class NavItem {
    public Title: string;
    public Link: string;
}
