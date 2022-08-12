import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaryContentComponent } from './secundary-content.component';

describe('SecundaryContentComponent', () => {
  let component: SecundaryContentComponent;
  let fixture: ComponentFixture<SecundaryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundaryContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundaryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
