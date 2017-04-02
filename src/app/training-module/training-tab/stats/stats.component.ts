import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  inputs: ['stat'],
  template: `<h1>Stats here!</h1>`,
  host: {
    'style': 'flex: 2'
  }
})
export class StatsComponent implements OnInit {
  stat: any;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}