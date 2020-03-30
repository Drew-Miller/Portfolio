import { Component } from '@angular/core';

@Component({
    selector: 'socials',
    template: `
    <ul style="display: flex!important">
        <li>
            <a href="https://www.linkedin.com/in/drew-miller-0b1b6b111/"><i class="fab fa-linkedin"></i></a>
        </li>
        <li>
            <a href="https://github.com/Drew-Miller"><i class="fab fa-github"></i></a>
        </li>
        <li>
            <a href="https://soundcloud.com/nullsik"><i class="fab fa-soundcloud"></i></a>
        </li>
    </ul>
    `
})
export class SocialsComponent {}
