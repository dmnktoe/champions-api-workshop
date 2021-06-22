import { Stats } from './Stats';
import { Sprite } from  './Sprite';

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  stats:  Stats;
  icon: string;
  sprite: Sprite;
  description: string;
}
