import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaPageComponent } from './pessoa-page.component';

describe('PessoaPageComponent', () => {
  let component: PessoaPageComponent;
  let fixture: ComponentFixture<PessoaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
