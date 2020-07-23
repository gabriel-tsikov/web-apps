import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVolumeComponent } from './my-volume.component';

describe('MyVolumeComponent', () => {
  let component: MyVolumeComponent;
  let fixture: ComponentFixture<MyVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
