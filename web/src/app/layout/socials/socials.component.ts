import { Component } from '@angular/core';

@Component({
    selector: 'socials',
    template: `
    <ul>
        <li>
            <a href="https://www.linkedin.com/in/drewmiller-software/"><i class="fab fa-linkedin"></i></a>
        </li>
        <li>
            <a href="https://github.com/Drew-Miller"><i class="fab fa-github"></i></a>
        </li>
        <li>
            <a href="https://soundcloud.com/nullsik"><i class="fab fa-soundcloud"></i></a>
        </li>
    </ul>
    `,
    styles: [`
        ul {
            display: flex;
        }
    `]
})
export class SocialsComponent {}
