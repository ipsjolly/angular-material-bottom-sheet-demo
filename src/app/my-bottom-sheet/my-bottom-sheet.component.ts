// my-bottom-sheet.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-my-bottom-sheet',
  templateUrl: './my-bottom-sheet.component.html',
  styleUrls: ['./my-bottom-sheet.component.scss']
})
export class MyBottomSheetComponent implements OnInit {

  actions: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {}
  ) {
    this.actions = data;
  }

  ngOnInit(): void {
  }

  closeComponentSheetMenu() {
    this.bottomSheet.dismiss();
  }

}
