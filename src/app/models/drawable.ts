import { IDrawable, Point, Time, IHittable} from './model';

export abstract class BaseDrawable implements IDrawable {
    constructor(
        public type,
        public position: Point,
        public color: string
    ) {}

}

export class BaseCircle extends BaseDrawable implements IHittable {
    time = new Time();

    constructor(position: Point, color: string, public radius: number, protected callBack: (time: number) => void) {
        super('circle', position, color);
        this.radius = radius;
    }

    hit(pos: Point): boolean {
        let radius = Math.sqrt(Math.pow((pos.x - this.position.x),2) + Math.pow((pos.y - this.position.y),2));
        if (radius <= this.radius) {
            this.callBack(this.time.currentTime);
            return true;
        }
        return false;
    }
}

export class PulseCircle extends BaseCircle {
    MaxRadius = 1 / 26;
    MinRadius = 1 / 100;

    private update: number;

    constructor(position: Point, color: string, radius: number, public lifeTime: number, callBack: (time: number) => void) {
        super(position, color, radius, callBack);
        this.update = requestAnimationFrame(() => this.updateRadius())
    }

    hit(pos: Point): boolean {
        if(super.hit(pos)) {
            cancelAnimationFrame(this.update);
            return true;
        }
        return false;
    }

    private updateRadius() {
        var time = this.time.currentTime;
        if (time >= this.lifeTime) {
            this.callBack(time);
            return;
        }
        var x = time * 2 / this.lifeTime;
        if (x <= 1)
            x = Math.pow(x, 1.6);
        else
            x = Math.pow(2 - x, 1.6);
        this.radius = this.MinRadius + (this.MaxRadius - this.MinRadius) * x;
        this.update = requestAnimationFrame(() => this.updateRadius());
    }
}
