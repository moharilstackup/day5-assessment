import {coerceNumberProperty} from '@angular/cdk/coercion';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lp-entry',
  templateUrl: './lp-entry.component.html',
  styleUrls: ['./lp-entry.component.css']
})
export class LpEntryComponent implements OnInit {

  @ViewChild ('lpFormEntry')
  lpFormEntry: NgForm;

  lpList = [ ];
  resetRatingValue=0;
  ratingValue = 0;

  @Input ()
  lpCollection = "childLpCollection";
  @Input ()
  lpCollectionList = [];

  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 10) {
      return 'EXCELLENT'
      // return Math.round(value / 10) + 'k';
    }

    return value;
  }

 
  addLpEntry() {
    console.log("addLpEntry() : ")
    for (let i in this.lpFormEntry.value) {
      if ( i == "rating" ) {
        console.log("Found rating");
        if ( this.lpFormEntry.value[i] == null ) {
          console.log("Found rating is null");
          this.lpFormEntry.value[i]=0;
        }
      }
      console.log('i=',i,' ,v=', this.lpFormEntry.value[i]);
    } 
   // this.clicked.next("This is event emitter clicked!!");
   this.lpList.push(this.lpFormEntry.value);
   this.lpCollectionList.push(this.lpFormEntry.value);
   this.lpCollection=this.lpFormEntry.value["artist"];

    this.lpFormEntry.resetForm({ ratingValue: 0 });
    //this.ratingValue=0;
    
  }

}
