import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

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
export class ServerElementComponent implements OnInit,
                                               OnChanges,
                                               DoCheck, 
                                               AfterContentInit, 
                                               AfterContentChecked, 
                                               AfterViewInit, 
                                               AfterViewChecked,
                                               OnDestroy {

  // If input does not have a parameter, it will take the same name of the variable.
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('TextContent', this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    // Called whenever Angular checks for any changes
    // and there are a couple of triggers.
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph: ', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('TextContent', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
