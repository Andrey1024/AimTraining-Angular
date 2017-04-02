import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TrainingRoutingModule} from './training-routing.module';
import { TrainingTabsComponent} from './training-tabs.component';
import { TrainingComponent } from './training-tab/training.component';
import { StatisticsComponent } from './statistics-tab/statistics.component';
import { CanvasComponent } from './training-tab/canvas/canvas.component';
import { StatsComponent} from './training-tab/stats/stats.component'

@NgModule({
  declarations: [
      TrainingTabsComponent,
      StatisticsComponent,
      CanvasComponent,
      StatsComponent,
      TrainingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TrainingRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class TrainingModule { }
