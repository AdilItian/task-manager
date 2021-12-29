import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocTaskComponent } from './adhoc-task.component';

describe('AdhocTaskComponent', () => {
  let component: AdhocTaskComponent;
  let fixture: ComponentFixture<AdhocTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhocTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
