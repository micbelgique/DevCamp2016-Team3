import { Component, Input, OnInit } from '@angular/core';
import { Checkpoint } from './models/checkpoint';
import { Exploration } from './models/exploration';
import { AppSettings } from './app.settings';

@Component({
  selector: 'checkpoint-list-item',
  templateUrl: 'app/checkpoint-list-item.component.html'
})
export class CheckpointListItemComponent implements OnInit {
  @Input() checkpoint: Checkpoint;
  @Input() exploration: Exploration;
  imageSrc: String;

  isCompleted: Boolean;
  
  constructor(private appSettings: AppSettings) { }

  ngOnInit() {
      const completed = this.exploration && this.exploration.completed.filter(
          item => item.checkpoint === this.checkpoint.slug
      );
      this.imageSrc = `assets/images/missions-map/${this.checkpoint.placeholder}`;
      this.isCompleted = this.exploration && this.exploration.completed.some(item => item.checkpoint === this.checkpoint.slug);

      if (this.isCompleted)
      {
          this.imageSrc = `${this.appSettings.baseUrl}/uploads/${completed[0].file}`;
      }
    
  }
}
