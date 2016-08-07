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

  isCompleted: Boolean;
  
  constructor() { }

  ngOnInit() {
    this.isCompleted = this.exploration && this.exploration.completed.some(item => item.checkpoint === this.checkpoint.slug);
  }
}
