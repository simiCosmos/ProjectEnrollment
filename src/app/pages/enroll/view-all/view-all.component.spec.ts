import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwPaginationModule } from 'jw-angular-pagination';
import { of } from 'rxjs';
import { FilterByNamePipe } from 'src/app/core/pipes/filter-by-name.pipe';
import { SortByNamePipe } from 'src/app/core/pipes/sort-by-name.pipe';
import { EnrollService } from 'src/app/core/services/enroll.service';

import { ViewAllComponent } from './view-all.component';

describe('ViewAllComponent', () => {
  let component: ViewAllComponent;
  let fixture: ComponentFixture<ViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllComponent, SortByNamePipe, FilterByNamePipe],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        MatIconModule,
        MatInputModule,
        JwPaginationModule,
        MatTooltipModule,
        BrowserAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [EnrollService, { provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setup(): any {
    // const fixture = TestBed.createComponent(ViewAllComponent);
    const enrollService = fixture.debugElement.injector.get(EnrollService);

    return {  enrollService };
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit_callTheMethod_ShouldHaveEnrolleesAndIsLoadingFalse', () => {
    // Arrange
    const {  enrollService } = setup();

    const mockResponse = [
      {
        id: '36653835-fbe0-4c42-a93c-3e561823934f',
        active: true,
        name: 'Gabe Newell',
        dateOfBirth: '1962-11-3',
      },
      {
        id: 'ed9f9e35-9767-4586-a19b-903661aa859d',
        active: true,
        name: 'Todd Howard',
        dateOfBirth: '1971-04-25',
      },
      {
        id: 'e8637db3-3549-43ee-8e20-45b8fcb5a370',
        active: false,
        name: 'Reggie Fils-Aime',
        dateOfBirth: '1961-03-25',
      },
      {
        id: '8b8b9cf0-652e-4b82-a7ca-e9ed47e69be4',
        active: false,
        name: 'Hideki Kamiya',
      },
      {
        id: 'f445416d-82c2-4acd-b371-35567d5fd757',
        active: true,
        name: 'Cliffy B',
        dateOfBirth: '1975-02-12',
      },
    ];

    const app = fixture.debugElement.componentInstance;

    spyOn(enrollService, 'getEnrollees').and.callFake(() => {
      return of(mockResponse);
    });

    // Act
    app.ngOnInit();
    fixture.detectChanges();

    // Assert
    expect(app.enrollees).toEqual(mockResponse);
    expect(app.isLoading).toBeFalsy();
  });
});
