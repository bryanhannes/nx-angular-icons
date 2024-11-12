import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiIconsComponent } from './shared-ui-icons.component';

describe('SharedUiIconsComponent', () => {
  let component: SharedUiIconsComponent;
  let fixture: ComponentFixture<SharedUiIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiIconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
