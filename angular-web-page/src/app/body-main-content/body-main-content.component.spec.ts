import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMainContentComponent } from './body-main-content.component';

describe('BodyMainContentComponent', () => {
  let component: BodyMainContentComponent;
  let fixture: ComponentFixture<BodyMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
