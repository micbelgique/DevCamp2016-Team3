import { Pipe, PipeTransform } from '@angular/core';

const categories = Object.freeze({
  "zen": "Zen",
  "wwii": "Seconde Guerre Mondiale",
  "new_art": "Art Contemporain",
  "snake": "Serpent",
  "gugenheim": "Gugenheim",
  "vandelay": "Vandelay"
});

@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(value: string) {
    return categories[value];
  }
}
