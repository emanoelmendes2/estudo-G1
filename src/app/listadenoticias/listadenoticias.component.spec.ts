import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadenoticiasComponent } from './listadenoticias.component';

describe('ListadenoticiasComponent', () => {
  let component: ListadenoticiasComponent;
  let fixture: ComponentFixture<ListadenoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadenoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadenoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
