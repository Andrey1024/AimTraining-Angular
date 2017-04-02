import { Component } from '@angular/core';
import { ITrainingInfo, TrainingsService } from '../trainings.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    'style': 'display: flex; justify-content: space-between'
  }
})
export class HomeComponent {
  trainingList: ITrainingInfo[];
  constructor(
    private trainings: TrainingsService
  ) {
    trainings.getTrainingList().then(v => this.trainingList = v);
  }
}
