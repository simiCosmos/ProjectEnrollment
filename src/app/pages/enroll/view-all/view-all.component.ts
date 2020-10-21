import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/core/services/enroll.service';
import { Enrollee } from 'src/app/models/enrollee.model';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss'],
})
export class ViewAllComponent implements OnInit {
  /**
   *
   *
   * @memberof ViewAllComponent
   */
  public serach = '';

  enrollees: Enrollee[] = [];

  isLoading = true;

  search = '';
  pageOfItems: any[];

  constructor(private enrollService: EnrollService) {}

  ngOnInit(): void {
    this.enrollService.getEnrollees().subscribe((data) => {
      let eachEnrollee = null;
      data.forEach(enrolleeFromAPI => {
        eachEnrollee = new Enrollee();
        eachEnrollee.id = enrolleeFromAPI.id;
        eachEnrollee.name = enrolleeFromAPI.name;
        eachEnrollee.dateOfBirth = enrolleeFromAPI.dateOfBirth;
        eachEnrollee.active = enrolleeFromAPI.active;
        this.enrollees.push(eachEnrollee);
      });
      this.isLoading = false;
    });
  }

  onChangePage(pageOfItems: Array<Enrollee>): void {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onFilterChange(pageOfItems: Array<Enrollee>): void {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
