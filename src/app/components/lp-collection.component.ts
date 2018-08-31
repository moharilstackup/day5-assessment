import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lp-collection',
  templateUrl: './lp-collection.component.html',
  styleUrls: ['./lp-collection.component.css']
})
export class LpCollectionComponent implements OnInit {

  @Input ()
  lpCollectionList;
  
  constructor() { }

  ngOnInit() {
  }

}
