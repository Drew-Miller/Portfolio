import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
    @Output('onSuccess') onSuccess = new EventEmitter<boolean>();
    public Form: FormGroup;
    public Success = false;
    public FullName = '';
    public Email = '';
    public Message = '';
    private readonly subject = 'From: Portfolio Contact';
    private readonly emailPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$';
    private readonly postUrl = 'https://formspree.io/mdolnleo';

    public constructor(private httpClient: HttpClient) {}

    public ngOnInit() {
        this.CreateForm();
    }

    public CreateForm() {
        this.Form = new FormGroup({
            FirstName: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
            LastName: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
            Email: new FormControl(null, [Validators.required, Validators.maxLength(128), Validators.pattern(this.emailPattern)]),
            Message: new FormControl(null, [Validators.required, Validators.maxLength(256)]),
        });
    }

    public FormSubmit() {
        console.log(this.Form);

        if (this.Form.invalid) {
            return;
        }

        const firstName = this.Form.value.FirstName;
        const lastName = this.Form.value.LastName;
        const fullName = this.FullName =  firstName + ' ' + lastName;
        const emailAddress = this.Email = this.Form.value.Email;
        const messageBody = this.Message = this.Form.value.Message;

        this.httpClient.post(this.postUrl, {
            _subject: this.subject,
            email: emailAddress,
            name: fullName,
            message: messageBody
        }).subscribe({
            complete: () => {
                this.onSuccess.emit(this.Success = true);
            }
        });
    }
}
