import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  route: string;
  private destroy$ = new Subject();

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((x) => {
        return x instanceof NavigationStart;
      }),
      tap((x: NavigationStart) => this.route = x.url)
    ).subscribe();
  }

  ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
