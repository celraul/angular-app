import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { LoginModel } from 'src/app/model/Login,model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy{
    formLogin: FormGroup;

    constructor(private formBuilder: FormBuilder, private toasterService: ToasterService, 
                private router: Router) {
    }

    ngOnInit() {
        this.initComponents();
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
            //localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/']);
            // this.authService.login(login).subscribe(result => {
            //     localStorage.setItem('isLoggedin', 'true');
            // });
        } else {
            this.toasterService.onInfo("Nome e senha devem ser informados")
        }
    }
}