import { Component, OnInit, ViewChild } from "@angular/core";

import { Signup } from "./signup";

@Component({
  selector: "template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.scss"]
})
export class TemplateFormComponent implements OnInit {
  langs: string[] = [
    "English",
    "French",
    "German"
  ];
  model: Signup = new Signup();
  @ViewChild("f") form: any;

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
}
