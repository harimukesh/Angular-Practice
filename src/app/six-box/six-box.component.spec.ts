import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixBoxComponent } from './six-box.component';

describe('SixBoxComponent', () => {
  let component: SixBoxComponent;
  let fixture: ComponentFixture<SixBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
