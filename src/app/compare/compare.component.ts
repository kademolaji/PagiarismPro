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
    const result = this.compareTwoSentence(
      this.previewFirstFile,
      this.previewSecondFile
    );
    console.log("Result", result);
    this.router.navigate(["/compare/result", { data: result }]);
  }

  compareTwoSentence = (s1, s2) => {
    var m = 0;

    // Exit early if either are empty.
    if (s1.length === 0 || s2.length === 0) {
      return 0;
    }

    // Exit early if they're an exact match.
    if (s1 === s2) {
      return 1;
    }

    var range = Math.floor(Math.max(s1.length, s2.length) / 2) - 1,
      s1Matches = new Array(s1.length),
      s2Matches = new Array(s2.length);

    for (let i = 0; i < s1.length; i++) {
      var low = i >= range ? i - range : 0,
        high = i + range <= s2.length ? i + range : s2.length - 1;

      for (let j = low; j <= high; j++) {
        if (s1Matches[i] !== true && s2Matches[j] !== true && s1[i] === s2[j]) {
          ++m;
          s1Matches[i] = s2Matches[j] = true;
          break;
        }
      }
    }

    // Exit early if no matches were found.
    if (m === 0) {
      return 0;
    }

    // Count the transpositions.
    var k,
      n_trans = 0;

    for (let i = 0; i < s1.length; i++) {
      if (s1Matches[i] === true) {
        for (var j = k; j < s2.length; j++) {
          if (s2Matches[j] === true) {
            k = j + 1;
            break;
          }
        }

        if (s1[i] !== s2[j]) {
          ++n_trans;
        }
      }
    }

    var weight = (m / s1.length + m / s2.length + (m - n_trans / 2) / m) / 3,
      l = 0,
      p = 0.1;

    if (weight > 0.7) {
      while (s1[l] === s2[l] && l < 4) {
        ++l;
      }

      weight = weight + l * p * (1 - weight);
    }

    return weight;
  };
}
