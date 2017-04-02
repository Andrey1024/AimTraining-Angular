import { Injectable } from '@angular/core';
import { IDrawable, IScene, Point } from '../../../models/model';

export interface ICanvasService {
  initialize(canvas: HTMLCanvasElement): void;
  userToReal(e: MouseEvent): Point;
  drawScene(scene: IScene): void;
}

@Injectable()
export class CanvasService implements ICanvasService {
  private ctx: CanvasRenderingContext2D;

  initialize(canvas: HTMLCanvasElement): void {
    this.ctx = canvas.getContext('2d');
    this.setScale();
    this.clearCanvas('black');
  }

  private setScale() {
    this.ctx.canvas.style.height = (this.ctx.canvas.clientWidth / 1.1).toString() + 'px';
    let width = Math.floor(this.ctx.canvas.clientWidth);
    let height = Math.floor(this.ctx.canvas.clientHeight);
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.ctx.scale(height, height);
  }

  private clearCanvas(color: string) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, 1.1, 1);
    this.ctx.restore();
  }

  private drawCircle(circle: IDrawable) {                        
    this.ctx.save();
                    
    this.ctx.beginPath();
    this.ctx.fillStyle = circle.color;
    this.ctx.arc(circle.position.x, circle.position.y, circle.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    
    this.ctx.restore(); 
  }

  private drawText(text: IDrawable) {

  }

  private drawRing(ring: IDrawable) {
    
  }

  private drawObject(obj: IDrawable) {
    switch (obj.type) {
      case 'circle':
        this.drawCircle(obj)
        break;
      case 'text':

        break;
      case 'ring':

        break;
    }
  }

  userToReal(evt: MouseEvent): Point {
    let height = this.ctx.canvas.height;
    return new Point(
      evt.offsetX / height,
      evt.offsetY / height
    )
  }

  drawScene(scene: IScene): void {
    this.clearCanvas(scene.background);
    scene.drawables.forEach(v => this.drawObject(v));
  }

}
