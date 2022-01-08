import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureConnectionComponent } from './configure-connection.component';

describe('ConfigureConnectionComponent', () => {
  let component: ConfigureConnectionComponent;
  let fixture: ComponentFixture<ConfigureConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
