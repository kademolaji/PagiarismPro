import { CompareComponent } from "./../compare/compare.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { AuthGuard } from "../core/services";
import { ResultComponent } from "./result/result.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    data: {
      title: "Compare",
      urls: [{ title: "Compare", url: "/compare" }, { title: "Compare" }]
    },
    component: CompareComponent
  },
  {
    path: "result",
    canActivate: [AuthGuard],
    data: {
      title: "Result",
      urls: [{ title: "Result", url: "/result" }, { title: "Result" }]
    },
    component: ResultComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [CompareComponent, ResultComponent]
})
export class CompareModule {}
