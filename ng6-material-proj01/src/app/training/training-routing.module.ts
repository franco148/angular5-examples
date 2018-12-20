import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { TrainingComponent } from './training.component';
// import { AuthGuard } from '../auth/auth.guard'; // Removing this from here

const routes: Routes = [
  { path: '', component: TrainingComponent } // We need to leave empty the PATH for Lazy loading approach.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
