import { HistoryComponent } from "./history.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { AuthGuard } from "../core/services";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    data: {
      title: "history",
      urls: [{ title: "History", url: "/history" }, { title: "History" }]
    },
    component: HistoryComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule {}
