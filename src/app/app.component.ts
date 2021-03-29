// app.component.ts
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MyBottomSheetComponent } from './my-bottom-sheet/my-bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-bottom-sheet-app';

  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  openTemplateSheetMenu() {
    this.bottomSheet.open(this.TemplateBottomSheet);
  }

  closeTemplateSheetMenu() {
    this.bottomSheet.dismiss();
  }

  openComponentSheetMenu() {
    this.bottomSheet.open(MyBottomSheetComponent, {
      data: [
        {
          name: 'Take me To Home',
          link: '/home'
        },
        {
          name: 'Show me Settings',
          link: '/settings'
        },
        {
          name: 'Cancel',
          link: ''
        }
      ]
    });
  }

}
