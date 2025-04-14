// Constructor vs NgOnInit in Angular - what is the difference?
// - Q1: What is the difference between constructor and ngOnInit?
// - Q2: What should we use?


/**
 * @Component({
 * })
 * export class AppComponent implements OnInit {
 *  
 *  constructor() {
 *      console.log('constructor');
 *  }
 * 
 *  ngOnInit(): void {
 *      console.log('ngOnInit');
 *  }
 * }
 * 
 * In the console, we will see that 'constructor' is bing called earlier than 'ngOnInit', but
 * both are called on initialize our component.
 * 
 * But here is an important knowledge. We are writing angular with the help of classes, which 
 * actually means app.component is a class from plain JavaScript (ECMAScript).
 * 
 * So it means that 'constructor' is not comming from the angular. This is the default thing of classes. 
 * And yes, we can write constructors inside classes and they are working.
 * 
 * CONSTRUCTOR: Is only recommended to inject dependencies but not write anything there
 * 
 * NG-ON-INIT: Is used for initalializations (It is recommended)
 */
