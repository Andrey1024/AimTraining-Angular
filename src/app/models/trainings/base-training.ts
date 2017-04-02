import { ITraining, IScene, State, Point, IStatistic } from '../model';

export abstract class BaseTraining implements ITraining {
    scene: IScene;
    statistic: IStatistic;

    private state: State;

    protected xMax = 1.1;
    protected yMax = 1;


    constructor() {
        this.state = State.Start;
        this.reset();
    }

    click(pos: Point) {
        switch(this.state) {
            case State.Start:
                this.switchState(State.RunUp);
                break;
            case State.Game:
                this.shoot(pos)
                break;
            case State.End:
                this.switchState(State.Start);
                break;
            case State.Ending:
            case State.RunUp:

                break;
        }
    }

    protected getRandomPos(radius: number): Point {
        var x = Math.random() * (this.xMax - radius * 2) + radius;
        var y = Math.random() * (this.yMax - radius * 2) + radius;
        return new Point(x, y);
    }

    private switchState(newState: State) {
        switch(newState) {
            case State.Start:
                this.state = State.Start;
                this.reset();
                break;
            case State.RunUp:
                this.state = State.Game;
                this.startGame();
                break;
            case State.Game:
                this.state = State.Game;
                break;
            case State.Ending:
                this.state = State.Ending;
                break;
            case State.End:
                this.state = State.End;
                break;
            
        }
    }

    abstract startGame();

    abstract shoot(pos: Point);

    reset() {
        this.scene = {
            background: 'black',
            drawables: []
        }
    }
}