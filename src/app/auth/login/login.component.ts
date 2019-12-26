import { UserService } from "./../../core/services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.loginform = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  submitForm() {
    this.userService.attemptAuth(this.loginform.value).subscribe(res => {
      if (res.token) {
        this.router.navigate(["/"]);
      }
    });
  }
}
