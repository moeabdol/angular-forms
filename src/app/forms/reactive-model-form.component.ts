import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.scss']
})
export class ReactiveModelFormComponent implements OnInit {
  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches.push(term);
      });
  }
}
