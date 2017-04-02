import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITraining, Point} from '../../models/model';
import { ExactAiming } from '../../models/trainings/exact-aiming/exact-aiming'


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  training: ITraining;

  constructor(
    private route: ActivatedRoute
  ) {    
      this.training = new ExactAiming();
      route.params.subscribe((params) => {
        this.loadTraining(params["id"])
      })
  }

  private loadTraining(id: string) {
    switch(id) {
      case 'ea':
      case 'ea_sur':
        this.training = new ExactAiming();
        break;
      default:

        break;
    }
  }

  onClick(pos: Point) {
    this.training.click(pos);
  }

  ngOnInit() {
  }

}
