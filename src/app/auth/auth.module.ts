import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

const routes: Routes = [
  {
    path: "login",
    data: {
      title: "Login",
      urls: [{ title: "Login", url: "/login" }, { title: "Login" }]
    },
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule {}
