import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDefaultComponent } from './article-default.component';

describe('ArticleDefaultComponent', () => {
  let component: ArticleDefaultComponent;
  let fixture: ComponentFixture<ArticleDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
