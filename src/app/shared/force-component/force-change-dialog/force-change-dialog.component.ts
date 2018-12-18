import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'swc-force-change-dialog',
  templateUrl: './force-change-dialog.component.html',
  styleUrls: ['./force-change-dialog.component.css']
})
export class ForceChangeDialogComponent implements OnInit {
  force: number;

  // constructor(private dialogRef: MatDialogRef<ForceChangeDialogComponent>,
              // @Inject(MAT_DIALOG_DATA)) { }

  ngOnInit() {
  }

  onNoClick(){

  }
}
