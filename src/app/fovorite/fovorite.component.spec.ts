import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FovoriteComponent } from './fovorite.component';

describe('FovoriteComponent', () => {
  let component: FovoriteComponent;
  let fixture: ComponentFixture<FovoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FovoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FovoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
