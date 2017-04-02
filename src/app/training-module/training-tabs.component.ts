import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './training-tabs.component.html',
  styleUrls: ['./training-tabs.component.css']
})
export class TrainingTabsComponent {
    links = [
        {label: 'Training', link: ['training']},
        {label: 'Statistics', link: ['statistics']}
    ]
}
