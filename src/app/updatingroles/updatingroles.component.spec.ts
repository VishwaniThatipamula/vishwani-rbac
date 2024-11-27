import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingrolesComponent } from './updatingroles.component';

describe('UpdatingrolesComponent', () => {
  let component: UpdatingrolesComponent;
  let fixture: ComponentFixture<UpdatingrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatingrolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
