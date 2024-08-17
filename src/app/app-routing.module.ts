import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ScoreComponent } from './score/score.component';
import { PlacementComponent } from './placement/placement.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'courses',component:CoursesComponent},
  {path:'score',component:ScoreComponent},
  {path:'placement',component:PlacementComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
