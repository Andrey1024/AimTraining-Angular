import { Injectable } from '@angular/core';
import { IDrawable, IScene, Point, ITraining} from './models/model';

export interface ITrainingInfo {
    name: string;
    link: string;
    info?: string;
}

const trainings: ITrainingInfo[] = [
    { name: 'Exact Aiming', link: 'ea'},
    { name: 'Exact Aiming Survival', link: 'ea_sur'}
]


@Injectable()
export class TrainingsService {
    getTrainingList(): Promise<ITrainingInfo[]> {
        return Promise.resolve(trainings);
    }
}