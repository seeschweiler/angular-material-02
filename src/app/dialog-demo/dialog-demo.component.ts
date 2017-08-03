import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import {MyDialogComponent} from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult = "";

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }

}
