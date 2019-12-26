import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";

const routes: Routes = [
  {
    path: "login",
    data: {
      title: "Login",
      urls: [{ title: "Login", url: "/login" }, { title: "Login" }]
    },
    component: LoginComponent
  },
  {
    path: "register",
    data: {
      title: "Register",
      urls: [{ title: "Register", url: "/register" }, { title: "Register" }]
    },
    component: RegisterComponent
  },
  {
    path: "forget-password",
    data: {
      title: "Forget Password",
      urls: [
        { title: "Forget Password", url: "/forget-password" },
        { title: "Forget Password" }
      ]
    },
    component: ForgetPasswordComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent]
})
export class AuthModule {}
