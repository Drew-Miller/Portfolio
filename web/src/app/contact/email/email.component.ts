import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
	@Output() response = new EventEmitter<{ success: boolean, response }>();
	success: boolean = undefined;
	form: FormGroup;
	name: string;
	email: string;
	message: string;
	private destroy$ = new Subject();

	constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			firstName: ['', [Validators.required, Validators.maxLength(32)]],
			lastName: ['', [Validators.required, Validators.maxLength(32)]],
			email: ['', [Validators.required, Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
			message: ['', [Validators.required, Validators.maxLength(256)]],
		});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}

	submit() {
		if (this.form.invalid) {
			return;
		}

		const firstName = this.form.value.firstName;
		const lastName = this.form.value.lastName;
		this.name = `${firstName} ${lastName}`;
		this.email = this.form.value.email;
		this.message = this.form.value.message;

		this.httpClient.post('https://formspree.io/mdolnleo', {
			_subject: 'From: Portfolio Contact',
			email: this.email,
			name: this.name,
			message: this.message
		}).pipe(
			catchError((response: HttpErrorResponse) => {
				this.success = false;
				this.message = response.message;
				this.response.emit({ success: false, response });
				throw (response);
			})).subscribe({
				next: (response) => {
					this.success = true;
					this.response.emit({ success: true, response });
				}
			});
	}
}
