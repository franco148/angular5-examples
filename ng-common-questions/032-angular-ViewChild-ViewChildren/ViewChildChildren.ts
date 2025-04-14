// What are ViewChild and ViewChildren in Angular?
// - Q1: Write an example of ViewChild
// - Q2: Write an example of ViewChildren


/**
 * Sometimes, we don't really want to communicate with them using INPUTS and OUTPUTS
 * but we just want either to directly call some method or change a value of our 
 * child component, or we want to access and change our DOM element.
 * 
 * @Component({
 *  selector: 'app-root',
 *  templateUrl: './app.component.html',
 *  styleUrls: ['./app.component.css']
 * })
 * export class AppComponent implement AfterViewInit {
 *  @ViewChild(ChildComponent, {static: true})child? : ChildComponent;
 *  @ViewChild('button', {static: true}) buttonRef?: ElementRef<HTMLButtonElement>; // This will need ngAfterViewInit()
 * 
 *  increment(): void {
 *      this.child?.increment(); // This can also be done by buttonRef
 *  }
 * 
 *  ngAfterViewInit(): void {
 *      if(this.buttonRef?.nativeElement) {
 *          this.buttonRef.nativeElement.innerHTML = 'foooo'; // This will change the name of the button for example
 *      }
 *  }
 * }
 * 
 * What does line 17 (@ViewChild) mean?: Here we are saying that we want to access
 * our child component through ViewChild and we are using here an option static. This
 * option means that we always have this element inside our HTML and actually here 
 * you can see that this element is rendered always.
 * 
 * 
 */


/**
 * VIEW CHILDREN EXAMPLE:
 * 
 * @Component({
 *  selector: 'app-root',
 *  templateUrl: './app.component.html',
 *  styleUrls: ['./app.component.css']
 * })
 * export class AppComponent implement AfterViewInit {
 *  @ViewChild(ChildComponent, {static: true})child? : ChildComponent;
 *  @ViewChild('button', {static: true}) buttonRef?: ElementRef<HTMLButtonElement>; // This will need ngAfterViewInit()
 *  @ViewChildren(ChildComponent) children?: QueryList<ChildCompnent>; // In case we have many ChildComponent as a children of this component
 *  @ViewChildren('button') buttonsRef?: QueryList<ElementRef<HTMLButtonElement>>;
 * 
 *  increment(): void {
 *      this.child?.increment(); // This can also be done by buttonRef
 *  }
 * 
 *  ngAfterViewInit(): void {
 *      if(this.buttonRef?.nativeElement) {
 *          this.buttonRef.nativeElement.innerHTML = 'foooo'; // This will change the name of the button for example
 *      }
 *  }
 * }
 */
