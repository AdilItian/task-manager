import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProcessTaskComponent } from './full-process-task.component';

describe('FullProcessTaskComponent', () => {
  let component: FullProcessTaskComponent;
  let fixture: ComponentFixture<FullProcessTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullProcessTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProcessTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
