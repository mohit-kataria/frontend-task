import { Component, OnInit, HostListener } from "@angular/core";
import * as jsonData from "src/assets/json/colleges.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "frontend-task";
  collegeData = [];
  index = 0;

  ngOnInit() {
    console.log(jsonData["default"]);
    this.loadData();
  }

  loadData() {
    if (this.index < jsonData["default"].colleges.length) {
      for (let i = this.index; i < this.index + 10; i++) {
        this.collegeData.push(jsonData["default"]["colleges"][i]);
      }
      console.log(this.collegeData);
    }
  }

  @HostListener("window:scroll", ["$event"])
  scroll(event) {
    // console.log(event.path);
    if (
      event.path[1].innerHeight + event.path[1].scrollY >=
      event.path[0].body.scrollHeight
    ) {
      this.index += 10;
      this.loadData();
    }
  }
}
