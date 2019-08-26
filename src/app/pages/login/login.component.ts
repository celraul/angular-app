import { AuthService } from './../../security/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { LoginModel } from 'src/app/model/Login,model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    formLogin: FormGroup;
    loading = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder, private toasterService: ToasterService,
        private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    }

    ngOnInit() {
        this.initComponents();

        this.authService.logout();
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnDestroy() { }

    initComponents() {
        this.initForm();
    }

    initForm() {
        this.formLogin = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    onLoggedin(login: LoginModel) {
        if (!this.formLogin.invalid) {
            this.loading = true;
            //localStorage.setItem('isLoggedin', 'true');
            this.authService.login(login.email, login.password).subscribe(result => {
                this.router.navigate(['/']);
                this.loading = false;
            });
        } else {
            this.toasterService.onInfo("Nome e senha devem ser informados")
        }
    }

    resetPassword() { }
}