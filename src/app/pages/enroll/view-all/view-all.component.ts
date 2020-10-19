import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/core/services/enroll.service';

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

  enrollees = [];

  isLoading = true;

  search = '';
  pageOfItems: any[];

  constructor(private enrollService: EnrollService) {}

  ngOnInit(): void {
    this.enrollService.getEnrollees().subscribe((data) => {
      this.enrollees = data;
      this.isLoading = false;
    });
  }

  onChangePage(pageOfItems: Array<any>): void {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onFilterChange(pageOfItems: Array<any>): void {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
