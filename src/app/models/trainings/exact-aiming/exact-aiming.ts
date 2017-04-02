import { BaseTraining } from '../base-training';
import { Point, Time, IHittable, EAStatistics } from '../../model';
import { PulseCircle } from '../../drawable';


export class ExactAiming extends BaseTraining {
    targetCount: number;
    timer: Time;

    hittables: IHittable[] = [];

    constructor() {
        super();
        this.statistic = new EAStatistics();
    }

    private hitted(circle: PulseCircle) {
        this.scene.drawables.splice(this.scene.drawables.indexOf(circle), 1);
        this.hittables.splice(this.hittables.indexOf(circle), 1);
        this.addCircle();
    }

    private addCircle() {
        let circle = new PulseCircle(
            this.getRandomPos(1 / 26),
            'blue',
            1 / 100,
            3370,
            (time: number) => {
                this.hitted(circle);
            }
        )
        this.scene.drawables.push(circle);
        this.hittables.push(circle)
    }

    shoot(pos: Point) {
        this.hittables.forEach(v => {
            v.hit(pos);
        })
    }

    startGame() {
        this.targetCount = 2;
        this.addCircle();
        this.addCircle();
        this.timer = new Time();
    }
}