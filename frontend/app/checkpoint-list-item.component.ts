import { Component, Input, OnInit } from '@angular/core';
import { Checkpoint } from './models/checkpoint';
import { Exploration } from './models/exploration';

@Component({
  selector: 'checkpoint-list-item',
  templateUrl: 'app/checkpoint-list-item.component.html'
})
export class CheckpointListItemComponent implements OnInit {
  @Input() checkpoint: Checkpoint;
  @Input() exploration: Exploration;
  imageSrc: String;

  isCompleted: Boolean;
  
  constructor() { }

  ngOnInit() {
      const completed = this.exploration && this.exploration.completed.filter(
          item => item.checkpoint === this.checkpoint.slug
      );
      this.imageSrc = `assets/images/missions-map/${this.checkpoint.placeholder}`;
      this.isCompleted = this.exploration && this.exploration.completed.some(item => item.checkpoint === this.checkpoint.slug);

      if (this.isCompleted)
      {
          this.imageSrc = `http://localhost:3001/uploads/${completed[0].file}`;
      }
    
  }
}
