import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceComponent } from './dulce.component';

describe('DulceComponent', () => {
  let component: DulceComponent;
  let fixture: ComponentFixture<DulceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
