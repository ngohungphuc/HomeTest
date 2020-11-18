import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovingBoxComponent } from './moving-box/moving-box.component';
import { SpeedInputComponent } from './speed-input/speed-input.component';

@NgModule({
  declarations: [AppComponent, MovingBoxComponent, SpeedInputComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
