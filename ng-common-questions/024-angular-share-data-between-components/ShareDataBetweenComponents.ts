// Sharing data between components in Angular
// - Q1: How you can share your data between 2 different components?

/**
 * We have 4 tipical ways to share data between components:
 * 
 * 1. Parent-Child communication
 *    @Input() sharedProperty?: <type> // This in child
 *    <app-child [sharedProperty]="my data type"> // This in parent
 * 
 * 2. Child-Parent communication
 *    @Output() notifyParent = new EventEmitter<type>(); // This in child
 * 
 * 3. providers = [SharedService, ....]
 *    Services should be registered in PROVIDES property in order to be rehused by components (This is going to be global share)
 * 
 * 4. State Management
 *    We can use state management libraries like Redux (NgRx)
 */

