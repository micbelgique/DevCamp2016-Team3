import { Pipe, PipeTransform } from '@angular/core';

const categories = Object.freeze({
  "zen": "Zen",
  "fun": "Fun",
  "games": "Jeux",
  "travel": "Voyage"
});

@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(value: string) {
    return categories[value];
  }
}
