import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { JwtService } from "../../core/services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private jwtService: JwtService) {}

  ngOnInit() {}

  login() {
    this.jwtService.saveToken(
      "thfbd;jkgsdjgfhjgfffdfokdkdkfjfjhdjdkddldldldldl"
    );
    this.router.navigate(["/"]);
  }
}
