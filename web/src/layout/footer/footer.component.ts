import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    public constructor(private router: Router) { }

    public Navigate(path: string) {
        this.router.navigateByUrl(path);
    }
}
