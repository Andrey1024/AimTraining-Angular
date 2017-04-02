import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TrainingTabsComponent} from './training-tabs.component';
import { TrainingComponent} from './training-tab/training.component';
import { StatisticsComponent } from './statistics-tab/statistics.component'

const trainingRoutes: Routes = [
  { path: ':id', component: TrainingTabsComponent,
    children: [
        { path: '', redirectTo: 'training', pathMatch: 'full'},
        { path: 'training', component: TrainingComponent},
        { path: 'statistics', component: StatisticsComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(trainingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrainingRoutingModule {}