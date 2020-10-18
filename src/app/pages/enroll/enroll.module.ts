import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EnrollRoutingModule } from './enroll-routing.module';
import { ViewAllComponent } from './view-all/view-all.component';
import { EnrollComponent } from './enroll.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';

import { SortByNamePipe } from 'src/app/core/pipes/sort-by-name.pipe';
import { FilterByNamePipe } from 'src/app/core/pipes/filter-by-name.pipe';

import { JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    ViewAllComponent,
     EnrollComponent,
     EditComponent,
     SortByNamePipe,
     FilterByNamePipe
    ],
  imports: [
    RouterModule,
    CommonModule,
    EnrollRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    JwPaginationModule,
    MatTooltipModule,
    MatRadioModule,
  ]
})
export class EnrollModule { }
