import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAvatarComponent } from './multiple-avatar.component';

describe('MultipleAvatarComponent', () => {
  let component: MultipleAvatarComponent;
  let fixture: ComponentFixture<MultipleAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
