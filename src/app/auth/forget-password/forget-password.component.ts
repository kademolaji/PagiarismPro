import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"]
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.forgetPasswordForm = this.fb.group({
      email: ["", Validators.required]
    });
  }

  ngOnInit() {}
  submitForm() {}
}
