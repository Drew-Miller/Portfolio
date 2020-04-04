import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    ];

    public constructor(private router: Router) { }

    public Navigate(ev: Event, path: string) {
        ev.preventDefault();
        this.router.navigateByUrl(path);
    }

    public get CurrentRoute(): string {
        return this.router.url;
    }
}

export class NavItem {
    public Title: string;
    public Link: string;
}
