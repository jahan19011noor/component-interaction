import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentNewComponent } from './countdown-parent-new.component';

describe('CountdownParentNewComponent', () => {
  let component: CountdownParentNewComponent;
  let fixture: ComponentFixture<CountdownParentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
