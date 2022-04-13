import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Provider } from 'react-redux';
import { ExamComponent } from './exam.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { ExamlistComponent } from './examlist/examlist.component';

const routes: Routes = [
{
  path: 'exam',
  component: ExamComponent,
  children:[
    {
      path:'',
      component:ExamlistComponent,
      pathMatch: 'full'
    },
    {
      path:'details',
      component:ExamdetailsComponent,
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExamRoutingModule { }
