import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/security/auth.service';

@Injectable()
export class EmailInUseValidator {

    debouncer: any;

    constructor(public service: AuthService) { }

    EmailInUse(control: FormControl): any {

        clearTimeout(this.debouncer);
        return new Promise(resolve => {

            this.debouncer = setTimeout(() => {
                if (control.value) {
                    this.service.emailInUse(control.value).subscribe((res) => {
                        if (res.response) {
                            resolve({ 'emailInUse': true });

                        } else {
                            resolve(true);
                        }
                    }, (err) => {
                        resolve({ 'emailInUse': true });
                    });
                } else {
                    resolve({ 'emailInUse': true });
                }
            });

        });
    }
}