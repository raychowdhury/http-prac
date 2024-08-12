import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetaisComponent } from './post-detais.component';

describe('PostDetaisComponent', () => {
  let component: PostDetaisComponent;
  let fixture: ComponentFixture<PostDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
