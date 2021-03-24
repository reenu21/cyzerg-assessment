import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search:string
  @Output() emitSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  searchUser(){
    this.emitSearch.emit(this.search);
  }
}
