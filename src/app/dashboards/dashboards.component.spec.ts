import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavigationDrawerModule, IgxListModule, IgxCardModule } from 'igniteui-angular';
import { DashboardsComponent } from './dashboards.component';

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavigationDrawerModule, IgxListModule, IgxCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
