import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // , encapsulation: ViewEncapsulation.None ,
  // - Emulated (default one), 
  // - Native: This uses the shadow dom technology
  // - None: With this, all pages (globally) are going to take effect of the style.
  // - ShadowDom: This will replace to Native later in newer versions.
})
export class ServerElementComponent implements OnInit {

  // If input does not have a parameter, it will take the same name of the variable.
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
