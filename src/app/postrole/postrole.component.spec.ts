import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostroleComponent } from './postrole.component';

describe('PostroleComponent', () => {
  let component: PostroleComponent;
  let fixture: ComponentFixture<PostroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostroleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
