import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasHeaderComponent } from './noticias-header.component';

describe('NoticiasHeaderComponent', () => {
  let component: NoticiasHeaderComponent;
  let fixture: ComponentFixture<NoticiasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
