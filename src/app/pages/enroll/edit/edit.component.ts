import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/core/services/enroll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Enrollee } from 'src/app/models/enrollee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  enrolleeDetails: Enrollee = {
    id: '',
    active: false,
    name: '',
    dateOfBirth: '',
  };

  id = 'id';

  constructor(
    private enrollservice: EnrollService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  name = new FormControl('', [Validators.required]);
  active = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.enrolleeDetails.id = this.route.snapshot.params[this.id];
    this.getDetails(this.enrolleeDetails.id);
  }

  getDetails(id: string): any {
    this.enrollservice.getEnrolleeById(id).subscribe(
      (data) => {
        this.enrolleeDetails.id = data.id;
        this.enrolleeDetails.name = data.name;
        this.enrolleeDetails.dateOfBirth = data.dateOfBirth;
        this.enrolleeDetails.active = data.active;
      },
      (error) => {
        alert('Failed to fetch details. Redirecting to details page.');
        this.router.navigate(['/enroll/view-all']);
      }
    );
  }

  saveData() {
    if (!this.name.hasError('required') && !this.active.hasError('required')) {
      this.enrollservice.updateEnrollee(this.enrolleeDetails).subscribe(
        (data) => {
          if (data.id) {
            alert('Enrollee updated successfully.');
            this.router.navigate(['/enroll/view-all']);
          }
        },
        (error) => {
          alert('Failed to updated Enrollee. Please try again.');
        }
      );
    }
  }
}
