import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStateComponent } from './post-state.component';

describe('PostStateComponent', () => {
  let component: PostStateComponent;
  let fixture: ComponentFixture<PostStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
