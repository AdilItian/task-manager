import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTaskComponent } from './server-task.component';

describe('ServerTaskComponent', () => {
  let component: ServerTaskComponent;
  let fixture: ComponentFixture<ServerTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
