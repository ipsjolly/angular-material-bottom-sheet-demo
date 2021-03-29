import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBottomSheetComponent } from './my-bottom-sheet.component';

describe('MyBottomSheetComponent', () => {
  let component: MyBottomSheetComponent;
  let fixture: ComponentFixture<MyBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
