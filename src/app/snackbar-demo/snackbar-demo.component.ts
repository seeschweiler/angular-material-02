import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.css']
})
export class SnackbarDemoComponent implements OnInit {

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackBar.open("This is the SnackBar message!", "Got it!");
  }

}
