import { Component, OnInit, Inject, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CanvasService, ICanvasService } from './canvas.service';
import { Point, IScene} from '../../../models/model'

@Component({
  selector: 'app-canvas',
  outputs: ['clicks'],
  inputs: ['scene'],
  template: `<canvas style="width: 100%" class="canvas" #canvasEl></canvas>`,
  providers: [
    { provide: 'CanvasService', useClass: CanvasService}
  ],
  host: {
    'style': 'flex: 5'
  }
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvasEl') canvasEl: ElementRef;

  clicks: EventEmitter<Point> = new EventEmitter<Point>();
  scene: IScene;

  private animation: number;

  constructor(
     @Inject('CanvasService') private canvas: CanvasService
  ) { }

  ngOnInit() {
    this.canvas.initialize(this.canvasEl.nativeElement)
    Observable.fromEvent(this.canvasEl.nativeElement, 'mousedown').subscribe((e: MouseEvent) => {
      this.clicks.next(this.canvas.userToReal(e))
    })
    this.animationLoop();
  }

  private animationLoop() {
    this.animation = requestAnimationFrame(() => {
      this.canvas.drawScene(this.scene);
      this.animationLoop();
    })
  }
}
