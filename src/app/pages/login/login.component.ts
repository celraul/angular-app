import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../security/auth.service';
import { LoginModel } from '../../models/login,model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    formLogin: FormGroup;
    loading = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
        private authService: AuthService) {

        this.formLogin = this.formBuilder.group({
            documentNumber: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });

        this.returnUrl = "";
    }

    ngOnInit() {
        this.initComponents();

        // this.authService.logout();
        // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnDestroy() { }

    initComponents() {
        this.initForm();
    }

    initForm() {
        this.formLogin = this.formBuilder.group({
            documentNumber: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    onLoggedin(login: LoginModel) {
        if (!this.formLogin.invalid) {
            this.loading = true;
            this.router.navigate(['/']);
            // this.authService.login(login.documentNumber, login.password).subscribe(result => {
            //     this.router.navigate(['/']);
            //     this.loading = false;
            // });
        } else {

        }
    }

    resetPassword() { }
}