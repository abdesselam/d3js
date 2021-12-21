import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartD3Component } from './bar-chart-d3.component';

describe('BarChartD3Component', () => {
  let component: BarChartD3Component;
  let fixture: ComponentFixture<BarChartD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartD3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
