import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { ExamlistComponent } from './examlist/examlist.component';
import { ExamComponent } from './exam.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExamdetailsComponent,
    ExamlistComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
