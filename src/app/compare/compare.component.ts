import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-compare",
  templateUrl: "./compare.component.html"
})
export class CompareComponent implements OnInit {
  firstFileData: File = null;
  secondFileData: File = null;
  previewFirstFile: any = null;
  previewSecondFile: any = null;
  firstStudentName: string = null;
  secondStudentName: string = null;
  constructor(private router: Router) {}

  ngOnInit() {}

  uploadFirstFile(fileInput: any) {
    this.firstFileData = <File>fileInput.target.files[0];
    this.showFirstFile();
  }

  uploadSecondFile(fileInput: any) {
    this.secondFileData = <File>fileInput.target.files[0];
    this.showSecondFile();
  }

  showFirstFile() {
    // Show preview
    // var mimeType = this.fileData.type;
    // if (mimeType.match(/image\/*/) == null) {
    //   return;
    // }

    var reader = new FileReader();
    reader.readAsText(this.firstFileData);
    reader.onload = _event => {
      this.previewFirstFile = reader.result;
    };
  }

  showSecondFile() {
    // Show preview
    // var mimeType = this.fileData.type;
    // if (mimeType.match(/image\/*/) == null) {
    //   return;
    // }

    var reader = new FileReader();
    reader.readAsText(this.secondFileData);
    reader.onload = _event => {
      this.previewSecondFile = reader.result;
    };
  }

  compare() {
    this.router.navigate(["/compare/result"]);
  }
}
