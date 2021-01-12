import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthRecipiesComponent } from './auth-recipies/auth-recipies.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthRecipiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
