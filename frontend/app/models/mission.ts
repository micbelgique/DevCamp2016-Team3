import { Checkpoint } from './checkpoint';

export class Mission {
    description: string;
    id: string;
    illustration: string;
    name: string;
    slug: string;
    checkpoints: Array<Checkpoint>;
}
