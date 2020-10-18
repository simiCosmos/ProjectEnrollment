import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/core/services/enroll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  enrolleeDetails = {
    id: '',
    active: '0',
    name: '',
    dateOfBirth: ''
  };

  constructor(
    private enrollservice: EnrollService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.enrolleeDetails.id = this.route.snapshot.params['id'];
    this.getDetails(this.enrolleeDetails.id);


  }

  name = new FormControl('', [
    Validators.required,
  ]);
  active = new FormControl('', [
    Validators.required,
  ]);

  getDetails(id: String): any {
    this.enrollservice.getEnrolleeById(id).subscribe(data => {
      this.enrolleeDetails = data;
      this.enrolleeDetails.active = data.active? '1':'0';
    }, error => {
      alert('Failed to fetch details. Redirecting to details page.');
      this.router.navigate(['/enroll/view-all']);
    })
  }

  saveData() {
    if(!this.name.hasError('required') && !this.active.hasError('required') ) {
      this.enrollservice.updateEnrollee(
        this.enrolleeDetails
      ).subscribe(data => {
        if(data.id) {
          alert('Enrollee updated successfully.');
          this.router.navigate(['/enroll/view-all']);
        }
      }, error => {
        alert('Failed to updated Enrollee. Please try again.');
      });
    }
  }
}
