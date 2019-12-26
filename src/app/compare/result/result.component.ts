import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html"
})
export class ResultComponent implements OnInit {
  data: number;
  result: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = +this.route.snapshot.paramMap.get("data");

    let perCent = (this.data * 100).toPrecision(2);

    this.result = perCent + "%";
  }
}
