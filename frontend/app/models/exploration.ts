import { Mission } from './mission';

class CompletedItem {
  checkpoint: String;
  file: String;
}

export class Exploration {
  completed: Array<CompletedItem>;
  mission: Mission;
  name: string;
  slug: string;
}
