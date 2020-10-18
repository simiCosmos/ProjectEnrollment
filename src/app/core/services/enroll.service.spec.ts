import { inject, TestBed } from '@angular/core/testing';

import { EnrollService } from './enroll.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('EnrollService', () => {
  let enrollService: EnrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    enrollService = TestBed.inject(EnrollService);
  });

  it('should be created', () => {
    expect(enrollService).toBeTruthy();
  });

  // test get enrollees method
  it('getEnrollees_callTheGetenrollessMethod_ShouldReturnEnrollees', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      // Arrange
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
      // Assert
      enrollService.getEnrollees().subscribe((response) => {
        expect(response.length).toEqual(mockResponse.length);
        expect(response).toEqual(mockResponse);
      });

      const request = httpMock.expectOne('http://localhost:8080/enrollees');
      expect(request.request.method).toEqual('GET');
      request.flush(mockResponse);
    }
  )); // End of TC

  // test update enrollee method
  it('updateEnrollee_callTheUpdateEnrolleeMethodWithUpdatedDetails_ShouldReturnUpdatedEnrolleeDeatails', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      // Arrange
      const mockResponse = {
        id: 'test-id',
        active: true,
        name: 'tset name',
        dateOfBirth: '1962-11-3',
      };
      // Assert
      enrollService.updateEnrollee(mockResponse).subscribe((response) => {
        expect(response.id).toEqual(mockResponse.id);
        expect(response.active).toEqual(mockResponse.active);
        expect(response.name).toEqual(mockResponse.name);
        expect(response.dateOfBirth).toEqual(mockResponse.dateOfBirth);
      });

      const request = httpMock.expectOne('http://localhost:8080/enrollees/test-id');
      expect(request.request.method).toEqual('PUT');
      request.flush(mockResponse);
    }
  )); // End of TC

  // test get enrollee method
  it('getEnrollee_callTheUpdateEnrolleeMethodWithId_ShouldReturnEnrolleeDeatails', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      // Arrange
      const mockResponse = {
        id: 'test-id',
        active: true,
        name: 'tset name',
        dateOfBirth: '1962-11-3',
      };
      // Assert
      enrollService.getEnrolleeById('test-id').subscribe((response) => {
        expect(response.id).toEqual(mockResponse.id);
        expect(response.active).toEqual(mockResponse.active);
        expect(response.name).toEqual(mockResponse.name);
        expect(response.dateOfBirth).toEqual(mockResponse.dateOfBirth);
      });

      const request = httpMock.expectOne('http://localhost:8080/enrollees/test-id');
      expect(request.request.method).toEqual('GET');
      request.flush(mockResponse);
    }
  )); // End of TC

  // test get enrollee method - Negative case
  it('getEnrollee_callTheUpdateEnrolleeMethodWithInvalidId_ShouldReturnInternalServerError', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      // Arrange
      const mockResponse = 'Internal server error';
      // Assert
      enrollService.getEnrolleeById('test-invalid-id').subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const request = httpMock.expectOne('http://localhost:8080/enrollees/test-invalid-id');
      expect(request.request.method).toEqual('GET');
      request.flush(mockResponse);
    }
  )); // End of TC
});
