import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  people = Array(500).fill(0);
  
  constructor() { }

  ngOnInit() {
  }

  goToTheLast() {
    this.viewport.scrollToIndex(this.people.length);
  }

  goToTheFirst() {
    this.viewport.scrollToIndex(0);
  }

  goToTheMiddle() {
    this.viewport.scrollToIndex(this.people.length / 2);
  }
}
