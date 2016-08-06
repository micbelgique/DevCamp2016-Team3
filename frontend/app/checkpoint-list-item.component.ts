import { Component, Input, OnInit } from '@angular/core';
import { Checkpoint } from './models/checkpoint';
@Component({
  selector: 'checkpoint-list-item',
  templateUrl: 'app/checkpoint-list-item.component.html'
})
export class CheckpointListItemComponent implements OnInit {
  @Input() checkpoint: Checkpoint;
  
  constructor() { }

  ngOnInit() { }
}
