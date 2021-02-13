import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form.component';

@NgModule({
    declarations: [LoginComponent, LoginFormComponent],
    imports: [CommonModule, FormsModule, AuthRoutingModule],
})
export class AuthModule {}
