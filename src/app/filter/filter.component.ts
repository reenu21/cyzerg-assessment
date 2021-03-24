import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  status:string;
  @Output() emitStatus = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  filterUser(){
    this.emitStatus.emit(this.status);
  }
}
