import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
