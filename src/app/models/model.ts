export enum State { Start, RunUp, Game, End, Ending };

export class Time {
    private timeStart = 0;
    
    constructor () {
        this.timeStart = performance.now();
    }
        
    public get currentTime() : number {
        return performance.now() - this.timeStart;
    }    
}

export class Point {
    constructor(
        public x: number,
        public y: number
    ) {}
}

export interface IDrawable {
    type    : 'circle' | 'text' | 'ring';
    position: Point;
    color   : string;
    radius? : number;
}

export interface IScene {
    background: string;
    drawables: IDrawable[];
}

export interface IHittable {
    hit(pos: Point): boolean;
}

export interface IStatItem {
    name  : string;
    value : number;
    color : string;
}

export interface IStatistic {
    score: number;
    items: IStatItem[];
}

export interface ITraining {
    scene: IScene;
    statistic: IStatistic;
    click(pos: Point);
    reset();
}


export class EAStatistics implements IStatistic {
    items: IStatItem[];
    score = 0;

    constructor() {
        this.items = [
            { name: 'Hits', value: 0, color: 'black'},
            { name: 'Aim' , value: 0, color: 'black'}
        ]
    }
}
