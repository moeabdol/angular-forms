import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ModelFormComponent } from "./forms/model-form.component";
import { ReactiveModelFormComponent } from './forms/reactive-model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent,
    ReactiveModelFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
